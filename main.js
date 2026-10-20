document.addEventListener("DOMContentLoaded", initladen);

function initladen() {
  laden();

  document.getElementById("add-btn").addEventListener("click", add);
}
function laden() {
  const save = JSON.parse(localStorage.getItem("save")) || [];

  const liste = document.getElementById("main-div");

  liste.innerHTML = "";

  for (let i = 0; i < save.length; i++) {
    const div = document.createElement("div");
    div.classList.add("main-div");

    const produkt = document.createElement("p");
    produkt.textContent = `Produkt: ${save[i].produkt}`;
    produkt.classList.add("main-p");
    div.appendChild(produkt);

    const produktId = document.createElement("p");
    produktId.textContent = `Produkt ID: ${save[i].produktId}`;
    produktId.classList.add("main-p");
    div.appendChild(produktId);

    const menge1 = document.createElement("p");
    menge1.textContent = `Menge: ${save[i].menge1}`;
    menge1.classList.add("main-p");
    div.appendChild(menge1);

    const menge2 = document.createElement("p");
    menge2.textContent = `X ${save[i].menge2}`;
    menge2.classList.add("main-p");
    div.appendChild(menge2);

    const standort = document.createElement("p");
    standort.textContent = `Standort:${save[i].standort}`;
    standort.classList.add("main-p");
    div.appendChild(standort);

    const barcode = document.createElement("p");
    barcode.textContent = `Barcode:${save[i].barcode}`;
    barcode.classList.add("main-p");
    div.appendChild(barcode);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = " Löschen";
    deleteButton.onclick = function () {
      btnDelete(i);
    };
    div.appendChild(deleteButton);

    liste.appendChild(div);
  }
}

function add() {
  const produkt = document.getElementById("produktname").value;
  const produktId = document.getElementById("produktID").value;
  const menge1 = document.getElementById("menge1").value;
  const menge2 = document.getElementById("menge2").value;
  const standort = document.getElementById("standort").value;
  const barcode = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  if (
    produkt === "" ||
    produktId === "" ||
    menge1 === "" ||
    menge2 === "" ||
    standort === ""
  ) {
    alert("Bitte fülle alle felder aus ");
  } else {
    const einbuchen = {
      produkt: produkt,
      produktId: produktId,
      menge1: menge1,
      menge2: menge2,
      standort: standort,
      barcode: barcode,
    };

    document.getElementById("produktname").value = "";
    document.getElementById("produktID").value = "";
    document.getElementById("menge1").value = "";
    document.getElementById("menge2").value = "";
    document.getElementById("standort").value = "";

    const save = JSON.parse(localStorage.getItem("save")) || [];

    save.push(einbuchen);

    localStorage.setItem("save", JSON.stringify(save));

    console.log(einbuchen);
    console.log(save);
    laden();
  }
}

function btnDelete(index) {
  const deleteButton = JSON.parse(localStorage.getItem("save")) || [];

  deleteButton.splice(index, 1);

  localStorage.setItem("save", JSON.stringify(deleteButton));

  laden();
}
