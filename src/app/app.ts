import { Component, signal } from '@angular/core';

import agenda from './agenda.json';
import { ContatoInterface } from './interfaces/contato';
import { FormsModule } from '@angular/forms';
import { FormularioContato } from './pages/formulario-contato/formulario-contato';
import { ListaContatos } from './pages/lista-contatos/lista-contatos';

@Component({
  selector: 'app-root',
  imports: [FormularioContato, ListaContatos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');
}
