const findBestEmployee = function (employees) {

    const biggest = Math.max(...Object.values(employees));

    let name;


    for (const employer in employees) {
        if (employees[employer] === biggest) {
            name = employer
        }

    }

    // let biggest = 0;

    // for (const employer in employees) {
    //     biggest += 1;
    // }


    return `ім'я ${name} кі-ть ${biggest}`;

};


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux