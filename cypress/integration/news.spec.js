const key = "nHdVgcjsCd1kcuGOVGLuvbpQwQNGyq5a";
const url = "https://api.nytimes.com/svc/topstories/v2/";
const home = "http://localhost:3000"


describe('Visit homepage', () => {
  beforeEach('visit the page', () => {
    cy.intercept(`${url}home/api-key=${key}`,
      { fixture: 'top_stories.json' })
    cy.visit(`${home}`)
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
    cy.get('[data-cy=title]')
      .contains('Paperbot')
  })

  it('has top stories', () => {
    cy.get('[class=stories]').contains('TOP STORIES')
  })
  
  it('has a sections(categories) container', () => {
    cy.get('[class=choose-sections]').contains('CHOOSE SECTIONS')
  })

  it('Has a list of articles', () => {
    cy.get('[data-cy=article-title]')
      .contains('See Which States Are Falling Behind Biden’s Vaccination Goal')
  })

  it('has sections that can be filtered', () => {
      cy.get('[data-cy=tag]').last().contains('world')
  })  
})

describe('Visit Detailed Article Route', () => {
  beforeEach('visit the page', () => {
    cy.intercept(`${url}home/api-key=${key}`,
      { fixture: 'top_stories.json' })
    cy.visit(`${home}`)
    cy.get('[data-cy=article-title]').first().click()
  })

  it('Should navigate to a singular article', () => {
    cy.get('[data-cy=single-title]')
    .contains('See Which States Are Falling Behind Biden’s Vaccination Goal')
    .get('[id=author]').contains('Lazaro Gamio')
    .get('[id=date]').contains('June 3, 2021')
  })


  it('Can go back to the home dashboard', () => {
    cy.get('[data-cy=back]').click()
    cy.get('[data-cy=article-title]').should('exist')
  })
})
