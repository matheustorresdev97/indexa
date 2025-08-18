import { Injectable } from '@angular/core';
import { ContatoInterface } from '../../interfaces/ContatoInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }

  obterContatos(): Observable<ContatoInterface[]> {
    return this.http.get<ContatoInterface[]>(this.API);
  }

  salvarContato(contato: ContatoInterface) {
  }

}
