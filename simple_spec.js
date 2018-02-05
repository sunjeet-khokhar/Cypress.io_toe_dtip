describe('First_Cypress_Test',function() {
    it("Verifies that the correct title of the Amazon.com's sign in page is displayed",function() {
        cy.visit('https://amazon.com')
        cy.get("#nav-link-accountList > span.nav-line-2").click()
        cy.title().should('eq','Amazon Sign In1')
    })
})