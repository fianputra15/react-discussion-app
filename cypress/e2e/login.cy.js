/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[id="username"]').should('be.visible');
    cy.get('input[id="password"]').should('be.visible');
    cy.get('button').contains(/^Submit$/).should('be.visible');
  });

  it('should display alert when username is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button').contains(/^Submit$/).click();
    cy.get('input[id="username"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.');
  });

  it('should display alert when password is empty', () => {
    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Submit$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.get('input[id="password"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.');
  });

  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[id="username"]').type('tes@gmail.com');

    // mengisi password yang salah
    cy.get('input[id="password"]').type('wrong_password');

    // menekan tombol Login
    cy.get('button').contains(/^Submit$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('User ID or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[id="username"').type('fian@gmail.com');

    // mengisi password
    cy.get('input[id="password"').type('12345678');

    // menekan tombol Login
    cy.get('button').contains(/^Submit$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav').contains(/^Home$/).should('be.visible');
    cy.get('button').contains(/^logout$/).should('be.visible');
  });
});
