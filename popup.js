function Edittable() {
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
  }d
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
  var tableauBody = document.querySelector("table tbody");

  for (var i = checkboxes.length - 1; i >= 0; i--) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) {
      var ligne = checkbox.closest("tr");
      tableauBody.removeChild(ligne);
    }
  }
}

// ouvrir modal modifier
function ouvrirModalModifier(selectedId) {
  //Query pour récupérer le ligne selectionné et son emplacement
  var emplacement = document.querySelector(
    `#packageList tbody tr[id='${selectedId}'] td[name='emplacement']`
  ).textContent;
  console.log(emplacement);
  //changement du nom de la modal
  document.getElementById("staticBackdropLabel").innerHTML =
    "Modification d'un paquet";
  //chargement de l'emplacemnt
  document.getElementById("inputEmplacement").value = emplacement;
  var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
  modal.show();
}



