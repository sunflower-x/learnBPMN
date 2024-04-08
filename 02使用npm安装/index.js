import BpmnViewer from 'bpmn-js'
// import testDiagram from 'xxxx'


let viewer=new BpmnViewer({
    container:'#canvas'
})

viewer.importXML(testDiagram,function(err){
    if(!err){
        console.log('success');
        let canvas=viewer.get('canvas')
        canvas.zoom('fit-viewport')
    }else{
        console.log('something get wrong:',err);
    }
})