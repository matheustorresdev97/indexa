import { Component, signal } from '@angular/core';

import { FormularioContato } from './pages/formulario-contato/formulario-contato';
import { ListaContatos } from './pages/lista-contatos/lista-contatos';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormularioContato, ListaContatos, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');
}
