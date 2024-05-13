#language:pt

Funcionalidade: Formulário de prática
  Como um usuário qualquer
  Quero acessar o formulário de prática
  Para que eu possa enviar meus dados

  Cenario: Enviar formulário preenchendo todos os campos
    Dado que eu acesse o o menu Practice Form
    E que preencho todos os campos com dados válidos
    Quando clico para enviar o formulário
    E deve ser apresentada a mensagem 'Thanks for submitting the form'

  Cenario: Validar se os dados foram enviados corretamente
    Dado que eu acesse o o menu Practice Form
    E que preencho todos os campos com dados válidos
    Quando clico para enviar o formulário
    Então os dados que submeti devem ser apresentados
