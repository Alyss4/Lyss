function Edittable(){
  alert("Hello! I am an alert box!!");
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function pop() {
  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");

  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}

function toggleChargement() {
  var inputChargement = document.getElementById("inputChargement");
  var switchChargement = document.getElementById("SwitchChargement");
  if (switchChargement.checked) {
    inputChargement.style.display = "flex";
  } else {
    inputChargement.style.display = "none";
  }
}

function toggleDechargement() {
  var inputDechargement = document.getElementById("inputDechargement");
  var switchDechargement = document.getElementById("SwitchDechargement");
  if (switchDechargement.checked) {
    inputDechargement.style.display = "flex";
  } else {
    inputDechargement.style.display = "none";
  }
}
// script suppression avec les checkbox
function Deleteliste() {
  var checkboxes = document.querySelectorAll('input[name="check"]');
  var poubelle = document.getElementById("bin");  
  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) {
      poubelle.style.display = "flex";
      return; // Quitte la fonction dès qu'une case est cochée salut
    }
  }
  poubelle.style.display = "none";
}
//script pour delete
function supprimerElements() {
  var checkboxes = document.querySelectorAll('input[name="check"]');
  var tableauBody = document.querySelector('table tbody');

  for (var i = checkboxes.length - 1; i >= 0; i--) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) {
      var ligne = checkbox.closest('tr');
      tableauBody.removeChild(ligne);
    }
  }
}

// ouvrir modal modifier
function ouvrirModalModifier() {
  var modal = new bootstrap.Modal(document.getElementById('modalModification'));
  modal.show();
}


