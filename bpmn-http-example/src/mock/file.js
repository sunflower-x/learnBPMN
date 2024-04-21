import Mock from "mockjs";

// mock方法,详细的可以看官方文档
const Random = Mock.Random;

export default [
  {
    url: "/getXMLStr",
    type: "get",
    response: (config) => {
      return {
        code: 200,
        data: {
          xmlStr: `<?xml version="1.0" encoding="UTF-8"?>
          <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="17.0.2">
            <process id="Process_1" isExecutable="false">
              <startEvent id="StartEvent_1y45yut" name="开始">
                <outgoing>SequenceFlow_0h21x7r</outgoing>
              </startEvent>
              <task id="Task_1hcentk" name="填写表单">
                <incoming>SequenceFlow_0h21x7r</incoming>
                <outgoing>Flow_08av1wo</outgoing>
              </task>
              <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
              <exclusiveGateway id="Gateway_0rt27uq">
                <incoming>Flow_08av1wo</incoming>
                <outgoing>Flow_1ygz1is</outgoing>
                <outgoing>Flow_1nk6pcy</outgoing>
              </exclusiveGateway>
              <sequenceFlow id="Flow_08av1wo" sourceRef="Task_1hcentk" targetRef="Gateway_0rt27uq" />
              <task id="Activity_1033nwh" name="审核人01">
                <incoming>Flow_1ygz1is</incoming>
                <outgoing>Flow_0c4xyg2</outgoing>
              </task>
              <sequenceFlow id="Flow_1ygz1is" sourceRef="Gateway_0rt27uq" targetRef="Activity_1033nwh" />
              <task id="Activity_0egsp6x" name="审核人02">
                <incoming>Flow_1nk6pcy</incoming>
                <outgoing>Flow_1qj9vmw</outgoing>
              </task>
              <sequenceFlow id="Flow_1nk6pcy" sourceRef="Gateway_0rt27uq" targetRef="Activity_0egsp6x" />
              <endEvent id="Event_02avx2t">
                <incoming>Flow_1qj9vmw</incoming>
              </endEvent>
              <sequenceFlow id="Flow_1qj9vmw" sourceRef="Activity_0egsp6x" targetRef="Event_02avx2t" />
              <endEvent id="Event_04ggluz">
                <incoming>Flow_0c4xyg2</incoming>
              </endEvent>
              <sequenceFlow id="Flow_0c4xyg2" sourceRef="Activity_1033nwh" targetRef="Event_04ggluz" />
            </process>
            <bpmndi:BPMNDiagram id="BpmnDiagram_1">
              <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
                <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
                  <omgdc:Bounds x="152" y="102" width="36" height="36" />
                  <bpmndi:BPMNLabel>
                    <omgdc:Bounds x="160" y="145" width="22" height="14" />
                  </bpmndi:BPMNLabel>
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
                  <omgdc:Bounds x="310" y="80" width="100" height="80" />
                  <bpmndi:BPMNLabel />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="Gateway_0rt27uq_di" bpmnElement="Gateway_0rt27uq" isMarkerVisible="true">
                  <omgdc:Bounds x="635" y="95" width="50" height="50" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="Activity_1033nwh_di" bpmnElement="Activity_1033nwh">
                  <omgdc:Bounds x="910" y="80" width="100" height="80" />
                  <bpmndi:BPMNLabel />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="Activity_0egsp6x_di" bpmnElement="Activity_0egsp6x">
                  <omgdc:Bounds x="610" y="310" width="100" height="80" />
                  <bpmndi:BPMNLabel />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="Event_04ggluz_di" bpmnElement="Event_04ggluz">
                  <omgdc:Bounds x="1242" y="102" width="36" height="36" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="Event_02avx2t_di" bpmnElement="Event_02avx2t">
                  <omgdc:Bounds x="642" y="512" width="36" height="36" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
                  <omgdi:waypoint x="188" y="120" />
                  <omgdi:waypoint x="310" y="120" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="Flow_08av1wo_di" bpmnElement="Flow_08av1wo">
                  <omgdi:waypoint x="410" y="120" />
                  <omgdi:waypoint x="635" y="120" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="Flow_1ygz1is_di" bpmnElement="Flow_1ygz1is">
                  <omgdi:waypoint x="685" y="120" />
                  <omgdi:waypoint x="910" y="120" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="Flow_1nk6pcy_di" bpmnElement="Flow_1nk6pcy">
                  <omgdi:waypoint x="660" y="145" />
                  <omgdi:waypoint x="660" y="310" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="Flow_1qj9vmw_di" bpmnElement="Flow_1qj9vmw">
                  <omgdi:waypoint x="660" y="390" />
                  <omgdi:waypoint x="660" y="512" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="Flow_0c4xyg2_di" bpmnElement="Flow_0c4xyg2">
                  <omgdi:waypoint x="1010" y="120" />
                  <omgdi:waypoint x="1242" y="120" />
                </bpmndi:BPMNEdge>
              </bpmndi:BPMNPlane>
            </bpmndi:BPMNDiagram>
          </definitions>
          `,
        },
      };
    },
  },
];
