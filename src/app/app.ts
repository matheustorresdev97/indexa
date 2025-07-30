import { Component, signal } from '@angular/core';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Separador } from './components/separador/separador';
import { Contato } from './components/contato/contato';

import agenda from './agenda.json';
import { ContatoInterface } from './interfaces/contato';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Container, Header, Separador, Contato, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: ContatoInterface[] = agenda;

  filtroPorTexto: string = '';

  // Remove os acentos de uma string
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): ContatoInterface[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): ContatoInterface[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
