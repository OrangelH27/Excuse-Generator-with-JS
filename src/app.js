import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const sujeto = [
    "My Parrot",
    "a Dolphin",
    "My Sister in Law",
    "The Chupacabra"
  ];
  const accion = ["Spit on", "Burned", "Smashed", "Forgot"];
  const objeto = ["My homework", "My laptop", "Mouse", "Bag"];
  const tiempo = [
    "Yesterday",
    "Some days ago",
    "Last year",
    "Just before I came here"
  ];

  const getrandom = arr => {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result;
  };
  const excuseLink = document.querySelector("#excuse");

  const excuse = `${getrandom(sujeto)} 
  ${getrandom(accion)} 
  ${getrandom(objeto)} 
  ${getrandom(tiempo)}`;

  excuseLink.innerHTML = excuse;
};
