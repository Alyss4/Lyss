var affichecard = document.getElementById("Afficheladiventer");
function AfficheEntree() {
  if (affichecard.style.display !== "none") {
    affichecard.style.display = "none";
  } else {
    affichecard.style.display = "block";
  }
}

var affichecardexit = document.getElementById("Afficheladivexit");
function AfficheSortie() {
  if (affichecardexit.style.display !== "none") {
    affichecardexit.style.display = "none";
  } else {
    affichecardexit.style.display = "block";
  }
}
