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

// Output: [{ id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 30 }, { id: 3, name: 'Mark' }, { id: 4, age: 35 }]

// 2
let nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
