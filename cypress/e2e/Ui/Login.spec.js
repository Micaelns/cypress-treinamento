/// <reference types="cypress" />

describe('TEST001 - Funcionalidade: Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('login');
    })

})