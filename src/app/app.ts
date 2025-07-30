import { Component, signal } from '@angular/core';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Separador } from './components/separador/separador';
import { Contato } from './components/contato/contato';

import agenda from './agenda.json';
import { ContatoInterface } from './interfaces/contato';

@Component({
  selector: 'app-root',
  imports: [Container, Header, Separador, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: ContatoInterface[] = agenda;

  filtrarContatosPorLetraInicial(letra: string): ContatoInterface[] {
    return this.contatos.filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
