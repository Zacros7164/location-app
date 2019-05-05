describe('the weather/ latitude & longitude page', () => {
    beforeEach(() => {
        cy.visit('/')
            .get('[id=userId]').type('foo')
            .get('[id=password]').type('bar')
            .get('[id=loginForm]').submit()
    });

   it('displays error message when no information entered', ()=>{
        cy.get('[id=weatherForm]').submit()
            .get('[id=message]').should((message)=>{
                expect(message).to.contain("Please enter valid coordinates")
            })
   }) 

   it('displays city and state when given coordinates', ()=>{
       cy.server()
       cy.route("POST", "/getWeather").as("getWeather")
        cy.get('[id=lat]').type("33.7490")
            .get('[id=long]').type("-84.3880")
            .get('[id=weatherForm]').submit()
            .wait("@getWeather")
            .get('[id=city]').should((city)=>{
                expect(city).to.contain("Atlanta")
            })
            .get('[id=state]').should((state)=>{
                expect(state).to.contain("GA")
            })
            
   })

});