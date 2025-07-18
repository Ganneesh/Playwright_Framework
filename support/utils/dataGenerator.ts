// src/utils/dataGenerator.ts
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export const generateUserData = () => ({
  id: uuidv4(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});
