# Checklist da atividade — Lista de Usuários com Editar e Excluir

## Implementado agora

- Exercício 1: `UsuarioModel` conferido com `id`, `nome` e `email`.
- Exercício 2: método `buscarPorId(id: number)` criado no `UsuarioService` usando `GET /usuarios/:id` e `Observable<UsuarioModel>`.
- Exercício 3: método `excluir(id: number)` criado no `UsuarioService` usando `DELETE /usuarios/:id` e `Observable<void>`.
- Exercício 4: componente `EditarUsuarioComponent` criado em `src/app/editar-usuario`.
- Exercício 5: rota `usuarios/editar/:id` criada e protegida com `authGuard`.
- Exercício 6: coluna `Ações` adicionada na tabela da lista de usuários.
- Exercício 7: método `editarUsuario(id: number)` criado usando `Router` com `inject`.
- Exercício 8: método `excluirUsuario(id: number)` criado com `confirm()`, chamada ao service e recarregamento da lista.
- Exercício 9: id recuperado da rota com `ActivatedRoute` e convertido para número.
- Exercício 10: dados carregados com `buscarPorId(id)` no `ngOnInit`.
- Exercício 11: tela de edição montada com `id`, `nome`, `email`, botão `Voltar` e botão `Salvar` desabilitado.
- Exercício 12: método `voltar()` criado usando `Router` para retornar à lista.
- Exercícios 13, 14 e 15: estrutura pronta para testes manuais de edição, exclusão e análise de erros.

## Mantido propositalmente sem implementação

- Exercício 16: o salvamento da edição não foi implementado, pois o enunciado informa que esse desafio é posterior e não deve ser feito nesta etapa.

## Melhorias técnicas adicionadas

- Normalização da URL base da API para evitar `//usuarios`.
- Reaproveitamento de headers autenticados no service.
- Estados visuais de carregamento e erro na lista.
- Estado de exclusão por usuário para evitar duplo clique no botão `Excluir`.
- Validação de id inválido na tela de edição.
- Mensagens de erro úteis para depuração.
