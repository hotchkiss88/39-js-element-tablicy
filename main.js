let tablica = [100, 1, 2, 3, 4, 5, 6];

function first(arr) {
    if (!Array.isArray(arr)) return;
    return arr[0];
}

console.log(first(tablica));