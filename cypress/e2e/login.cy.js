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
    cy.get('input[placeholder="Masukan email..."]').should('be.visible');
    cy.get('input[placeholder="Masukan password..."]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });

  it('should display alert when username is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button').contains(/^Masuk$/).click();
    // memverifikasi window.alert
    cy.on('window.alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[placeholder="Masukan password..."]').type('testuser');

    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Masuk$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Masukan email..."]').type('testuser');

    // mengisi password yang salah
    cy.get('input[placeholder="Masukan password..."]').type('wrong_password');

    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Masukan email..."]').type('candra@gmail.com');

    // mengisi password
    cy.get('input[placeholder="Masukan password..."]').type('root1234');

    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('p').contains('Selamat').should('be.visible');
  });
});
