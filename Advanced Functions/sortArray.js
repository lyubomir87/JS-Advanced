function solve(arr, sort) {
    if (sort === 'asc') {
        return arr.sort((a, b) => a - b);
    } else {
        return arr.sort((a, b) => b - a);
    }
}
