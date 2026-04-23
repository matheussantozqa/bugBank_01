Feature: Login

    @focus
    Scenario: Login com e-mail não cadastrado
        Given que o usuário está na página de login
        When preenche o campo de e-mail com endereço inválido
        When preenche o campo de senha com uma senha válida
        When o usuário clica em acessar
        Then uma mensagem de erro é exibida