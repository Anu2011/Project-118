function setup() {

    canvas = createCanvas(350, 350);
    canvas.center();
    background("white");
    
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    }