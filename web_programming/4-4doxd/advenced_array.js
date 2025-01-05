// const Double = (number) => {
//   let result = [];
//   for (const num of number) {
//     result.push(num * 2);
//   }
//   return result;
// };

// console.log(Double([1, 2, 3, 4, 5]));

// Үсэг тоологч
const letterCounter = (sentence) => {
  // const sentence = "Hey, can you go to grocery store with me?";

  // For of bolom in ylgaa
  // for (const letter of sentence) {
  //   console.log(letter);
  // }

  // for (const letter in sentence) {
  //   console.log(Number(letter) + 1);
  // }

  let result = 0;
  for (const index in sentence) {
    // result = index;
    result = Number(index) + 1;
  }
  // return result;
  return { result: result };
};

// letterCounter();

const sentence = "I am a student";
console.log(letterCounter(sentence));

const howManyLetters = (sentence) => {
  return { result: sentence.length };
};

console.log(howManyLetters(sentence));

const sumArray = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return { result };
};

const nums = [1, 2, 3, 4, 5, 5, 6, 34, 4, 4, 35];
console.log(sumArray(nums));

const max = (numbers) => {
  let result = numbers[0];
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return { result };
};

console.log(max(nums));

const letterFrequency = (sentence) => {
  // letterFrequency("haha");
  // { h: 2, a: 2 }
  // make a `frequency` object
  const frequency = {};
  // loop through the sentence
  for (const letter of sentence) {
    // check if the letter is already in the frequency object
    // if it is, increment the value
    // if not, add the letter to the frequency object

    if (letter in frequency) {
      // frequency[letter] = frequency[letter] + 1;
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency("haha"));
