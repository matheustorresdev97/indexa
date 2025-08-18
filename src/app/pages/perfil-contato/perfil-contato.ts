import { Component, OnInit } from '@angular/core';
import { Container } from "../../components/container/container";
import { ContatoInterface } from '../../../interfaces/ContatoInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  imports: [Container],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css'
})
export class PerfilContato implements OnInit {

  contato: ContatoInterface = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
  }


}
