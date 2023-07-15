/// <reference types="cypress" />

context("Actions", () => {
  // beforeEach(() => {
  //   cy.visit("https://www.idealista.com/", {
  //     failOnStatusCode: false, // to avoid 403 error
  //   });
  // });

  // it("provides solutions for 403 error code", () => {
  //   cy.visit("https://www.google.com");
  //   cy.get("#L2AGLb > .QS5gu").click();
  //   cy.get("#APjFqb").type("403 forbidden {enter}");
  //   cy.get("#rcnt").find(".L3Ezfd").first().click();
  //   cy.get("#rcnt").find(".L3Ezfd").eq("1").click();
  //   cy.contains("Wikipedia").click();
  //   cy.get(".mw-logo-icon");
  //   cy.get("footer").scrollIntoView(); // Scrolls 'footer' into view
  //   cy.get("#footer-info-lastmod")
  //     .invoke("text")
  //     .then((text) => {
  //       cy.writeFile("cypress-tests-idealista/text.txt", text);
  //     });
  //   cy.contains("Solucionar forbidden 403 en apache server").dblclick();
  //   cy.get("body").should(
  //     "contain",
  //     "Solucionar Forbidden 403 en Apache Server"
  //   );
  // });

  // it("opens the link in the same window invoke()'href'", () => {
  //   cy.visit("https://www.webdriveruniversity.com/");
  //   cy.get("#contact-us")
  //     .invoke("attr", "href")
  //     .then((myLink) => {
  //       cy.visit("https://www.webdriveruniversity.com/" + myLink);
  //     });
  // });
  // // or
  // it("opens the link in the same window by invoke()'removeAttr'", () => {
  //   cy.visit("https://www.webdriveruniversity.com/");
  //   cy.get("#contact-us").invoke("removeAttr", "target").click(); // removeAttr  target
  //   cy.url("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
  // });

  it("opens the link in the same window by invoke()'removeAttr'", () => {
    cy.visit("https://www.webdriveruniversity.com/");
  });
});
