// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCclhXCWoJ6WqLbQGoVHmcMG00y0yRhhvY",
  authDomain: "kwitterr-2f16f.firebaseapp.com",
  databaseURL: "https://kwitterr-2f16f-default-rtdb.firebaseio.com",
  projectId: "kwitterr-2f16f",
  storageBucket: "kwitterr-2f16f.appspot.com",
  messagingSenderId: "81054403066",
  appId: "1:81054403066:web:7eba6521079f9f78e67c43",
  measurementId: "G-PBLKPC6958"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var display_names= localStorage.getItem("nils");
  document.getElementById("username_displau").innerHTML = "welcome " + display_names;

  function addroom(){
    room_name=document.getElementById("room_names_new").value;  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding new room name"
});
localStorage.setItem("newrooms", room_name);
window.location ="kwitter_page.html";
}




  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("getting value from firebase" + Room_names)
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML=row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("newrooms", name);
  window.location="kwitter_page.html";

}

