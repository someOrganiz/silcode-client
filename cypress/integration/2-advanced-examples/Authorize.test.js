/// <reference types="cypress" />

context("Form", () => {
  beforeEach(() => {});

  it("Authorizing", () => {
    cy.visit("http://localhost:3000/signin");

    cy.get('input[name="email"]')
      .type("oleg@mail.ru")
      .should("have.value", "oleg@mail.ru")
      .get('input[name="password"]')
      .type("123456")
      .should("have.value", "123456");
    cy.get("button").click();

    cy.url().should("include", "/profile");
  });
});
