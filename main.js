Webcam.set({
width:300,
height:300,
image_format:"png",
png_quality:100
});
Webcam.attach("#camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML=`<img id=photo src=${data_uri}>`;
});
}

console.log("ml5",ml5.version);
link=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/feicIV5PY/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded Successfully");
}

function speak() {
    var synth = window.speechSynthesis
    speak_1 = "The first prediction is" + prediction_1;
    speak_2 = "And the second prediction is" + prediction_2;
    utterthis = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utterthis);
}

function identify() {
    img = document.getElementById("photo");
    link.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result)
        document.getElementById("emotiontext1").innerHTML = result[0].label;
        document.getElementById("emotiontext2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();
        if(result[0].label == "Amazing"){
            document.getElementById("emotion_img1").innerHTML= "👌" ;
        }
        if(result[0].label == " Thumbs up"){
            document.getElementById("emotion_img1").innerHTML= "👍" ;
        }
        if(result[0].label == "Thumbs down"){
            document.getElementById("emotion_img1").innerHTML= "👎" ;
        }
     
        if(result[1].label == "Amazing"){
            document.getElementById("emotion_img2").innerHTML= "👌" ;
        }
        if(result[1].label == " Thumbs up"){
            document.getElementById("emotion_img2").innerHTML= "👍" ;
        }
        if(result[1].label ==  "Thumbs down"){
            document.getElementById("emotion_img2").innerHTML="👎";
        }
     
    }

}
