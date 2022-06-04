//Topics:
//Describe and context
//-> It and Specify
//-> Unit Testing Demo

//Dummy Application
let add = (a, b) => a + b;
let substrct = (a,b) => a - b;
let divide = (a,b) => a / b;
let multiply = (a,b) => a * b;

//Cypress test
//Describe - Content -> Group tests, nest multiple instances.
describe('Unit testing of our dummy application', ()=>{
    
    context('Math with POSITIVE Number', () => {
        it('should add positif numbers', () => {
            expect(add(2,2)).to.eq(4);
        });

        it('should substrtc positif numbers', () => {
            expect(substrct(4,2)).to.eq(2)
        });

        it('should divide positif numbers', () => {
            expect(divide(4,2)).to.eq(2)
        });

        it('should multiply positif numbers', () => {
            expect(multiply(2,2)).to.eq(4)
        });
    });

    describe('Math with DECIMAL number', ()=>{
        it('should add decimal numbers', () => {
            expect(add(2.2,2.2)).to.eq(4.4)
        });

        it('should substrtc positif numbers', () => {
            expect(substrct(4.4,2.2)).to.eq(2.2)
        });
    });
});