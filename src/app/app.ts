import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Separator } from './components/separator/separator';
import { Contato } from './components/contato/contato';

import agenda from './agenda.json';
import { ContatoInterface } from '../interfaces/ContatoInterface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Separator, Contato, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: ContatoInterface[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): ContatoInterface[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return contato.nome
        .toLowerCase()
        .includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): ContatoInterface[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
