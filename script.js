
function weekdays () {
  var day = document.getElementById("day").value;
  var enterDate = day.split("-");
  var dd = parseInt(enterDate[2]);
  var mm = parseInt(enterDate[1]);
  var yy = parseInt(enterDate[0]);

   var CC = (yy - 1) / 100 + 1;
   var birthDay = (CC / 4 - 2 * CC - 1 + 5 * yy / 4 + 26 * (mm + 1) / 10 + dd) % 7;
 
document.getElementById("display").innerHTML=Math.round(birthDay);
var malesNames = ["kwasi", "kwadwo","kwabena", "kwaku", "yaw", "kofi", "kwame"];
var femalesNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var gender = document.querySelector('input[name="optradio"]:checked').value;
 console.log(gender);

 if (gender=="male"){
   console.log(malesNames[Math.round(birthDay)]);
   document.getElementById("names").innerHTML = malesNames[Math.round(birthDay)];
 }else if(gender=="female"){
  console.log(femalesNames[Math.round(birthDay)]);
   document.getElementById("names").innerHTML = femalesNames[Math.round(birthDay)];
 }else {
   console.log("invalid message");
 }
}
 


