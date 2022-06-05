import homeSaucePage from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";

describe('POM Implementation', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('should login to inventory page', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();

        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    });
});