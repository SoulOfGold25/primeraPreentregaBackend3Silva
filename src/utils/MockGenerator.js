import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

// Generador de mascostas
export const generatePetMock = () => {
    return {
        name: faker.animal.dog(),
        specie: faker.animal.type(), //
        birthDate: faker.date.past({ years: 10 }),
        adopted: false,
        owner: null,
        image: faker.image.url(),
    };
};

// Generador de usuarios
export const generateUserMock = async () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: await bcrypt.hash("coder123", 10),
        role: faker.helpers.arrayElement(["user", "admin"]),
        pets: [],
    };
};
