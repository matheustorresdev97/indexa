import { Routes } from '@angular/router';
import { FormularioContato } from './pages/formulario-contato/formulario-contato';
import { ListaContatos } from './pages/lista-contatos/lista-contatos';
import { PerfilContato } from './pages/perfil-contato/perfil-contato';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContato,
  },
  {
    path: 'lista-contatos',
    component: ListaContatos,
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContato
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full',
  },
];
