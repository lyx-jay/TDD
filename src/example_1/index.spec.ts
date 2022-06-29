import { expect, test } from 'vitest';
import { trans } from './index'

test('should work normally', () => {
  expect(true).toBe(true);
})

// _abc_bcs  -> abcBcs

test("abc should work well", () => {
  const res = trans('abc');
  expect(res).toEqual('abc')
})

test('_abc_bcs should work well', () => {
  const res = trans('_abc_bcs');
  expect(res).toEqual('abcBcs');
})

test('abc_bcs_ should work well', () => {
  const res = trans('_abc_bcs_');
  expect(res).toEqual('abcBcs');
})

test('_abc_bcs_d should work well', () => {
  const res = trans('_abc_bcs_d');
  expect(res).toEqual('abcBcsD');
})
