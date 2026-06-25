import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  imports: [DatePipe],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  usuarios: UsuarioModel[] = [];
  carregando = false;
  mensagemErro = '';
  idEmExclusao?: number;

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.carregando = true;
    this.mensagemErro = '';

    this.usuarioService.get().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao buscar usuários:', erro);
        this.mensagemErro = 'Erro ao buscar usuários. Verifique se a API está rodando e se o token é válido.';
        this.carregando = false;
      },
    });
  }

  editarUsuario(id: number): void {
    this.router.navigate(['/usuarios/editar', id]);
  }

  excluirUsuario(id: number): void {
    const confirmouExclusao = confirm('Deseja realmente excluir este usuário?');

    if (!confirmouExclusao) {
      return;
    }

    this.idEmExclusao = id;
    this.mensagemErro = '';

    this.usuarioService.excluir(id).subscribe({
      next: () => {
        this.idEmExclusao = undefined;
        this.carregarUsuarios();
      },
      error: (erro) => {
        console.error('Erro ao excluir usuário:', erro);
        this.mensagemErro = 'Erro ao excluir usuário. Confira a rota da API e tente novamente.';
        this.idEmExclusao = undefined;
      },
    });
  }
}
