function MultiplyByIndex(array)
{
{
    return array.map((value, index) => value * index)
}
const numbers = [10, 20, 30, 40, 50];
const result = MultiplyByIndex(numbers);
}
console.log(result)