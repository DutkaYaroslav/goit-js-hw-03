const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    for (let i = 0; i < allProdcuts.length; i += 1) {

        if (Object.values(allProdcuts[i])[0] === productName) {

            return Object.values(allProdcuts[i])[1] * Object.values(allProdcuts[i])[2]

        }

    };

}

console.table(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800