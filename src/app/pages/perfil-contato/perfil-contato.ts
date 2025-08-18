import { Component, OnInit } from '@angular/core';
import { Container } from "../../components/container/container";
import { ContatoInterface } from '../../../interfaces/ContatoInterface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../services/contato';
import { Separator } from "../../components/separator/separator";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-perfil-contato',
  imports: [Container, RouterLink, CommonModule, Separator, Header],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css'
})
export class PerfilContato implements OnInit {

  contato: ContatoInterface = {
    id: 0,
    nome: '',
    avatar: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

  excluir() {
    if (this.contato.id) {
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos')
      })
    }
  }

}
