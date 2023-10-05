Webcam.set({
    width:350,
    hight:300,
    image_format:'png',
    png_quality:100
});

var camera=document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie">';
})
}
prediction_1="";
prediction_2="";
console.log("ml5 verision=", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TYAegWdJ-/model.json", modelready);

function modelready(){
    console.log("model is loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The prediction is: "+prediction_1;
   
    var utterthis=new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterthis)

}
 function check(){
    var img=document.getElementById("selfie");
    classifier.classify(img,gotresults);

 }

 function gotresults(error,results){
if(error){
    console.log(error);

}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    


    prediction_1=results[0].label;
    
    speak();
    if(results[0].label=="Super"){
document.getElementById("update_emoji").innerHTML="&#128076;";

    }
    if(results[0].label=="Thumbs Up"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
        
            }
            if(results[0].label=="Awesome"){
                document.getElementById("update_emoji").innerHTML="&#9996;";
   
         }         }               
                
                    
                    
                   

}