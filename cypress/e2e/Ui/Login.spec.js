/// <reference types="cypress" />

import CommonPage from '../../support/Common/CommonPage'
import LoginPage from '../../support/Login/LoginPage'

describe('Validar login', { tags: '@demo' }, () => {
    before(() => {
        cy.navigate('/')
        CommonPage.clickInMenuLogin()
    })

    context('Dado que acesso a tela de login', () => {
        it('Então devo visualizar a tela login', () => {
            LoginPage.validateLogin()
        })
    })

    context('Dado que realizo o login', () => {
        it('Então insiro o CPF ou CNPJ', () => {
            cy.fixture("user").then((data) => {
                LoginPage.fillFieldUsername(data.cpf)
            })
        })

        it('E clico no botão "Continuar"', () => {
            LoginPage.clickInButtonContinueLogin()
        })

        it('E insiro a senha de acesso', () => {
            LoginPage.fillFieldPassword(Cypress.env('password'))
        })

        it('E clico no botão "Entrar"', () => {
            LoginPage.clickInButtonLogin()
        })
    })
})