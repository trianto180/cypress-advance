describe('Commands Example', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Successfully login test', () => {
        cy.typeLogin('standard_user', 'secret_sauce')
        cy.get('.title').should('contain.text', 'Products');
        cy.logout();
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });

    it('Faild Login test', () => {
        cy.typeLogin('problem_user', 'dummypassword')
        cy.get('h3').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        
    });
});