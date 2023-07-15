function formOpen() {
  var events = document.getElementById("events").value;
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");
  const form4 = document.getElementById("form4");

  if (events === "Academic Activities organised during the month") {
    form1.style.display = "block"; 
  } else if (events === "Student and faculty Achievements") {
    form2.style.display = "block";
  } else if (events === "Research & Faculty/ student Publications") {
    form3.style.display = "block";
  } else {
    form4.style.display = "block";
  }
}
function closeForm(){
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");
  const form4 = document.getElementById("form4");
  form1.style.display = "none";
  form2.style.display = "none";
  form3.style.display = "none";
  form4.style.display = "none";
}
const firebaseConfig = {
  apiKey: "AIzaSyCH_CMHghSvkqTtIZvt_1MEWPlaHWSSNSU",
  authDomain: "rvu-inhouse-project.firebaseapp.com",
  databaseURL: "https://rvu-inhouse-project-default-rtdb.firebaseio.com",
  projectId: "rvu-inhouse-project",
  storageBucket: "rvu-inhouse-project.appspot.com",
  messagingSenderId: "293811528567",
  appId: "1:293811528567:web:9a11cbead2d840b765b772",
  measurementId: "G-B4R015QNZC"
};
var eventDetailsDB = firebase.database();