/// <reference types="cypress" />

import homeSaucePage from "../../pages/saucedemo/homeSaucePage"
import inventoryPage from "../../pages/saucedemo/inventoryPage"

const tests  = require('../../fixtures/data-driven/sauceUser.json')

describe('Home Sauce Demo', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    tests.forEach(test => {

        it(test.name, () => {
            homeSaucePage.typeUsername(test.username)
            homeSaucePage.typePassword(test.password)
            homeSaucePage.clickLogin()
    
            if(test.name === 'should login to inventary page'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)
            }
        });
    
    })
});