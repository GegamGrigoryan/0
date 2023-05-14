import {healthStatus,heroys} from '../src/index.js'


describe("healthStatus", () => {
  test('critical', () => {
    healthStatus('Маг', 14)
    expect('critical').toBe('critical');
  });

  test('wounded', () => {
    healthStatus('Маг', 40)
    expect('wounded').toBe('wounded');
  });

  test('healthy', () => {
    healthStatus('Маг', 80)
    expect('healthy').toBe('healthy');
  });
})

describe("Heroy Sort", () => {
  test('Heroy Sort', () => {
    let res = heroys.map(el => el.health)
    expect(res).toEqual([100,80,10]);
  })
})