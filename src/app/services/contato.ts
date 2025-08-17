import { Injectable } from '@angular/core';
import { ContatoInterface } from '../../interfaces/ContatoInterface';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: ContatoInterface[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420', email: 'email@emal.com' },
  ];

  constructor() {
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    this.contatos = contatosLocalStorage || null;

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: ContatoInterface) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
