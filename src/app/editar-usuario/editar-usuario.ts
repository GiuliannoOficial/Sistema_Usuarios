import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  imports: [],
  templateUrl: './editar-usuario.html',
  styleUrl: './editar-usuario.css',
})
export class EditarUsuarioComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private usuarioService = inject(UsuarioService);

  usuario?: UsuarioModel;
  carregando = true;
  mensagemErro = '';

  ngOnInit(): void {
    const id = this.buscarIdDaRota();

    if (id === null) {
      this.carregando = false;
      this.mensagemErro = 'Id de usuário inválido.';
      return;
    }

    this.buscarUsuario(id);
  }

  private buscarIdDaRota(): number | null {
    const idParametro = this.activatedRoute.snapshot.paramMap.get('id');
    const id = Number(idParametro);

    if (!idParametro || !Number.isInteger(id) || id <= 0) {
      return null;
    }

    return id;
  }

  private buscarUsuario(id: number): void {
    this.carregando = true;
    this.mensagemErro = '';

    this.usuarioService.buscarPorId(id).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao buscar usuário:', erro);
        this.mensagemErro = 'Erro ao carregar os dados do usuário. Confira se a API está rodando e se o id existe.';
        this.carregando = false;
      },
    });
  }

  voltar(): void {
    this.router.navigate(['/lista-usuarios']);
  }
}
