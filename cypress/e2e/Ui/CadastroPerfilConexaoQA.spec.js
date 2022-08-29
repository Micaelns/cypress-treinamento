/// <reference types="cypress" />
const faker = require('faker-br')

const nome= 'bootcamp'
const email = 'bootcamp@via.com'
const senha = 'qa123456'

describe('COQA001 - Funcionalidade: Cad Perfil', () => {
    
    before(() => {
       cy.cadastrarUsuario(nome, email, senha)
    });

    beforeEach(() => {
        cy.visit('login')
        cy.login(email, senha)
        cy.get('[data-test="dashboard-createProfile"]').should('exist').click()
    });

    after(() =>{
        cy.visit('dashboard')
        cy.get('[data-test="dashboard-deleteProfile"]').click()
    })

    it('Não Deve criar um Perfil sem dados obrigatórios!', () => {
        
        cy.get('[data-test="profile-submit"]').click()
        cy.get('#status').should('have.class', 'Mui-error')
        cy.get('.MuiFormHelperText-root').should('contain', 'Conhecimentos é obrigatório')

    });

    it('Não Deve criar um Perfil com dados inválidos!', () => {
        
        cy.get('#mui-component-select-status').click()
        cy.contains('QA Pleno').click()
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JAVA, PHP, CSS, Vue, cypress')
        
        cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-webSite"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-twitter"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-facebook"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-youtube"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-linkedin"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-instagram"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type('123456').blur()
        cy.get('[data-test="profile-medium"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        
        cy.get('[data-test="profile-submit"]').click()
    });

    it('Deve criar um Perfil com sucesso!', () => {
        let user = faker.name.firstName()

        cy.get('#mui-component-select-status').click()
        cy.contains('QA Pleno').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(user+' Ltda.')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.address.city()+', '+faker.address.stateAbbr())
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JAVA, PHP, CSS, Vue, cypress')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('https://github.com/Micaelns/treinamento-cypress.git')
        cy.get('[rows="1"]').type('Usuário de teste, aprendendo cypress e evoluindo nessa tecnologia')
        cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.facebook.com/'+user+'.cypress')
        cy.get('[data-test="profile-submit"]').click()
        cy.contains('Perfil Criado')

    });
})