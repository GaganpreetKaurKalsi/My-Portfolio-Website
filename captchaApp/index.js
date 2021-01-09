// The variable firebaseConfig contains confidential info.
// Enter your own info to get the app running

var firebaseConfig = {
    apiKey: "***********************************",
    authDomain: "***********************************",
    projectId: "****************",
    storageBucket: "**********************************",
    messagingSenderId: "*************************",
    appId: "*******************************"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function ready(){
    filename = document.getElementById("image").getAttribute("src");
    userInput = document.getElementById("captchaInput").value;
}

var captchas = [
    {
        path : "captcha1.png",
        code : "1"
    },
    {
        path : "captcha2.png",
        code : "2"
    },
    {
        path : "captcha3.png", 
        code : "3" 
    },
    {
        path : "captcha4.png",
        code : "4"
    },
    {
        path : "captcha5.png",
        code : "5"
    },
    {
        path : "captcha6.png",
        code : "6"
    },
    {
        path : "captcha7.png",
        code : "7"
    },
    {
        path : "captcha8.png", 
        code : "8" 
    },
    {
        path : "captcha9.png",
        code : "9"
    },
    {
        path : "captcha10.png",
        code : "10"
    },
]

// Setting the default image 
var index = Math.floor(Math.random() * captchas.length);
var currentImg = captchas[index].path;
document.getElementById("image").setAttribute("src", "samples/"+currentImg);
var captchaValue;
firebase.database().ref('captchas/'+captchas[index].code).on('value', function(snapshot){
    captchaValue = snapshot.val().captcha;
});

function change(){
    index = Math.floor(Math.random() * captchas.length);
    currentImg = captchas[index].path;
    firebase.database().ref('captchas/'+captchas[index].code).on('value', function(snapshot){
        captchaValue = snapshot.val().captcha;
    });
    console.log(currentImg);
    document.getElementById("image").setAttribute("src", "samples/"+currentImg);
    document.getElementById("result").innerHTML = "";
}

function check(event){
    event.preventDefault();
    var userInput = document.getElementById("captchaInput").value;
    if(userInput == captchaValue){
        document.getElementById("result").innerHTML = "CORRECT!";
        document.getElementById("result").style.color = "green";
    }
    else{
        document.getElementById("result").innerHTML = "INCORRECT!";
        document.getElementById("result").style.color = "red";
    }
    console.log(userInput);
    console.log(captchaValue);
}

function insert(index, captcha){
    firebase.database().ref('captchas/'+captchas[index].code).set({
        captcha : captcha
    });
}