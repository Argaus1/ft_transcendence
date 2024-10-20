// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
let i = 0;
let txt = "Ft_transcendence";
let speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("game_name2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
