import fetchData, {  httpGet, httpPost } from '../http';

test('httpGet should throw an error with the given URL', () => {
  const url = 'http://server:8080';

  expect(() => httpGet(url)).toThrow(url);
});


test('httpPost should throw an error with the given URL', () => {
  const url = 'http://server:8080';

  expect(() => httpPost(url)).toThrow(url);
});

test('fetchData should throw an error with the "given URL"', () => {
  const url = 'Mock this!';

  expect(() => fetchData(url)).toThrow(url);
});