// console.log("This is TypeScript !");

export { }                // This line of code tells TypeScript that these line of codes are available in a seprate module.

// let age: number = 27;

// if (age < 50)
//     age += 10;

//     console.log(age);


// STATIC TYPING !


// let number = 123_456_789;
// let course = "TypeScript !";
// let is_published  = true;
// let level;                  

// Ts assumes that this variable is of type "any".


// Any type.

// level = 10;
// level = "Ten";

// function render(document) {
//     console.log(document);    
// }



// Arrays in TypeScript !


// let numbers = [10, 20, 30, 40, 50];
// let num = [];
// num[0] = 10;
// num[1] = "Twenty";
// num[2] = 30;



// CODE COMPLETION !

// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(n => n.valueOf)



// Tuples ! : It is a fixed length Array. Where each element has a particular type. It is helpful when we only have key value pairs.


// let user: [number, string,] = [1, "Sahil"];
// user[0].valueOf




// Enums : List of related constants.


// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Large;
// console.log(mySize);




// FUNCTIONS : Always properly annotate your functions, parameters and return types.


// function calculateTax(income: number, taxyear = 2022): number {
//     if (taxyear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(20000, 2023);




// OBJECTS : 
// TYPE ALIASES !

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 101,
//     name: "Sahil",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };




// ADVANCED TYPES.
//  1. TYPE ALIASES.
//  2. UNIONS AND INTERSECTIONS.
//  3. TYPE NARROWING.
//  4. NULLABLE TYPES.
//  5. THE UNKONOWN TYPE.
//  6. THE NEVER TYPE.




// UNIONS AND NARROWING.

// function kgToLbs(weight: number | string): number {
//     // Narrowing
//     if(typeof weight === "number")
//     return weight * 2.2;
//     else
//     return parseInt(weight) * 2.2;
// }


// kgToLbs(10);
// kgToLbs("10kg");




// INTERSECTIONS.

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }




// LITERAL TYPES: SOMETIMES WE WANT TO LIMIT THE VALUES ASSIGNED TO A VARIABLE.
// Literal (exact, specific)

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";




// NULLABLE.

// function greet(name: string | null | undefined) {
//     if(name)
//     console.log(name.toUpperCase());
//     else
//      console.log("Hola!");
// }

// greet(null);




// Optional Chaining.

















