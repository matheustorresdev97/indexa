import { Component, OnInit } from '@angular/core';
import { Container } from '../../components/container/container';
import { Header } from '../../components/header/header';
import { Separator } from '../../components/separator/separator';

import { CommonModule } from '@angular/common';
import { ContatoInterface } from '../../../interfaces/ContatoInterface';
import { FormsModule } from '@angular/forms';
import { Contato } from '../../components/contato/contato';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato';

@Component({
  selector: 'app-lista-contatos',
  imports: [
    Container,
    Header,
    Separator,
    CommonModule,
    FormsModule,
    Contato,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})
export class ListaContatos implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: ContatoInterface[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos();
  }

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
