/* eslint-disable */
import "bootstrap";

let pronoun = ["el", "un", "algun", "otro"];
let adj = ["gran", "super", "genial"];
let noun = ["futbolista", "boxeador", "programador", "doctor", "constructor"];
let domain = [".com", ".net", ".org", ".info", ".es", ".cl"];

function print() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`);
        }
      }
    }
  }
}

print();
