var firebaseConfig = {
    apiKey: "AIzaSyDqcOp_TJja8h_Os72pMOuKYIZZJLXOx3U",
    authDomain: "captcha-a351a.firebaseapp.com",
    projectId: "captcha-a351a",
    storageBucket: "captcha-a351a.appspot.com",
    messagingSenderId: "202365184296",
    appId: "1:202365184296:web:16b86d7b0b25b26a4b481d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



// const filename, userInput;

function ready(){
    filename = document.getElementById("image").getAttribute("src");
    userInput = document.getElementById("captchaInput").value;
}

// function check(event){
//     console.log("Entered");
//     event.preventDefault();
// }

// function insert(filename, captcha){
//     firebase.database().ref('captchas/'+filename).set(
//         {
//             captcha : captcha
//         }
//     );
// }

// insert("samples/2b827", "2b827");

// function retrieveData(){
//     firebase.database().ref('captchas/'+filename).on('value', function(snapshot){
//         var captchaValue = snapshot.val().captcha;
//     })
// }

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
// insert(0,"2b827");
// insert(1,"2bg48");
// insert(2,"2cegf");
// insert(3,"2cg58");
// insert(4,"2cgyx");

// insert(5,"2en7g");
// insert(6,"2enf4");
// insert(7,"2fxgd");
// insert(8,"2g7nm");
// insert(9,"2g783");