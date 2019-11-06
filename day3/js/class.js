//
class Student {
    
    constructor(aName, anAge, lang){
        this.name = aName;
        this.age = anAge;
        this.lang = lang;
    }
    speak (){
        return `${this.name} can speak ${this.lang}`;
    }
    walk(){

    }
    talk(){

    }
}
class Instructors extends Student{
    constructor(aName, anAge, lang, tech){
        super(aName, anAge, lang);
        this.tech = tech;
    }
}
let firstPerson = new Student('Josh', 10, 'french');
let secondPerson = new Student('Uche', 100, 'yoruba');
let josh = new Instructors('Josh', 5, 'french', 'jaavascript');
console.log(josh.tech);
// console.log(`My name is ${firstPerson.name} and I am ${firstPerson.age} years old and ${firstPerson.speak()}`);
// console.log(`My name is ${secondPerson.name} and I am ${secondPerson.age} years old ${secondPerson.speak()}`);
