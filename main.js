function main() {
    const myMap = new Map();

    const pets = new Map();
    pets.set('Otis', 'saint bernard');
    pets.set('Rocko', 'german shepard');
    pets.forEach((breed, name) => {
        console.log(`${name} is a ${breed} and is a good boy.`)
    });

}

main();