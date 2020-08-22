import faker from 'faker'

import { Naver } from '../types'

export function mockNaver (): Naver {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    position: faker.random.word(),
    age: faker.random.number(80),
    time: faker.random.number(),
    projects: faker.random.words(faker.random.number(4)),
    avatar: faker.image.avatar()
  }
}
