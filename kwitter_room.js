
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDDeZ_XLauRZWKrh9aE_hVud3nLKwI5i_k",
      authDomain: "kwitter-44011.firebaseapp.com",
      databaseURL: "https://kwitter-44011-default-rtdb.firebaseio.com",
      projectId: "kwitter-44011",
      storageBucket: "kwitter-44011.appspot.com",
      messagingSenderId: "309215219518",
      appId: "1:309215219518:web:8f44413f89f02c9a85a66f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
