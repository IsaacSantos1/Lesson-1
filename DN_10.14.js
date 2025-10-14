
//LAB 1 
function  calculateRectangleArea(length, width){
    if(length<0 || width<0){
        return "invalid input";
    }else{
        let area= length*width;
        return area;
    }
}

function calculateCircleArea(radius){
    if(radius<0){
        return "invalid input";
    }else{ 
        let areaC= radius*radius*Math.PI;
        return areaC;
    }
}
// Java Script does not suppport method overloading or overriding. Any yime you rewrite a function the old function is ommited from the memoru, just like a variable
//Javascript functions can be assigned to a variable
console.log(calculateRectangleArea(5, 10)); // 50
console.log(calculateCircleArea(3)); // 28.27 (approx)

// LAB 2

function gradeCategory(score){
    if(score<0 || score>100){
        return "enter grade again";
    }else if(score>=90 && score<=100){
        return "A";
    }else if(score>=80 && score<90){
        return "B";
    }else if(score>=70 && score<80){
        return "C";
    }else if(score>=60 && score<70){
        return "D";
    }else{
        return "F";
    }
}
console.log(gradeCategory(95)); // "A"
console.log(gradeCategory(72)); // "C"
console.log(gradeCategory(58)); // "F"

// LAB 3

function countVowels(word){
    let count=0;
    word.toLowerCase();
    let vowels= "aeiou";
    for(let i=0; i<word.length; i++){
        if(word==""){
            return "null not allowed";
        }
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("Javascript")); // 3

// LAB 4
function doubleNumbers(numbers){
    let doubled=[];
    for(let i=0; i<numbers.length; i++){
        doubled.push(numbers[i]*2);
    }
    return doubled;
}
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

// LAB 5

function farenheitToCelsius(f){
    return (f-32)*(5/9);
 }

    function describeTemperature(f){
       let description = "";
        if(f<0){
            description= "Freezing!";
        }else if(f>0&&f<20){
            description= "Cold";
        }else if(f>20&&f<=30){
           description= "Warm";
        }else{
            description=  "Hot";
        }
        return description;
    }
    console.log(describeTemperature(32)); // "Freezing!"
console.log(describeTemperature(68)); // "Cold"
console.log(describeTemperature(95)); // "Hot"

//Why were arrow functions were created?
//aarow functions were introduced in 2015
//1. Shorter syntax
//2. Lexical this keyword
//3. Implicit return
//4. No binding of arguments object

//basic syntax

function name(par1,par2)=>{};



