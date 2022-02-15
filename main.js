import input from 'input';

async function prompt(grades) {
    while (true) {
        const resp = await input.text('Students name (or cancel)');
    if (resp == 'cancel') {
        break;
    } else {
        const grade = await input.text('Students Grade');
        grades.set(resp, grade);
    }
}
}

function display(grades) {
    for (const [name, grade] of grades) {
        console.log(`${name} has a ${grade}%`); 
    }
}

async function main() {
    const grades = new Map();

    await prompt(grades);
    display(grades);
}

main();