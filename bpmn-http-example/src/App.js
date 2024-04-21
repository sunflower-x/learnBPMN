import { getXmlStr } from "./api/index";
import { useEffect, useRef, useState } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css"; // 右边工具栏样式

import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
import "./index.css";
function App() {
  const httpExample = useRef();
  const saveBpmn = useRef();
  const saveSvg = useRef();
  const [bpmnModeler, setBpmnModeler] = useState();
  useEffect(() => {
    getXmlStr().then((res) => {
      init(res.data.xmlStr);
    });
  }, []);
  const init = (xmlStr) => {
    const canvas = httpExample.current;
    const bpmnModeler = new BpmnModeler({
      container: canvas,
      //添加控制板
      propertiesPanel: {
        parent: "#js-properties-panel",
      },
      additionalModules: [
        // 右边的属性栏
        propertiesProviderModule,
        propertiesPanelModule,
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor,
      },
    });
    setBpmnModeler(bpmnModeler);
    //   注意这里得使用^6.0.4版本的bpmn-js,高版本的会报错
    bpmnModeler.importXML(xmlStr, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("success");
        success(bpmnModeler);
      }
    });
  };
  const success = (bpmnModeler) => {
    addBpmnListener(bpmnModeler);
  };
  const addBpmnListener = (bpmnModeler) => {
    bpmnModeler.on("commandStack.changed", (e) => {
      bpmnModeler.saveXML({ format: true }, (err, xml) => {
        console.log(err, xml);
      });
    });
  };

  const getFilename = (xml) => {
    let start = xml.indexOf("process");
    let filename = xml.substr(start, xml.indexOf(">"));
    filename = filename.substr(filename.indexOf("id") + 4);
    filename = filename.substr(0, filename.indexOf('"'));
    return filename;
  };

  const handleSaveBpmn = () => {
    bpmnModeler.saveXML({ format: true }, (err, xml) => {
      if (!err) {
        // 获取文件名
        const name = `${getFilename(xml)}.bpmn`;
        // 将文件名以及数据交给下载方法
        const encodedData = encodeURIComponent(xml);
        if (xml) {
          const link = document.createElement("a");
          // 将数据给到链接
          link.href =
            "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
          // 设置文件名
          link.download = name;
          // 触发点击事件开始下载
          link.click();
        }
      }
    });
  };

  const handleSaveSvg = () => {
    bpmnModeler.saveXML({ format: true }, (err, xml) => {
      if (!err) {
        // 获取文件名
        const name = `${getFilename(xml)}.svg`;

        if (xml) {
          // 从建模器画布中提取svg图形标签
          let context = "";
          const djsGroupAll = document.querySelectorAll(".djs-group");
          for (let item of djsGroupAll) {
            context += item.innerHTML;
          }
          // 获取svg的基本数据，长宽高
          const viewport = document.querySelector(".viewport")?.getBBox();

          // 将标签和数据拼接成一个完整正常的svg图形
          const svg = `
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="${viewport.width}"
                height="${viewport.height}"
                viewBox="${viewport.x} ${viewport.y} ${viewport.width} ${viewport.height}"
                version="1.1"
                >
                ${context}
              </svg>
            `;
          const link = document.createElement('a')
          // 将数据给到链接
          // 将文件名以及数据交给下载方法
          const encodedData = encodeURIComponent(svg);
          link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
          // 设置文件名
          link.download = name;
          // 触发点击事件开始下载
          link.click();
        }
      }
    });
  }

  return (
    <div className="App">
      <div className="containers">
        <div className="canvas" ref={httpExample}></div>
        <div id="js-properties-panel" className="panel"></div>
        <button style={{ position: "absolute", left: "100px", bottom: "100px" }} onClick={handleSaveBpmn}>保存为BPMN</button>
        <button style={{ position: "absolute", left: "200px", bottom: "100px" }} onClick={handleSaveSvg}>保存为SVG</button>
      </div>
    </div>
  );
}

export default App;
