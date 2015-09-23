function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// tests //
console.log(

    rgb(255, 255, 255), // returns FFFFFF
    rgb(255, 255, 300), // returns FFFFFF
    rgb(0, 0, 0), // returns 000000
    rgb(148, 0, 211) // returns 9400D3

)
