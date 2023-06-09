
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBTcbfE6oxcKivxBmSKqy_cDQSmIOhYSdw",
      authDomain: "lets-chat-a95b6.firebaseapp.com",
      databaseURL: "https://lets-chat-a95b6-default-rtdb.firebaseio.com",
      projectId: "lets-chat-a95b6",
      storageBucket: "lets-chat-a95b6.appspot.com",
      messagingSenderId: "926991899838",
      appId: "1:926991899838:web:4c3f2d39d92bcc7d8992ef"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " +  user_name + "!";
    function addroom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "lets_chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}