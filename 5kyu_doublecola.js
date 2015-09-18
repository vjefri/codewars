function whoIsNext(names, index){
    var copies = names.length;

    // calculates the number of copies that are made
    while(index >= copies) {
        index -= copies;
        copies *= 2;
    }

    // range from 0 to 4
    var position = Math.ceil(names.length * index / copies) - 1;
    return names[position];
}

// tests // 
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 6)) // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) // == "Penny"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // == "Leonard"


