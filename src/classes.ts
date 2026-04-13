// Imports of interfaces from the ./intefaces file

import { IStartup, IIncentivo, ICittadino } from "./interfaces.js";

// Exports and Implements.

// Represents a startup and manages the reception of financial incentives.
export class Startup implements IStartup {
  listaIncentivi: IIncentivo[] = [];

  constructor(
    public nome: string,
    public settore: string,
    public descrizione: string,
    public prodottiServizi: string,
  ) {}
  riceviIncentivo(incentivo: IIncentivo): void {
    const checkIncentivo = this.listaIncentivi.some(
      (item) => item.id === incentivo.id,
    );
    if (checkIncentivo) {
      console.warn(
        `ATTENZIONE, ${this.nome} ha già ricevuto l'incentivo di ${incentivo.descrizione}`,
      );
    } else {
      this.listaIncentivi.push(incentivo);
      console.log(
        `${this.nome} ha appena ricevuto l'incentivo di ${incentivo.valoreIncentivo} per ${incentivo.descrizione}`,
      );
    }
  }
}

// Defines a public incentive and the logic to assign it to a specific startup.
export class Incentivo implements IIncentivo {
  constructor(
    public id: number,
    public descrizione: string,
    public valoreIncentivo: number,
    public criteri: string,
  ) {}

  assegnaAStartup(startup: IStartup): void {
    startup.riceviIncentivo(this);
  }
}

// Represents a citizen who interacts with the ecosystem by participating in activities.
export class Cittadino implements ICittadino {
  constructor(
    public nome: string,
    public cognome: string,
    public eta: number,
    public interessi: string,
  ) {}

  partecipaAttivita(startup: IStartup): void {
    console.log(
      `Il cittadino ${this.nome} ${this.cognome}, avente ${this.eta} anni, sta partecipando all'attività di ${startup.nome}`,
    );
  }
}
