import { Component, signal } from '@angular/core';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Separador } from "./components/separador/separador";
import { Contato } from "./components/contato/contato";

@Component({
  selector: 'app-root',
  imports: [Container, Header, Separador, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('indexa');

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
}
