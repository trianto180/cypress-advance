/// <reference types="cypress" />

let username = "standar_user";
let password= "secret_sauce";

describe('Locators in Cypress', ()=>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it("Get Method", () => {
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click()
    });

    it('EQ|FIRST|LAST Method', () => {
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click()
    });
    it('FILTER Method', () => {
        
    });
});