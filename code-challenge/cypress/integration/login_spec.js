import { isTSAnyKeyword } from "@babel/types";

describe('the login/home page', ()=>{

    beforeEach(()=>{
        cy.visit('/');
    })

    it('loads the form field', ()=>{
        
        cy.get('[id=loginForm]')
    })

    it('takes user input', ()=>{
        cy.get('[id=userId').type('foo')
            expect('[id=userId]').to.not.equal(null)
    })

    it("redirects to error page with incorrect id/pw", ()=>{
        cy.get('[id=userId').type('foo1')
            .get('[id=password]').type('bar')
            .get('[id=loginForm]').submit()
                expect('[id=erorMessage').to.exist
    })

    it("redirects to the weather input with correct id/pw combo", ()=>{
        cy.get('[id=userId]').type('foo')
            .get('[id=password]').type('bar')
            .get('[id=loginForm]').submit()
                expect('[id=message]').to.exist
    })
})