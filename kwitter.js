function adduser(){
    var names= document.getElementById("user_name").value;
    localStorage.setItem("nils", names);
    window.location="kwitter_room.html";
   }