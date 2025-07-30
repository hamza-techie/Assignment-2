// 1. Unique Words Counter
// ------------------------
// Input: A string
// const text = "JavaScript is great and JavaScript is powerful";
// Task: Return an object with each unique word and its count.


// const text = "JavaScript is great and JavaScript is powerful";
// const words = text.split(" ");


// const wordCount = {};
// for (const word of words) {

//     if(wordCount[word]){
//         wordCount[word]++;
//     } else{
//         wordCount[word] = 1;
//     }
// }

// console.log(wordCount);



// 2. Group Students by Class
// ---------------------------
// Input: Array of objects
// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];
// Task: Return an object like { "10th": [...], "9th": [...] }

// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];

// const groupedByClass = {};

// for (const student of students) {
//     const className = student.class;

//     if (groupedByClass[className]) {
//         groupedByClass[className].push(student);
//     } else {
//         groupedByClass[className] = [student];
//     }
    
// }

// console.log(groupedByClass);



// 3. Filter Products by Price Range
// ----------------------------------
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];
// Task: Create a function that takes min and max price and returns filtered products

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];

// function priceRange(min, max) {
//     return products.filter(products => products.price >= min && products.price <= max);
// }
// const min = prompt();
// const max = prompt(); 

// const result = priceRange(min, max);

// console.log(result);



// 4. Check Palindrome Using Function
// -----------------------------------
// Input: A string like "madam"
// Task: Check if it is palindrome using a function

// function isPalindrome(str){
//     const lowerStr = str.toLowerCase();

//     const reversedStr = lowerStr.split('').reverse().join('');
//      return lowerStr === reversedStr;

// }

// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("Hamza"));



// 5. Flatten Array
// -----------------
// const nestedArray = [1, [2, [3, 4]], 5];
// Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods

// const nestedArray = [1, [2, [3, 4]], 5];
// const flattenArray = nestedArray.flat(2);

// console.log(flattenArray);



// 6. Total Salary Calculation (Using Reduce)
// -------------------------------------------
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];
// Task: Get total salary of all employees

// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];

// const totalSalary = employees.reduce((i, employee) => {
//     return i + employee.salary;
// }, 0)

// console.log(totalSalary);



// 10. Sum of All Even Numbers in Nested Array
// --------------------------------------------
// const data = [1, 2, [4, 5, [6, 8]], 10];
// Task: Return sum of all even numbers, regardless of depth

// const data = [1, 2, [4, 5, [6, 8]], 10];
// const flattened = data.flat(Infinity);

// const evenNumber = flattened.filter(num=> num % 2 === 0);

// const total = evenNumber.reduce((sum, num) => sum + num, 0);
// console.log(total);


// 11. Rest Operator in Function
// ------------------------------
// Task: Write a function that takes any number of numbers and returns their average

// function average(...numbers){
//     if(numbers.length === 0) return 0;

//     const total = numbers.reduce((sum, num) => sum + num, 0);
//     return total / numbers.length; 
// }

// console.log(average(10, 20, 30));
// console.log(average(5, 15)); 
// console.log(average()); 

// 12. Frequency Count with Spread
// -------------------------------
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Task: Count how many times each fruit occurred using spread & reduce

// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const frequency = arr.reduce((acc, fruit) => {
//   return {
//     ...acc,
//     [fruit]: (acc[fruit] || 0) + 1
//   };
// }, {});

// console.log(frequency);


// 13. Toggle Status
// ------------------
// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];
// Task: Write a function that toggles done status of a task by id

// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];


// 14. Sort by Name Length
// ------------------------
// const names = ["Ali", "Zara", "Ahmed", "Usman"];
// Task: Sort names by length in ascending order

const names = ["Hamza", "Ali", "Zara", "Ahmed", "Usman"];

const sortedByLength = names.sort((a, b) => a.length - b.length);

console.log(sortedByLength);