function setup(){
    canvas=createCanvas(370,350);
    canvas.position(500,200);
    video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,370,350);
}