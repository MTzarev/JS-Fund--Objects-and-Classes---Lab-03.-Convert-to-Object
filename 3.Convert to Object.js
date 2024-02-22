function convertToObject(jsonStr) {
    let string = JSON.parse(jsonStr);
    let entries = Object.entries(string);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }

    console.log();
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
//convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');