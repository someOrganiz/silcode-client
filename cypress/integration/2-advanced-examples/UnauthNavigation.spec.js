/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {});

  it("Unathorized navigation", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="about"]').click();
    cy.url().should("include", "/about");

    cy.get('a[href*="courses"]').click();
    cy.url().should("include", "/courses");

    cy.get('a[href*="blog"]').click();
    cy.url().should("include", "/blog");

    cy.get('a[href*="signin"]').click();
    cy.url().should("include", "/signin");

    cy.get('a[href*="signup"]').click();
    cy.url().should("include", "/signup");

    cy.get('a[href*="фывфыв"]').click();
    cy.url().should("include", "/фывфыв");
  });
});
