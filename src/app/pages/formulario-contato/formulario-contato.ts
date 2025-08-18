import { Component, OnInit } from '@angular/core';
import { Container } from '../../components/container/container';
import { Separator } from '../../components/separator/separator';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    Container,
    Separator,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato implements OnInit {
  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarContato();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contatoForm.patchValue(contato)
      });
    }
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id = id ? parseInt(id) : null

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos')
    });
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0]
    if (file) {
      this.lerArquivo(file)
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.contatoForm.get('avatar')?.setValue(reader.result)
      }
    }
    reader.readAsDataURL(file)
  }

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos')
  }
}
