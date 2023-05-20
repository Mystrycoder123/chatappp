// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkLJxqvvraGRtTcr4GHby4AVV62vdB4vM",
    authDomain: "letschat-fd039.firebaseapp.com",
    projectId: "letschat-fd039",
    storageBucket: "letschat-fd039.appspot.com",
    messagingSenderId: "739374877314",
    appId: "1:739374877314:web:0bdbe595f5add7afbd029b"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



