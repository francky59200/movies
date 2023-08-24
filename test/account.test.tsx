import { assert, expect, test, vi } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import { getUserResume, login } from '../src/actions/account'
import createAxiosInstance from '../src/__mocks__/createAxiosInstance'

test('test json', () => {
  const input = {
    name: 'franck@mail.fr',
    password: 'moimoi',
  }
  const output = JSON.stringify(input)
  expect(output).to.equal('{"name":"franck@mail.fr","password":"moimoi"}')
  assert.deepEqual(JSON.parse(output), input, 'is matched')
  expect(1 + 1).to.equal(2)
})

vi.mock('~/createAxiosInstance')
test('login user with authenticated', async () => {
  const payload = {
    email: 'john@doe.fr',
    password: 'MyAwe$omePa$$w0rD',
  }
  // Mock la réponse d'Axios
  // @ts-expect-error
  mockAxios.post.mockResolvedValue({ data: JSON.stringify(payload), status: 200 })

  // Appel de la fonction de login
  const token = await login('john@doe.fr', 'MyAwe$omePa$$w0rD')

  // Vérifie que mockAxios.post a été appelé avec les bons paramètres
  expect(createAxiosInstance).toHaveBeenCalledWith({
    data: JSON.stringify(payload),
    method: 'POST',
    url: '/login',
  })

  // Vérifie que la fonction renvoie bien le token
  expect(token).toEqual(payload)
})

const mockAdapter = new MockAdapter(createAxiosInstance)
test('Get resume user', async () => {
  const payload = {
    workoutNumber: 14,
    totalKilometer: '82,16km',
    totalTime: '8h31mn',
    fastestKilometer: '5mn45/km',
    lastTrophy: {
      label: 'Distance totale parcourue',
      id: 'totalDistance',
      value: '100km',
      tier: 3,
    },
  }

  mockAdapter.onGet('/user/resume').reply(200, payload)

  const response = await getUserResume()

  expect(response).toEqual(payload)
})
