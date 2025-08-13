import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from "./components/container/container";
import { Header } from "./components/header/header";
import { Separator } from "./components/separator/separator";
import { Contato } from "./components/contato/contato";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Separator, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indexa');

    alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
}
