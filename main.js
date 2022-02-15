import input from 'input';

async function prompt(cars) {
    while (true) {
        const name= await input.text('What is your name?');
        const specs = {
        make: await input.text('What is the make of your car?'),
        model: await input.text('What model is your car?'),
        year: await input.text('What year is your car?'),
    }
    cars.set(name,specs);
    const end = await input.text('Are you finished?');
        if (end == 'yes'){
            break;
        }
    }
}

function display(cars) {
    for (const[name, specs] of cars) {
        console.log(`${name} has a ${specs.year}, ${specs.make}, ${specs.model}.`);
    }
}

async function  main() {
    const myCars = new Map();
    await prompt(myCars);
    display(myCars);
}


main();