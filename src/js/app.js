import fetchData from './http.js';

export function paintHealthBar({name, health}) {
    if (health > 50) {
        return 'healthy';
    }
    if (health > 15) {
        return 'wounded';
    }
    if (health > 0) {
        return 'critical';
    }
    if (health === 0) {
        console.log('R.I.P., dear ' + name);
        return 'dead';
    }
    return 'undead';
}

export function sortHeroesByHealth(heroes) {
    return heroes.slice().sort((a, b) => b.health - a.health);
}

// *
export function getLevel(userId) {
    const response = fetchData(`https://server/user/${userId}`);
    
    if (response.status === 'ok') {
       return `Ваш текущий уровень: ${response.level}`; 
    }
    
    return `Информация об уровне временно недоступна`;
  }
