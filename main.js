x=0;
y=0;
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById('status').innerHTML = "System is listening please speak";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the speech has been recognized as" + content;
    console.log(content);
    if(content == "Circle"){
        x = Math.floor(Math.random() *900 );
        y = Math.floor(Math.random() *600 );
        document.getElementById("status").innerHTML ="Drawing circle"
        draw_circle = "Set";
        console.log("works")
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() *900 );
        y = Math.floor(Math.random() *600 );
        document.getElementById("status").innerHTML ="Drawing rectangle"
        draw_rect = "Set";
        console.log("works")
    }
}
function setup(){
    createCanvas(900,600);
}
function draw(){
    
    if(draw_circle == "Set"){
        radius = Math.floor(Math.random() * 100);
        
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
        
    }
    if(draw_rect == "Set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}