// //Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.

// let numbers = [25, -6, 39, -10, 12]
// numbers.forEach((val, i, arr) => {
//    if (arr[i] < 0) return arr[i] = 0
//    else
//       return arr[i];
// })
// document.write(numbers);

//-----------------------------------------------------

// Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, 
// які менші за задану.

// let prises = [4.90, 27.95, 10.50, 75.30, 20.00];
// let enterPrise = parseFloat(prompt('Введіть ціну'));
// let newPrises = prises.filter((val, i, arr) =>
//    (val < enterPrise))
// document.write(newPrises)


//-----------------------------------------------------

//Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20%
// ціни, для тих, які більші за 1000 грн. відняти 30%.

// let prises = [490, 1250, 150, 720, 2600, 1100]
// let newArray = prises.map((val, i, arr) => {
//    if (val < 1000) return (val *= 1.20).toFixed(2)
//    if (val > 1000) return (val *= 0.70).toFixed(2)
// })
// document.write(newArray)

//-----------------------------------------------------

// Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, 
// які починаються на задану літеру.

// let names = ['Alla', 'Anya', 'Vova', 'Vika', 'Serhiy', 'Yana', 'Yura', 'Oksana',
//    'Igor', 'Anatoliy', 'Diana']
// let symbol = prompt('Введіть першу букву імені (англійська велика літера)')
// let newArray = names.filter((val, i, arr) => {
//    return val[0] === symbol
// })
// document.write(newArray)

//Задача 5.Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі 
//є легковими (легшими за 2000 кг).

// let carsWeight = [1500, 1300, 5200, 2500, 1200]
// let x = carsWeight.every((val, i, arr) => val < 2000)
// if (x) document.write('Всі авто є легковими')
// else
//    document.write('Не всі авто є легковими')

//Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, 
//чи були дні, коли кількість відвідувачів була меншою за 10.

// let visitors = [12, 15, 13, 14, 9, 5, 4]
// if (visitors.some((val, i, arr) =>
//    val < 10))
//    alert('Були такі дні')
// else ('Не було таких днів')


//Задача 7. Відсортувати масив імен за останньою літерою.
// let names = ['Alla', 'Anya', 'Vova', 'Vika', 'Serhiy', 'Yana', 'Yura', 'Oksana',
//    'Igor', 'Anatoliy', 'Diana']
// let sorted = names.sort(function (a, b) {

//    if (a[a.length - 1] > b[b.length - 1])
//       return 1;
//    else if (a[a.length - 1] < b[b.length - 1])
//       return -1;
//    return 0;
// })

// alert(sorted)

// Задача 8. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% 
// (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).

// let prises = [1200, 900, 327, 1690, 830, 1050]
// prises.forEach((val, i, arr) => {
//    if (arr[i] > 1000) return arr[i] *= 0.8
//    else return arr[i] *= 0.95
// })
// document.write(prises)

// Задача 9. Дано масив років народження працівників. Вивести масив тих, які є призовного віку 
// (менше 25 років).

// let ages = [1982, 1991, 1998, 2000, 1994, 2001]
// let conscript = ages.filter((val, i, arr) => 2021 - val < 25)
// alert(conscript)

// Задача 10. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які 
// є меншими за 115.

// let hemohlobin = [125, 110, 137, 145, 114, 150, 105]
// let until115 = hemohlobin.filter((val, i, arr) => val < 115)
// document.write(until115)

// //Задача 11. Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.
// let prises = [1200, 2300, 1800, 3200, 5300, 1000]
// let newPrises = prises.filter((val, i, arr) => val < 2000)
// document.write(newPrises)

//Задача 12. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
// let text = prompt('Введіть набір символів')
// let count = 0
// document.write(text)

// function findA(someText) {
//    someArrText = someText.split('')
//    someArrText.forEach((val, i, arr) => {
//       if (val == 'a') {
//          count++
//       }
//       return count
//    })
// }
// findA(text)
// document.write(`<br>${count}`)

//Задача 13. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.
// let massiv = []
// while (true) {

//    let value = prompt("Введіть число");
//    if (value === "" || value === null || !isFinite(value)) break;
//    massiv.push(+value);
// }

// let product = massiv.reduce((prevValue, val, i, arr) => prevValue * val)
// alert(product)

//Задача 14. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.
// let numbers = []
// while (true) {
//    let value = prompt('Enter value');
//    if (value === "" || value === null || !isFinite(value)) break;
//    numbers.push(+value);
// }
// let sorted = numbers.sort((a, b) => a - b)
// let max = numbers[numbers.length - 1]
// alert(max)






