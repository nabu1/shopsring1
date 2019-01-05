/*
Lista testów e2e:



6) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' >
         > Radius: 1000 > czek 'Chleb' > Search >
         > mają wyskoczyć sklepy w tabeli, kolumna Chleb i Total




7) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Radius: 1000 > czek 'Chleb' i 'Masło' > Search >
         > mają wyskoczyć sklepy w tabeli, kolumna Chleb, Masło i Total

8) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Radius: 1000 > czek 'Chleb' i 'Masło' > Search >
         > mają wyskoczyć sklepy w tabeli, kolumna Chleb, Masło i Total
         > unczek Chleb > ma zniknąć kolumna Chleb i zmienić się total

9) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Radius: 1000 > czek 'Chleb' i 'Masło' > Search >
         > mają wyskoczyć sklepy w tabeli, kolumna Chleb, Masło i Total
         > unczek Chleb > ma zniknąć kolumna Chleb i zmienić się total
         > klik w Produkty/Reset:
              mają się odczeknąć wszystkie produkty
              mają zniknąć kolumny Masło i Total

10)Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Radius: 1000 > czek 'Chleb' i 'Masło' > Search >
         > mają wyskoczyć sklepy w tabeli, kolumna Chleb, Masło i Total
         > unczek Chleb > ma zniknąć kolumna Chleb i zmienić się total
         > klik w Search/Reset:
              mają wyczyścić się wszystkie input boksy kumpa Search
              mają zniknąć wszystkie sklepy z tabeli
              czeknięte czekboksy mają zostać czeknięte

11)Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Radius: 1000 > czek 'Chleb' i 'Masło' > Search >
         > mają wyskoczyć sklepy w tabeli, kolumna Chleb, Masło i Total
         > kliknąć w ikonę sortowania:
              sklepiszcze
              adres
              odległość
              total
              chleb masło

///////////////////////////////////////////////////////////////////////////////

1) Start > Search > ma wyskoczyć szmatka walidacji 'Brak miasta'

2) Start > Miasto: 'Wwa' > Search > ma wyskoczyć szmatka walidacji 'Brak ulicy'

3) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Search > mają wyskoczyć sklepy w tabeli

4) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Search > mają wyskoczyć sklepy

5) Start > Miasto: 'Wwa' > Ulica: 'Dolna' > Numer domu: '5a' > Radius: 1000 > Search > mają wyskoczyć sklepy




///////////////////////////////////////////////////////////////////////////////


/*
  describe('Searching shops', () => {
    beforeEach(() => {
      cy.visit('/')
      .get('#city')
      .select("Warszawa")
      .get('#street')
      .type('Dolna')
      .get('#streetNumber')
      .type('5a')
  })

  it('1. Enter Dolna 5a, radius = 100 and test if 1 shop were returned', () => {
    cy.get('#radius')
    .clear()
      .type(100)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 1)
    })

  it('2. Enter Dolna 5a, radius = 500 and test if 3 shops were returned', () => {
    cy.get('#radius')
    .clear()
      .type(500)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 3)
  })

  it('3. Enter Dolna 5a, radius = 600 and test if 5 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(600)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 5)
  })

  it('4. Enter Dolna 5a, radius = 800 and test if 9 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(800)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 9)
  })

  it('5. Enter Dolna 5a, radius = 1000 and test if 14 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(1000)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 14)
  })

  it('6. Enter Dolna 5a, radius = 1100 and test if 17 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(1100)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 17)
  })

  it('7. Enter Dolna 5a, radius = 1300 and test if 20 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(1300)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 20)
  })

  it('8. Enter Dolna 5a, radius = 1400 and test if 20 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(1400)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 20)
  })

  it('9. Enter Dolna 5a, radius = 1500 and test if 23 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(1500)
      .get('#search')
      .click()
      .get('#stockTable')
      .find('tbody')
      .find('tr')
      .should('have.length', 23)
  })

  it('10. Enter Dolna 5a, radius = 2000 and test if 35 shops were returned', () => {
    cy.get('#radius')
      .clear()
      .type(2000)
      .get('#search')
      .click()
      .get('#stockTable').screenshot()
      .find('tbody')
      .find('tr')
      .should('have.length', 36)
    })
})
*/

describe('Searching shops', () => {
  beforeEach(() => {
    cy.visit('/')
    /*
    .get('#city')
    .select("Warszawa")
    .get('#street')
    .type('Dolna')
    .get('#streetNumber')
    .type('5a')
    */
  })
  //cy.pause()

  it('1. Brak miasta i ulicy, klik w Searcha i ma się wyświetlić modal "Brak miasta"', () => {
    cy.get("[data-test='buttonSearch']")
      .click()
      .get("[data-test='modalCity']")

  })

  it('2. Jest miasto, ale brak ulicy, klik w Searcha i ma wyświetlić się modal "Brak ulicy"', () => {
    cy.get("[data-test='city']")
      .select("Warszawa")

    cy.get("[data-test='buttonSearch']")
      .click()
      .get("[data-test='modalStreet']")

  })

  it('3. Jest ulica ale brak miasta, klik w Searcha i ma wyświetlić się modal "Brak miasta"', () => {
    cy.get("[data-test='street']")
      .type("Dolna 5a")

    cy.contains('Search')
      .click()
      .get("[data-test='modalCity']")

  })

  it.only('4. Są sklepy (Wwa, Dolna 5a, 600m). Czek w Chleb wyświetla kolumnę Chleb i Total', () => {
    cy.get("[data-test='city']")
      .select("Warszawa")

    cy.get("[data-test='street']")
      .type("Dolna 5a")

    cy.get("[data-test='radius']")
      .clear()
      .type(600)

    cy.get("[data-test='buttonSearch']")
      .click()

  })




})










