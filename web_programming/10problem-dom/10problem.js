// 1 . Нийт цалин
// Танд дараах объектуудын массив байна:
// Бүх ажилчдын нийт цалинг тооцоолох код бич.
let employees = [
  { name: "John", salary: 5000 },
  { name: "Jane", salary: 6500 },
  { name: "Mark", salary: 7200 },
  { name: "Mary", salary: 8000 },
];

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}

console.log(totalSalary);
//2. Тоонуудын array өгөгдсөн:
// Median ийг олох функц бич.
let numbers = [23, 45, 12, 67, 34, 89, 4, 56];

// 3 Танд бүтээгдэхүүнийг төлөөлөх объектуудын массив байна:
// Зөвхөн нөөцөд байгаа бүтээгдэхүүнийг агуулсан шинэ массив үүсгэ
let products = [
  { name: "Laptop", price: 1500, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: true },
];

let inStockProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    inStockProducts.push(products[i]);
  }
}

console.log(inStockProducts);

// 4 Танд нэр, дүн бүхий олон тооны оюутнууд байна:
// Сурагчдыг дүнгээр нь бүлэглэ
let students = [
  { name: "John", grade: "A" },
  { name: "Jane", grade: "B" },
  { name: "Paul", grade: "A" },
  { name: "Anna", grade: "C" },
];

let groupedStudents = {};

for (let i = 0; i < students.length; i++) {
  let grade = students[i].grade;
  if (!groupedStudents[grade]) {
    groupedStudents[grade] = [];
  }
  groupedStudents[grade].push(students[i].name);
}

console.log(groupedStudents);

// Output: { A: ['John', 'Paul'], B: ['Jane'], C: ['Anna'] }

// Массивын объект - Хамгийн урт массивыг олох
// 5. Танд дараах массив байна:
// Аль бүлэгт хамгийн урт массив байгааг ол
let arr = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5, 6],
  [1, 2],
];

let longestGroup = "";
let maxLength = 0;

for (let group in data) {
  if (data[group].length > maxLength) {
    maxLength = data[group].length;
    longestGroup = group;
  }
}

console.log(longestGroup);

// 6 Nested Loops - Матрицын диагональ нийлбэр
// Танд дараах матриц байна
// Диагональ элементүүдийн нийлбэрийг тооцоол
let matrix = [
  [2, 3, 1],
  [5, 6, 4],
  [8, 9, 7],
];

let sumDiagonal = 0;

for (let i = 0; i < matrix.length; i++) {
  sumDiagonal += matrix[i][i];
}

console.log(sumDiagonal);

// Объектыг массив болгон хувиргах
// 7. Танд дараах объект байна:
// Энэ объектыг value-г массив болгон хувирга
let person = { name: "Alice", age: 30, city: "London", occupation: "Engineer" };

let personArray = [];
for (let key in person) {
  personArray.push([key, person[key]]);
}
console.log(personArray);

// Merge by two array
let arr1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mark" },
];

let arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 4, age: 35 },
];

let mergedArray = [];

for (let i = 0; i < arr1.length; i++) {
  let obj1 = arr1[i];
  let found = false;

  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j].id === obj1.id) {
      mergedArray.push({ ...obj1, ...arr2[j] });
      found = true;
      break;
    }
  }

  if (!found) {
    mergedArray.push(obj1);
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (!mergedArray.some((obj) => obj.id === arr2[i].id)) {
    mergedArray.push(arr2[i]);
  }
}

console.log(mergedArray);
// Output: [{ id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 30 }, { id: 3, name: 'Mark' }, { id: 4, age: 35 }]

let nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];

let flatArray = [];
let stack = [...nestedArray];

while (stack.length > 0) {
  let next = stack.pop();
  if (Array.isArray(next)) {
    stack.push(...next);
  } else {
    flatArray.push(next);
  }
}

flatArray.reverse();
console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
