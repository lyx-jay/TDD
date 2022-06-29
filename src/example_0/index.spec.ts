import { test, expect } from 'vitest';
import { getChange } from './index';


test('vitest should work normally', () => {
  expect(true).toBe(true);
})

test('getChange(1,1) should equal [] - an empty array', () => {
  const res = getChange(1, 1);
  expect(res).toEqual([]);
})

test('getChange(215, 300) should return [50, 20 ,10 ,5]', () => {
  const res = getChange(215, 300);
  expect(res).toEqual([50, 20, 10, 5]);
})

test('getChange(486, 600) should return [50, 20 ,10 ,5]', () => {
  const res = getChange(486, 600);
  expect(res).toEqual([100, 10, 2, 2]);
})