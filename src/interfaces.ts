// Creates and Exports of Interfaces
export interface IStartup {
  nome: string;
  settore: string;
  descrizione: string;
  prodottiServizi: string;

  riceviIncentivo(incentivo: IIncentivo): void;
}

export interface IIncentivo {
  id: number;
  descrizione: string;
  valoreIncentivo: number;
  criteri: string;

  assegnaAStartup(startup: IStartup): void;
}

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessi: string;

  partecipaAttivita(startup: IStartup): void;
}
