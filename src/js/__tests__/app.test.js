import { paintHealthBar, sortHeroesByHealth  } from '../app.js';

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