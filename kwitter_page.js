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

user_name = localStorage.getItem("nils");
room_name = localStorage.getItem("newrooms");

function send() {
  var message7 = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message = message7,
    like: 0

  })
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                 //Start code
                 console.log(firebase_message_id);
                 console.log(message_data);
                 name = message_data['uer_name'];
                 msge = message_data['message7'];
                 like = message_data['like'];
                 name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                 message_with_tag = "<h4 class='message_h4'>" + msge + "</h4>";
                 like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                 row = name_with_tag + message_with_tag + like_button + span_with_tag;
                 document.getElementById("output").innerHTML += row;
                  //End code
                 } }); }); } getData();