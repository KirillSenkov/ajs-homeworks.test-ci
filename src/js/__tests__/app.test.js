import { paintHealthBar, sortHeroesByHealth, getLevel } from '../app.js';
import fetchData from '../http.js';

test.each([
  [{ name: 'Цой', health: 100 }, 'healthy'],
  [{ name: 'Летов', health: 50 }, 'wounded'],
  [{ name: 'Гребенщиков', health: 150 }, 'healthy'],
  [{ name: 'Кинчев', health: 1 }, 'critical'],
  [{ name: 'Шахрин', health: 0 }, 'dead'],
  [{ name: 'Джексон', health: -100 }, 'undead']
])('paintHealthBar(%o) should return %s', (data, result) => {
  expect(paintHealthBar(data)).toBe(result);
});

test('should sort heroes order by heals desc', () => {
    const data = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
  
    const result = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
  
    expect(sortHeroesByHealth(data)).toEqual(result);
  });

// *
jest.mock('../http.js');

describe('getLevel', () => {
  test('should return the level if it is ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 10 });

    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 10');
  });

  test('should return some exquse if it is not really ok', () => {
    fetchData.mockReturnValue({ status: 'not really ok' });

    const result = getLevel(2);
    expect(result).toBe('Информация об уровне временно недоступна');
  });
});