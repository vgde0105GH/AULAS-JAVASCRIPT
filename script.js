function classifyNumbers(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (number % 5 === 0) {
            result.push("DivisibleBy5");
        } else if (number % 2 === 0) {
            result.push("Even");
        } else {
            result.push("Odd");
        }
    }

    return result;
}

const numbers = [10, 15, 22, 33, 40];

const classifiedNumbers = classifyNumbers(numbers);

console.log(classifiedNumbers);
