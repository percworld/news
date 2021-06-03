const key = "nHdVgcjsCd1kcuGOVGLuvbpQwQNGyq5a";
const url = "https://api.nytimes.com/svc/topstories/v2/";
const home = "http://localhost:3000"
describe('dashboard', () => {
  beforeEach('visit page', () => {
    cy.intercept(`${url}home/api-key=${key}`,
      { fixture: 'top_stories.json' })
   
  })

  describe('Visit homepage', () => {
    beforeEach('visit the page', () => {
      cy.visit(`${url}/`)
    })

    it('Has a location', () => {
      cy.location().should((loc) => {
        expect(loc.port).to.eq('3000')
        expect(loc.protocol).to.eq('http:')
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.toString()).to.eq(
          'http://localhost:3000/'
        )
      })
    })

    it('Shows a header', () => {
      cy.get([data-cy=title])
        .contains('Paperbot')
    })