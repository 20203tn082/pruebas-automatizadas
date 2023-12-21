import { VALID_CREDENTIALS, INVALID_CREDENTIALS, LOCKED_CREDENTIALS } from "../data/LoginData"
import LoginPage from "../Pages/LoginPage"
describe('Set de Pruebas 1', () => {

  beforeEach(() => {
    //cy.visit entrar a una url especifica
    cy.visit(Cypress.env('URL'))
    cy.url().should('include', '/')

  })

  //Prueba de un Login Correcto
  it('Test Login Correcto', () => {
    LoginPage.login(VALID_CREDENTIALS.USERNAME, VALID_CREDENTIALS.PASSWORD)
    //la url debería incluir valor
    cy.url().should('include', '/inventory.html')
  })
  //Prueba de un login incorrecto
  it('Test Login incorrecto', () => {
    LoginPage.login(INVALID_CREDENTIALS.USERNAME, INVALID_CREDENTIALS.PASSWORD)
    cy.contains(LoginPage.userNotFoundMessage)
  })
  it('Test Login bloqueado', () => {
    LoginPage.login(LOCKED_CREDENTIALS.USERNAME, LOCKED_CREDENTIALS.PASSWORD)
    cy.contains(LoginPage.userBlockedMessage)
  })
  
})