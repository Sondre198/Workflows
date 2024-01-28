describe("Login Test with invalid credentials", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.wait(500);
      cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    });
  
    it("Can not log in with invalid credentials", () => {
        const validEmail = "invalid";
        const validPassword = "short";
        
        cy.get("#loginEmail").should("be.visible").wait(1000).clear().type(validEmail);
        cy.get("#loginPassword").should("be.visible").clear().type(`${validPassword}{enter}`);
    });
  });

  