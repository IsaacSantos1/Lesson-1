// Lab 1 — Create a Simple Class with Extension
class Car {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
    getDescription() {
      return `${this.year} ${this.color} ${this.make} ${this.model}`;
    }
  }
  
  // Test Case
  const car1 = new Car("Toyota", "Camry", 2021, "Blue");
  console.log(car1.getDescription()); // "2021 Blue Toyota Camry"

  // Lab 2 — Add Methods and Modify Properties with Extension
class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        return "Insufficient funds";
      }
      this.balance -= amount;
    }
  
    getBalance() {
      return `Balance: $${this.balance}`;
    }
  }
  
  // Test Case
  const acc = new BankAccount("Alex", 100);
  acc.deposit(50);
  acc.withdraw(30);
  console.log(acc.getBalance()); // "Balance: $120"
  console.log(acc.withdraw(200)); // "Insufficient funds"

  // Lab 3 — Class Inheritance with Extension
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    introduce() {
      return `Hi, I’m ${this.name}, and I’m ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
    introduce() {
      return `Hi, I’m ${this.name}, I’m ${this.age} years old, and I’m in ${this.grade} grade.`;
    }
    promote() {
      // Promote grade (simple logic for demonstration, e.g., "11th" -> "12th")
      const gradeNum = parseInt(this.grade);
      if (!isNaN(gradeNum)) {
        this.grade = `${gradeNum + 1}th`;
      }
    }
  }
  
  // Test Case
  const s1 = new Student("Maya", 17, "11th");
  console.log(s1.introduce()); // "Hi, I’m Maya, I’m 17 years old, and I’m in 11th grade."
  s1.promote();
  console.log(s1.introduce()); // "Hi, I’m Maya, I’m 17 years old, and I’m in 12th grade."

  // Lab 4 — Classes and Arrays with Extension
class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }
  
  function listBooks(books) {
    books.forEach(book => {
      console.log(`${book.title} by ${book.author}`);
    });
  }
  
  function getShortBooks(books) {
    return books.filter(book => book.pages < 350);
  }
  
  // Test Cases
  const library = [
    new Book("1984", "George Orwell", 328),
    new Book("The Hobbit", "J.R.R. Tolkien", 310),
    new Book("Dune", "Frank Herbert", 412)
  ];
  
  listBooks(library);
  // "1984 by George Orwell"
  // "The Hobbit by J.R.R. Tolkien"
  // "Dune by Frank Herbert"
  
  console.log(getShortBooks(library)); // [1984, The Hobbit]

  // Lab 5 — Encapsulation & Private Fields with Extension
class User {
    #password;
    constructor(username) {
      this.username = username;
      this.#password = "";
    }
  
    setPassword(p) {
      if (p.length < 6) {
        return "Password must be at least 6 characters long.";
      }
      this.#password = p;
      return "Password set successfully";
    }
  
    checkPassword(p) {
      return p === this.#password ? "Access granted" : "Access denied";
    }
  }
  
  // Test Cases
  const u1 = new User("azahar");
  console.log(u1.setPassword("abc123")); // "Password set successfully"
  console.log(u1.checkPassword("abc123")); // "Access granted"
  console.log(u1.checkPassword("wrong")); // "Access denied"
  console.log(u1.setPassword("abc")); // "Password must be at least 6 characters long."