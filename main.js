// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyBUKlBeBqPC4VZeVDxW1tN8ne0gsZdR-f4",
    authDomain: "fbdemo-432d1.firebaseapp.com",
    databaseURL: "https://fbdemo-432d1.firebaseio.com",
    projectId: "fbdemo-432d1",
    storageBucket: "fbdemo-432d1.appspot.com",
    messagingSenderId: "32565822383",
    appId: "1:32565822383:web:ddb93e04cb2ce735efe55a",
    measurementId: "G-SZW0WBCQR9"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Reference messages collection
var db = firebase.database().ref("message");

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var password = getInputVal('password');
  

  // Save message
  saveMessage(name, password);

  


  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, password,){
  var newMessageRef = db.push();
  newMessageRef.set({
    name: name,
    password:password,
    
  });
}