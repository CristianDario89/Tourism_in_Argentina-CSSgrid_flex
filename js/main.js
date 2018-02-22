  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOBltE7hythyTBCQq0-WuOj8sD7HUKMk4",
    authDomain: "criweb-4616a.firebaseapp.com",
    databaseURL: "https://criweb-4616a.firebaseio.com",
    projectId: "criweb-4616a",
    storageBucket: "criweb-4616a.appspot.com",
    messagingSenderId: "491442793798"
  };
  firebase.initializeApp(config);

//referents messages collections
var messageRef = firebase.database().ref('message');  //Incializando firebase


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);



//submit form
function submitForm(e){
    e.preventDefault();
    
    
    //Get values
    var namee = getInputVal('namee');
   var email = getInputVal('email');
     var visita = getInputVal('visita');
  var local = getInputVal('local');
        var message = getInputVal('message');

//console.log(name);
    
    
    //save message
    saveMessage(namee, email, visita, local, message);
    
    //show alert
    document.querySelector('.alert').style.display = 'block';
    
    //Hide alert after 3 seconds
    setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';

        
    },3000);
    
    
    //clear form
    document.getElementById('contactForm').reset(); 
}
    
 
function getInputVal(id){
        return document.getElementById(id).value;
        
    }

function saveMessage(namee, email, vista, local, message){
   var newMessageRef =  messageRef.push();
    newMessageRef.set({
       namee: namee,
         email:email,
        visita:visita,
        local: local,
        message:message
    });
}