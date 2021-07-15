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

