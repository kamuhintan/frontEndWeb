// array and object

//Mendeklarasikan Array
let students = ['John','Bob','peter'];
let numbers = [1,2,3,4,5];
let john = ['john', 'doe', 35,true]; 

console.log(students);
console.log(numbers);
console.log(john);
console.log(john.length);

// Index 
console.log(students[1]);
students[1] = "Jane";
console.log(students); 

console.log(students[students.length - 1]);

// Mengubah Element Array Menjadi String dengan toString()
console.log(john.toString()); 

//Menggabungkan Element Array dengan join()
console.log(john.join());

//pop = mengeluarkan element terakhir 
console.log
console.log(john);

// push = menambahkan elemen yang pertama 
john.push("Good Morning");
console.log(john);


//shift = mengeluarkan element pertama 
john.shift();
console.log(john);

// unshift menambah element di awal 
john.unshift("Hello");
console.log(john);
// Menambah, Menghapus, dan Mengganti Element Array dengan splice()
john.splice(3, 0,true);

// slice = mengambil element pada array dan di taruh di array
let john2 = john.slice(2, 4);
console.log(john2);

// concat (menggabungkan dua array atau lebih)
let combineArray = john.concat(numbers, john2);
console.log(combineArray);

//object 
// const john = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   grade: [90, 80, 100],
//   address: {
//     city: "Manado",
//     province: "Sulawesi Utara",
//     postalCode: "95371",
//   },
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
// };

// //Dot notation
console.log(john.firstName);
console.log(john.grade[2]);
console.log(john.address.city);
console.log(john.sayGreetings());

//Bracket notation
console.log(john["firstName"]);
console.log(john["grade"][2]);
console.log(john["address"]["city"]);
console.log(john["sayGreetings"]());

john.job = "Teacher";

//Array Object
let students = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Petter",
    },
    {
      id: 3,
      name: "Jack",
    },
  ];

 // students.forEach(function (item) {
//   console.log(item.name);
// });

// let output = students.map(function (item) {
//   return item.name;
// });

// let output = students.filter(function (item) {
//   return item.name === "Petter";
// }); 

let output = students.find(function (item) {
    return item.name === "Petter";
  });
  
  console.log(output);