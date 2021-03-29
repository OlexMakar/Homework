// //Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.

// let numbers = [25, -6, 39, -10, 12]
// numbers.forEach((val, i, arr) => {
//    if (arr[i] < 0) return arr[i] = 0  Коли використовується у forEach не треба return
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
//    if (val < 1000) return (val *= 1.20).toFixed(2)   <-- Ок. Але тут більше підходило  forEach
//    if (val > 1000) return (val *= 0.70).toFixed(2)
// })
// document.write(newArray)

//-----------------------------------------------------

// Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, 
// які починаються на задану літеру.

let names = ['Alla', 'Anya', 'Vova', 'Vika', 'Serhiy', 'Yana', 'Yura', 'Oksana',
   'Igor', 'Anatoliy', 'Diana']
let symbol = prompt('Введіть першу букву імені (англійська велика літера)')
let newArray = names.filter((val, i, arr) => {
   return val[0] === symbol
})
document.write(newArray)

