/// <reference types="cypress" />
import { Utils } from "../helpers/utils";
const utils = new Utils();
import payloadPost from "../config/postData.json";
import payloadPut from "../config/putData.json";

describe("API Automation In Cypress", () => {

    it("Automation Using Custom Commands", () => {
        payloadPost.email = utils.emailGeneration();

        cy.postAPI(payloadPost).then((response) => {
            expect(response.status).to.be.equal(201);

            let userId = response.body.id;

            cy.getAPI(userId).then((response) => {
                expect(response.status).to.be.equal(200);
            })

            cy.putAPI(userId, payloadPut).then((response) => {
                expect(response.status).to.be.equal(200);
            })

            cy.deleteAPI(userId).then((response) => {
                expect(response.status).to.be.equal(204);
            })
        })
    })
})