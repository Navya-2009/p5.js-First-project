function setup(){

    canvas = createCanvas(600,450);
    canvas.position(100,200);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){

    image(video,200,150,170,150);
    circle(50, 50, 70);
    fill(0,0,0);
    circle(550, 405, 70);
    
}