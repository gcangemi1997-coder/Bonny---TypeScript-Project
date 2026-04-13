// Here I check whether the scripts are working

import { Startup, Incentivo } from "../src/classes.js";

const testStartup = new Startup(
  "GreenEarth",
  "Ambiente",
  "Riforestazione e Pulizia Oceano",
  "Ambiente Sostenibile",
);
const testIncentivo = new Incentivo(
  1,
  "Sussidio per l'Ambiente",
  10000,
  "Miglior lavoro per l' Ambiente",
);

console.log("--- INIZIO TEST VALIDAZIONE ID ---");

console.log("Primo Tentativo:");
testIncentivo.assegnaAStartup(testStartup);

// Attempting to assign same incentive to the same startup

console.log("\nSecondo Tentativo:");
testIncentivo.assegnaAStartup(testStartup);

// Final check

console.log("\n--- STATO FINALE LISTA INCENTIVI ---");
console.table(testStartup.listaIncentivi);
