/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {});

  it("Authorized navigation", () => {
    cy.visit("http://localhost:3000/signin");

    cy.get('input[name="email"]')
      .type("oleg@mail.ru")
      .should("have.value", "oleg@mail.ru")
      .get('input[name="password"]')
      .type("123456")
      .should("have.value", "123456");
    cy.get("button").click();

    cy.url().should("include", "/profile");

    cy.get('a[href*="courses"]').click();
    cy.url().should("include", "/courses");

    cy.get('div[id="1"]').click();
    cy.url().should("include", "/");

    cy.get('a[href*="about"]').click();
    cy.url().should("include", "/about");

    cy.get('a[href*="blog"]').click();
    cy.url().should("include", "/blog");

    cy.get('a[href*="profile"]').click();
    cy.url().should("include", "/profile");

    cy.wait(1000);
    cy.get('a[href$="/"]').contains("выход", { matchCase: false }).click();
    cy.wait(1000);

    cy.url().should("eq", "http://localhost:3000/");
  });
});
