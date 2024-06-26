/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};

// function getPromise(): Promise<(string | number)[]> {
//   return new Promise((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// export {};


//У цьому завданні потрібно явно вказувати тип значення, що повертається?