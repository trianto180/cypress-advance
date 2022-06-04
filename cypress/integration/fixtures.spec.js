/// <reference types="cypress" />

describe('Fixture Demo', ()=>{
    let data;
    beforeEach(()=> {
        cy.visit('https://www.saucedemo.com/')

        cy.fixture('fixtures-demo/sauceCredentials').then((credentials)  => {
            data = credentials;
        });
    });

    it('Standard User', () => {
        cy.get('[data-test="username"]').type(data.admin.valid_user);
        cy.get('[data-test="password"]').type(data.admin.password);
        cy.get('[data-test="login-button"]').click()

        cy.get('.title').should('contain.text', 'Products')
    });

    it('Incorect Username', () => {
        cy.get('[data-test="username"]').type(data.admin.dummyUsername);
        cy.get('[data-test="password"]').type(data.admin.dummyPassword);
        cy.get('[data-test="login-button"]').click()

        cy.get('h3').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    });
});