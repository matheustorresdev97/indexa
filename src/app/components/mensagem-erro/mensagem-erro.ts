import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagem-erro',
  imports: [CommonModule],
  templateUrl: './mensagem-erro.html',
  styleUrl: './mensagem-erro.css'
})
export class MensagemErro {
  @Input() control!: FormControl;
}
