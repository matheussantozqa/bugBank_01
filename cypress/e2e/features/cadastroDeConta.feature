Feature: Cadastro de conta

    @focus
    Scenario: Criar conta com saldo
        Given que o usuário acessa a página de login
        When o usuário clica em Registrar
        Then preenche os campos obrigatórios e ativa a opção 'Criar conta com saldo'
        When o usuário clica em Cadastrar
        Then a conta é criada e aparece uma mensagem de sucesso
