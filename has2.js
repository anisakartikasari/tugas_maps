const hewan = new Map([
    ["jerapah", 300],
    ["kelinci", 450],
    ["kucing", 550]
]);

hewan.delete("jerapah");
console.log(hewan.has("jerapah"));