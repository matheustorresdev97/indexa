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

  salvarContato(contato: ContatoInterface): Observable<ContatoInterface> {
    return this.http.post<ContatoInterface>(this.API, contato)
  }

  buscarPorId(id: number): Observable<ContatoInterface> {
    const url = `${this.API}/${id}`
    return this.http.get<ContatoInterface>(url)
  }

}
