#language:pt

Funcionalidade: Login
  Como um usuário qualquer
  Quero acessar o menu login
  Para que eu possa realizar ações de login

  Cenario: Realizar login com sucesso
    Dado que acesso o menu login
    E que preencho o campo nome com o meu nome
    E que preencho o campo senha com a minha senha
    Quando clico para realizar o login
    Entao devo ser direcionado para a minha página de usuário

  Cenario: Realizar login com senha incorreta
    Dado que acesso o menu login
    E que preencho o campo nome com o meu nome
    E que preencho o campo senha com uma senha incorreta
    Quando clico para realizar o login
    Entao deve ser apresentada a mensagem 'Invalid username or password!'
