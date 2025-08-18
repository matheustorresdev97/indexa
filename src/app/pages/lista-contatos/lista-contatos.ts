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

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatoService.obterContatos().subscribe(listaContatos => {
      this.contatos = listaContatos;
    });
  }

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  get contatosFiltrados(): ContatoInterface[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): ContatoInterface[] {
    return this.contatosFiltrados.filter((contato) => {
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
