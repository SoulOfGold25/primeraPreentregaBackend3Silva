import { faker } from "@faker-js/faker";

export const generatePetMock = () => {
    return {
        name: faker.animal.dog(),
        species: faker.animal.type(),
        adopted: false,
    };
};
