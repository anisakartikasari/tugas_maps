const hewan = new Map([
    ["jerapah", 300],
    ["kelinci", 450],
    ["kucing", 550]
]);

hewan.forEach(function(value, key) {
console.log(key + ' = ' + value);
})