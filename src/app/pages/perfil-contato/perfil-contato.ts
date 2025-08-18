import { Component } from '@angular/core';
import { Container } from "../../components/container/container";
import { ContatoInterface } from '../../../interfaces/ContatoInterface';

@Component({
  selector: 'app-perfil-contato',
  imports: [Container],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css'
})
export class PerfilContato {

  contato: ContatoInterface = {
    id: 0,
    nome: 'dev',
    telefone: '123123123',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: 'dev.com'
  }

}
