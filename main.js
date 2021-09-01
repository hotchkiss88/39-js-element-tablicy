let tablica = [100, 1, 2, 3, 4, 5, 6];

function first(tablica) {
    if (Array.isArray(tablica)) return;
    return tablica[0];
}

console.log(tablica[0]);