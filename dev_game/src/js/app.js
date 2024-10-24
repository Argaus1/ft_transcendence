let play_button = document.getElementById("play_button");
let back_button = document.getElementById("back_button");
let login_button = document.getElementById("login_button");

if (play_button) {
  play_button.addEventListener("click", function () {
    document.getElementById("main").style.display = "none";
    back_button.style.display = "flex";
    let game_canvases = document.querySelectorAll("#game");
    game_canvases.forEach(function (canvas) {
      canvas.style.setProperty("display", "flex", "important");
    });
  });
}

if (back_button) {
  back_button.addEventListener("click", function () {
    document.getElementById("main").style.display = "block";
    back_button.style.display = "none";
    let game_canvases = document.querySelectorAll("#game");
    game_canvases.forEach(function (canvas) {
      canvas.style.setProperty("display", "none", "important");
    });
  });
}



// login_button.addEventListener("click", function () {
//   let game_canvases = document.querySelectorAll("#login-screen");
//   game_canvases.forEach(function (canvas) {
//     canvas.style.setProperty("display", "none", "important");
//   });
//   game_screen.style.display = "flex";
//   back_button.style.display = "flex";
//   let game_iframes = document.querySelectorAll("iframe");
//   let firstClick = true;
//   game_iframes.forEach(function (iframe) {
//     if (firstClick) {
//       iframe.src = iframe.src;
//       firstClick = false;
//     }
//   });
// });
