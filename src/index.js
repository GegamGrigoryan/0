export function healthStatus(name, health) {

    if (health > 50) {
        return 'healthy'
    }
    if (health <= 50 && health > 15) {
        return 'wounded'
    }
    if (health <= 15) {
        return 'critical'
    }
}

export let heroys = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
].sort((prev, next) => next.health - prev.health);
