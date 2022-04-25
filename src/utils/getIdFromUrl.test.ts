import getIdFromUrl from './getIdFromUrl';

test('getIdFromUrl - should get correct id', () => {
  const url1 = 'http://something.com/asd/1';
  const url2 = 'http://something.com/asd/2/';

  const id1 = getIdFromUrl(url1);
  const id2 = getIdFromUrl(url2);

  expect(id1).toBe('1');
  expect(id2).toBe('2');
});
