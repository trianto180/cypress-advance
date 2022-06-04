//Hooks are from mocha

/*
    Order:
    1.befor -> Execute once, as soon as the first TS
    2.BeforEach -> Execute before EACH TS
    3.testExecution
    4.afterEach -> Execute after EACH TS
    5.after -> Execute one, as soon as the last TS
*/

describe('Hook demo', () => {
    before(()=> {
        cy.log('Before')
    })
    beforeEach(()=> {
        cy.log('Before Each')
    })
    it('TC #1', () => {
        console.log('TC #1')
    });

    it.skip('TC #2', () => {
        console.log('TC #2')
    });

    it('TC #3', () => {
        console.log('TC #3')
    });

    afterEach(()=> {
        cy.log('After each')
    })

    after(()=>{
        cy.log('After')
    })
});