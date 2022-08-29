/// <reference types="cypress" />

const login ='fabio@bootcamp.com'
const senha ='teste@123'

describe('TEST001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login(login, senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Fabio Araújo')
    });

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        cy.login('fabioddfd@bootcamp.com', 'testefddfd@123')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });
});
