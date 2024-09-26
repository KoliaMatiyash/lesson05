// 1.(Date)Напишіть функцію, яка приймає дату народження у форматі "YYYY-MM-DD"
// і повертає вік користувача на поточний момент.
// const newUser = new Date(2004, 11, 28);
// const today = new Date();
// function haveOld(user, todayDate) {
//   let age;
//   if (
//     todayDate.getMonth() < user.getMonth() &&
//     todayDate.getDate() < user.getDate()
//   ) {
//     age = todayDate.getFullYear() - user.getFullYear() - 1;
//   } else {
//     age = todayDate.getFullYear() - user.getFullYear();
//   }
//   return console.log(age);
// }
// haveOld(newUser, today);
// 2.(Date)Напишіть функцію, яка приймає дату у форматі "YYYY-MM-DD"
// і повертає назву дня тижня для цієї дати.
// const newUser = new Date(2005, 3, 28);
// const days = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П'ятниця",
//   "Субота",
// ];
// function whatDay(user) {
//   const day = user.getDay();
//   return console.log(days[day]);
// }
// whatDay(newUser);
// 4.Напишіть функцію createCounter(), яка повертає об'єкт з двома методами:
// increment() — збільшує внутрішній лічильник на 1 і повертає поточне значення.
// get() — повертає поточне значення лічильника без його зміни.
// Функція повинна демонструвати концепцію лексичного оточення (Lexical Environment),
// де лічильник зберігається у замиканні й доступний тільки через методи об'єкта,
// який повертає функція createCounter().
// function createCounter() {
//   let value = 0;
//   return {
//     increment() {
//       value++;
//       return value;
//     },
//     get() {
//       return value;
//     },
//   };
// }
// const counter = createCounter();
// console.log(typeof counter);
// console.log(counter.get());
// counter.increment();
// console.log(counter.get());
// counter.increment();
// console.log(counter.get());
