import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { Separador } from '../../components/separador/separador';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [Container, Separador, ReactiveFormsModule],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Matheus'),
      telefone: new FormControl(''),
      email: new FormControl(''),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }
}
