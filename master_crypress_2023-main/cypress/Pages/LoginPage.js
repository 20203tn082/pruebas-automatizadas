
class LoginPage {
    constructor() {
        //Elementos del LoginPage
        this.username = '#user-name',
            this.password = "#password",
            this.submitButton = '#login-button',
            //Mensajes de LoginPage
            this.userNotFoundMessage = 'Epic sadface: Username and password do not match any user in this service',
            this.userBlockedMessage = 'Epic sadface: Sorry, this user has been locked out.'
    }
    login(username, password) {
        //cy.get obtner un elemento del sitio a probar
    /*
    id
    name
    datatest
    xpath
    */
        cy.get(this.username)
            .type(username)
            .get(this.password)
            //escribe la contraseña
            .type(password)
            //busca el botón y da click
            .get(this.submitButton)
            .click()
    }
}
export default new LoginPage()