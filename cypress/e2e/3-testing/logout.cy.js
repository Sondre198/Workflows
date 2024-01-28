describe("Login Test with valid credentials", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.wait(500);
      cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    });
  
    it("successfully logs in with correct credentials", () => {
        const validEmail = "bibi@stud.noroff.no";
        const validPassword = "blabla123";
        
        cy.get("#loginEmail").should("be.visible").wait(1000).clear().type(validEmail);
        cy.get("#loginPassword").should("be.visible").clear().type(`${validPassword}{enter}`);


      

    });
  });