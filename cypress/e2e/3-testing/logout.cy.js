describe("Login Test with valid credentials", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
  });

  it("successfully logs in with correct credentials", () => {
    const validEmail = "testuser123@stud.noroff.no";
    const validPassword = "password123";
        
    cy.get("#loginEmail").should("be.visible").wait(1000).clear().type(validEmail);
    cy.get("#loginPassword").should("be.visible").clear().type(`${validPassword}{enter}`);
    cy.wait(1000);
    cy.get('button[data-auth="logout"]')
      .contains("Logout")
      .should("be.visible")
      .click();
  });
});