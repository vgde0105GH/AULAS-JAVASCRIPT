function StartCalculator() 
{
    let num1 = Number(prompt("Digite o primeiro número:"));
    let operator = prompt("Digite o operador (+, -, *, /):");
    let num2 = Number(prompt("Digite o segundo número:"));

    let result = calculate(num1, num2, operator);
    alert("O resultado é: " + result);
}

function calculate(num1, num2, operator)
{
    if (operator === "+")
    {
        return add(num1, num2);
    }
    else if (operator === "-")
    {
        return subtract(num1, num2);
    }
    else if (operator === "*")
    {
        return multiply(num1, num2);
    }
    else if (operator === "/")
    {
        return divide(num1, num2);
    }
    else 
    {
        return "Operador inválido!";
    }
}

function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    if (num2 === 0)
    {
        return "Erro: Divisão por zero não existe!";
    }
    return num1 / num2;
}

StartCalculator();