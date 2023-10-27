// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("100 dollars should be 15650 yen", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(100);

    // Si 1 dólar son 156.5 yenes, entonces 100 dólares deben ser (100 * 156.5)
    const expected = 100 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected);
})

test("1000 yen should be 8.7 pounds", function() {
    // Importo la función desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1000);

    // Si 1 yen son 0.87 libras esterlinas, entonces 1000 yenes deben ser (1000 * 0.87)
    const expected = 1000 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected);
})
