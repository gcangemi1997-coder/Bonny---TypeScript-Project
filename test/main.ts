// Import of classes in ../src/classes.js

import { Startup, Incentivo, Cittadino } from "../src/classes.js";

// Here i create Instances of Startups

const startup1 = new Startup(
  "GreenEarth",
  "Ambiente",
  "Riforestazione e Pulizia Oceano",
  "Ambiente Sostenibile",
);

const startup2 = new Startup(
  "ZenApp",
  "Digital Health",
  "Piattaforma di yoga e meditazione guidata via AI.",
  "Abbonamento Premium App",
);

// Here i create Instances of Incentives

const incentivo1 = new Incentivo(
  1,
  "Sussidio per l'Ambiente",
  10000,
  "Miglior lavoro per l' Ambiente",
);

const incentivo2 = new Incentivo(
  2,
  "Fondo sviluppo ABIR",
  50000,
  "Startup nel settore Hardware Sportivo",
);

// Here i create Instances of citizens

const cittadino1 = new Cittadino("Alfonso", "Tamaro", 37, "Maratona");
const cittadino2 = new Cittadino("Marta", "Rodesa", 22, "Tennis");

// Here I assign incentives to Startups

incentivo1.assegnaAStartup(startup1);
incentivo1.assegnaAStartup(startup2);
incentivo2.assegnaAStartup(startup1);
incentivo2.assegnaAStartup(startup2);

// In class 'Incentivo' there is the function 'startup.riceviIncentivo(this)', so there in no need to call it again

// Here i let citizens partecipate to Activities

cittadino1.partecipaAttivita(startup1);
cittadino1.partecipaAttivita(startup2);
cittadino2.partecipaAttivita(startup1);
cittadino2.partecipaAttivita(startup2);
