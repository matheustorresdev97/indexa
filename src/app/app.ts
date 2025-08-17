import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioContato } from './pages/formulario-contato/formulario-contato';
import { ListaContatos } from './pages/lista-contatos/lista-contatos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioContato, ListaContatos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');
}
