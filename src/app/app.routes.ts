import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'lista-usuarios', component: ListaUsuarios, canActivate: [authGuard] },
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
