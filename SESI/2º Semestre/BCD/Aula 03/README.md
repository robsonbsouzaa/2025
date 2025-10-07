# Atividade SQL

1. Criação do banco de dados:
    - [ ]  Criar um banco de dados chamado ‘biblioteca’.
    - [ ]  Selecionar o banco para uso.
2. Criação de tabelas:
    - [ ]  Criar a tabela ‘usuarios’ com os campos:
        - id (Chave primária e incremental)
        - nome (100 caracteres e obrigatório)
        - email (100 caracteres)
        - nascimento
    - [ ]  Criar a tabela ‘livros’ com os campos:
        - id (Chave primária e incremental)
        - titulo (100 caracteres e obrigatório)
        - autor (100 caracteres e obrigatório)
        - publicacao (4 digitos)
    - [ ]  Criar a tabela ‘emprestimos’ com os campos:
        - id (Chave primária e incremental)
        - usuario_id (Chave estrangeira)
        - livro_id (Chave estrangeira)
        - data_emprestimo
        - data_devolucao
3. Inserção de dados:
    - [ ]  Inserir 3 registros na tabela ‘usuarios’.
    - [ ]  Consultar todos os registros.
    - [ ]  Consultar apenas o usuário com id 2.
    - [ ]  Inserir 3 registros na tabela ‘livros’.
    - [ ]  Consultar todos os registros.
    - [ ]  Consultar titulo e ano de publicação do livro com id 3.
    - [ ]  Inserir 2 registros na tabela ‘emprestimos’.
    - [ ]  Consultar todos os registros.
    - [ ]  Consultar apenas os ID dos usuários e as datas de empréstimo.
4. Atualização dos dados:
    - [ ]  Adicionar data de devolução.
    - [ ]  Consultar o registro alterado.
5. Remoção de dados:
    - [ ]  Remover um registro qualquer da tabela.
    - [ ]  Consultar todos os registros.
    - [ ]  Consultar o id removido para validar a remoção.