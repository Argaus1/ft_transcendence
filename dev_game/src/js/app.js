let play_button = document.getElementById("play_button");
let back_button = document.getElementById("back_button");

play_button.addEventListener("click", function () {
  document.getElementById("main").style.display = "none";
  back_button.style.display = "flex";
  let game_canvases = document.querySelectorAll("#game_canvas");
  game_canvases.forEach(function (canvas) {
    canvas.style.setProperty("display", "flex", "important");
  });
  // reload iframes to make it work
  let game_iframes = document.querySelectorAll("iframe");
  let firstClick = true;
  game_iframes.forEach(function (iframe) {
    if (firstClick) {
      iframe.src = iframe.src;
      firstClick = false;
    }
  });
});

back_button.addEventListener("click", function () {
  document.getElementById("main").style.display = "block";
  back_button.style.display = "none";
  let game_canvases = document.querySelectorAll("#game_canvas");
  game_canvases.forEach(function (canvas) {
    canvas.style.setProperty("display", "none", "important");
  });
});

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
