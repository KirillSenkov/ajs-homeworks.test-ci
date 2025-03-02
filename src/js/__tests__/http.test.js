import * as http from '../http';

test('httpGet should throw an error with the given URL', () => {
  const url = 'http://server:8080';

  expect(() => http.httpGet(url)).toThrow(url);
});


test('httpPost should throw an error with the given URL', () => {
  const url = 'http://server:8080';

  expect(() => http.httpPost(url)).toThrow(url);
});

/*
export function httpGet(url) {
  throw new Error(url);
  }
  
  export function httpPost(url) {
  throw new Error(url);
  }*/