const calculadora = require("../../models/calculadora");

test("somar 2 + 2", function () {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});

test("somar 100 + 5", function () {
  const result = calculadora.somar(100, 5);
  expect(result).toBe(105);
});

test("somar 'banana' + 5 deve retornar erro", function () {
  const result = calculadora.somar("banana", 5);
  expect(result).toBe("Erro");
});
