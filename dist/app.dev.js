"use strict";

function translateFunction() {
  document.getElementById("puerta-izq").style.transform = "translateX(-100%)";
  document.getElementById("puerta-izq").style.boxShadow = "10px 0px 18px 10px #888888 !important;";
  document.getElementById("puerta-izq").style.transition = " all 2s";
  document.getElementById("boton-puerta").style.transform = "translatey(-500%)";
  document.getElementById("boton-puerta").style.transition = " all 2s";
  document.getElementById("puerta-der").style.transform = "translateX(100%)";
  document.getElementById("puerta-der").style.boxShadow = "-10px 0px -18px -10px #888888 !important;";
  document.getElementById("puerta-der").style.transition = " all 2s";
}