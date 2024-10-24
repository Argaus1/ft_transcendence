let bool_tournoi = false;

document.getElementById("start_button").addEventListener("click", function () {
    document.getElementById("pong").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("test2").style.display = "none";
    document.getElementById("menu").style.setProperty("display", "none", "important");
    //document.getElementById("bob").style.display = "none";
    game(start_button.value);
  });
document.getElementById("start_button2").addEventListener("click", function () {
  document.getElementById("pong").style.display = "block";
  document.getElementById("menu").style.display = "none";
  document.getElementById("test").style.display = "none";
  document.getElementById("test2").style.display = "none";
  document.getElementById("menu").style.setProperty("display", "none", "important");
  //document.getElementById("bob").style.display = "none";
  game(start_button2.value);
});
document.getElementById("start_button3").addEventListener("click", function () {
  document.getElementById("pong").style.display = "block";
  document.getElementById("test").style.display = "none";
  document.getElementById("test2").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("menu").style.setProperty("display", "none", "important");
  //document.getElementById("bob").style.display = "none";
  game(start_button3.value);
});
document.getElementById("start_button4").addEventListener("click", function () {
  if (bool_tournoi) {
      document.getElementById("input_tournoi").style.display = "none";
      document.getElementById("input_tournoi").style.setProperty("display", "none", "important");
      bool_tournoi = false;
  } else
  {
      document.getElementById("input_tournoi").style.display = "flex";
      document.getElementById("input_tournoi").style.setProperty("display", "flex", "important");
      bool_tournoi = true;
  }
});

document.getElementById("send_tournament").addEventListener("click", function () {
    document.getElementById("pong").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("test2").style.display = "none";
    document.getElementById("menu").style.setProperty("display", "none", "important");
    //document.getElementById("bob").style.display = "none";
    document.getElementById("input_tournoi").style.display = "none";
    document.getElementById("input_tournoi").style.setProperty("display", "none", "important");
    game("tournament");
});