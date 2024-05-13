#language:pt

Funcionalidade: Pesquisa de produtos
  Como um usuário qualquer
  Quero acessar o Pesquisa de produtos
  Para que eu possa pesquisar produtos

  Cenario: Pesquisar livro por um título
    Dado que eu acesse o o menu de livros
    Quando preencher o campo de pesquisa com 'Git Pocket Guide'
    Então o livro apresentado terá o título 'Git Pocket Guide'

  Cenario: Pesquisar livro por um autor específico
    Dado que eu acesse o o menu de livros
    Quando preencher o campo de pesquisa com 'Axel Rauschmayer'
    Então o livro apresentado será do autor 'Axel Rauschmayer'

  Cenario: Pesquisar livro por uma editora específica
    Dado que eu acesse o o menu de livros
    Quando preencher o campo de pesquisa com o nome da editora
    Então o livro apresentado será da editora passada


