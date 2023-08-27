import { assert, expect, test, vi } from 'vitest'
import { getUserResume, login } from '../src/actions/account'
import createAxiosInstance from '../src/createAxiosInstance'

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

test('login user success token with authenticated', async () => {
  const payload = {
    token: '12345',
  }

  // @ts-ignore
  createAxiosInstance.mockImplementation(() => {
    return Promise.resolve({
      data: { token: '12345' }, // bad token to resolve
      status: 200,
    })
  })

  // Appel de la fonction de login
  const token = await login('johnsdsd@doe.fr', 'MyAwe$omePa$$w0rD')

  // Vérifie que mockAxios.post a été appelé avec les bons paramètres
  expect(createAxiosInstance).toHaveBeenCalledWith({
    data: JSON.stringify({ email: 'johnsdsd@doe.fr', password: 'MyAwe$omePa$$w0rD' }),
    method: 'POST',
    url: '/login',
  })

  // Vérifie que la fonction renvoie pas le bon token
  expect(token).toEqual(payload)
})

test('test user with bad token', async () => {
  const payload = {
    token: '12345',
  }

  // @ts-expect-error
  createAxiosInstance.mockImplementation(() => {
    return Promise.resolve({
      data: { token: '1234567' }, // bad token to resolve
      status: 200,
    })
  })

  const token = await login('johnsdsd@doe.fr', 'MyAwe$omePa$$w0rD')

  expect(createAxiosInstance).toHaveBeenCalledWith({
    data: JSON.stringify({ email: 'johnsdsd@doe.fr', password: 'MyAwe$omePa$$w0rD' }),
    method: 'POST',
    url: '/login',
  })
  expect(token).not.toEqual(payload)
})


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

  // @ts-expect-error

  createAxiosInstance.mockImplementation(() => {
    return Promise.resolve({
      data: {
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
      },
      status: 200,
    })
  })

  const response = await getUserResume()

  expect(createAxiosInstance).toHaveBeenCalled()

  expect(response).toEqual(payload)
})
