describe("My Second Test", function () {
  //Arrange
  it("Visits a new site", function () {
    // Act
    cy.visit("http://localhost:3000/index.html");
    cy.title().should("eq", "React App");
  });
  it("zorunlu inputların kontrolü", function () {
    // Act
    cy.visit("http://localhost:3000/pizza/index.html");
    cy.get("[data-cy=isimalani]").type("");
    cy.get("[data-cy=boyutalani]").select("kucuk");
    cy.get("[data-cy=malzeme1alani]").first().check();
    cy.get("[data-cy=malzeme2alani]").uncheck();
    cy.get("[data-cy=malzeme3alani]").first().check();
    cy.get("[data-cy=malzeme4alani]").uncheck();
    cy.get("[data-cy=ozelalani]").type("Eksta mısır");
    cy.get("[data-cy=buton]").click();
  });
});
