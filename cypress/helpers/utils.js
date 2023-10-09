export class Utils {

    emailGeneration() {
        const randomString = Math.random().toString(36).substring(2, 10);
        const email = `${randomString}@dispotable.com`;

        return email;
    }
}