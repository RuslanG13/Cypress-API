// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getAPI", (pathParam) => {

    cy.request({
        method: "GET",
        url: "/" + pathParam,
        headers: {
            Authorization: "Bearer e871cab61a9967b08fceeb692f366ca3d34fdc15af400ec3f1c8fd3370f1f0ba"
        },
    })

})

Cypress.Commands.add("postAPI", (payload) => {

    cy.request({
        method: "POST",
        url: "/",
        headers: {
            Authorization: "Bearer e871cab61a9967b08fceeb692f366ca3d34fdc15af400ec3f1c8fd3370f1f0ba"
        },
        body: payload,
    })

})

Cypress.Commands.add("putAPI", (pathParam, payload) => {

    cy.request({
        method: "PUT",
        url: "/" + pathParam,
        headers: {
            Authorization: "Bearer e871cab61a9967b08fceeb692f366ca3d34fdc15af400ec3f1c8fd3370f1f0ba"
        },
        body: payload,
    })

})

Cypress.Commands.add("deleteAPI", (pathParam) => {

    cy.request({
        method: "DELETE",
        url: "/" + pathParam,
        headers: {
            Authorization: "Bearer e871cab61a9967b08fceeb692f366ca3d34fdc15af400ec3f1c8fd3370f1f0ba"
        },
    })
})