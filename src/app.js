import "./style.css";

let pronoun = ["el", "un", "algun", "otro"];
let adj = ["gran", "super", "genial"];
let noun = ["futbolista", "boxeador", "programador", "doctor", "constructor"];
let domain = [".com", ".net", ".org", ".info", ".es", ".cl"];

function azar(longitudArray) {
  return Math.floor(Math.random() * longitudArray);
}

function generarDominioJS() {
  let pronounAzar = pronoun[azar(pronoun.length)];
  let adjAzar = adj[azar(adj.length)];
  let nounAzar = noun[azar(noun.length)];
  let domainAzar = domain[azar(domain.length)];
  let nombreDominio = `${pronounAzar}${adjAzar}${nounAzar}${domainAzar}`;

  document.getElementById("nombreDominioHTML").innerHTML = nombreDominio;
}

document
  .getElementById("generarDominioHTML")
  .addEventListener("click", generarDominioJS);
