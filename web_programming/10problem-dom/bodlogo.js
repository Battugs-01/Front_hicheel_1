// // 1-р баг ТДБ
// let employees = [
//   { name: "John", salary: 5000 },
//   { name: "Jane", salary: 6500 },
//   { name: "Mark", salary: 7200 },
//   { name: "Mary", salary: 8000 },
// ];
// let result = 0;
// for (employee in employees) {
//   result += employees[employee].salary;
// }
// console.log(result);

// // 2-р баг 3Бүдүүн
// //2. Тоонуудын array өгөгдсөн:
// // Median ийг олох функц бич.
// let numbers = [23, 45, 12, 67, 34, 89, 4, 56, 1];
// const mat = [];
// const eremb = (numbers) => {
//   for (let i of numbers) {
//     let count = 0;
//     for (let j of numbers) {
//       if (i > j) {
//         count++;
//       }
//     }
//     mat[count] = i;
//   }
// };
// eremb(numbers);
// console.log(mat);
// const medoloh = (mat) => {
//   if (mat.length % 2 == 0) {
//     return (
//       (mat[Math.floor(mat.length / 2)] + mat[Math.floor(mat.length / 2 - 1)]) /
//       2
//     );
//   } else {
//     return mat[Math.floor(mat.length / 2)];
//   }
// };

// console.log(medoloh(mat));

// // 3-р баг 3Сайхан
// // 3 Танд бүтээгдэхүүнийг төлөөлөх объектуудын массив байна:
// // Зөвхөн нөөцөд байгаа бүтээгдэхүүнийг агуулсан шинэ массив үүсгэ
// let products = [
//   { name: "Laptop", price: 1500, inStock: true },
//   { name: "Phone", price: 800, inStock: false },
//   { name: "Monitor", price: 300, inStock: true },
//   { name: "Keyboard", price: 100, inStock: true },
// ];
// const aguuljBui = [];
// for (const i of products) {
//   if (i.inStock == 1) {
//     aguuljBui.push(i);
//   }
// }
// console.log(aguuljBui);

// // 4-р баг Цубаса -> Жигүүр
// // 4 Танд нэр, дүн бүхий олон тооны оюутнууд байна:
// // Сурагчдыг дүнгээр нь бүлэглэ
// // Output: { A: ['John', 'Paul'], B: ['Jane'], C: ['Anna'] }
// let students = [
//   { name: "John", grade: "A" },
//   { name: "Jane", grade: "B" },
//   { name: "Paul", grade: "A" },
//   { name: "Anna", grade: "C" },
// ];
// const byGrade = {};
// for (const student of students) {
//   if (student.grade in byGrade) {
//     byGrade[student.grade].push(student.name);
//   } else {
//     byGrade[student.grade] = [student.name];
//   }
// }
// console.log(byGrade);

// // 5-р баг 2EZ4US
// // Массивын объект - Хамгийн урт массивыг олох
// // 5. Танд дараах массив байна:
// // Аль бүлэгт хамгийн урт массив байгааг ол
// let arr = [
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2],
// ];
// let long = 0;
// let t;
// for (let index in arr) {
//   if (long < arr[index].length) {
//     long = arr[index].length;
//     t = index;
//   }
// }
// console.log(arr[t]);

// 6 Shadow
// 6 Nested Loops - Матрицын диагональ нийлбэр
// Танд дараах матриц байна
// Диагональ элементүүдийн нийлбэрийг тооцоол
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const sum = () => {
  for (const submatrix of matrix) {
    let max = 0;
    for (const value of submatrix) {
      max += value;
    }
    console.log(max);
  }
};

let su = {};
sum();
