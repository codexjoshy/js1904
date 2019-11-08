const person = {
    name: 'Josh',
    age : 10,
    instructor:true,
    married :false,
    friends : [
        {name1:'joseph', age1: 20, married1: false},
        {name1: 'Victor', age1: 10, married1: true},
        {name1: 'dare', age1: 25, married1:true}
    ],
    brothers: ['Mike', 'Ayo', 'Seun']
};

person.name;
person.married
person.friends[0].name
person.friends[2].married
person.brothers[2];

const Questions = [
    {
        question:'What is your name?', 
        option1:'josh', 
        option2:'Mike', 
        option3:'Uche', 
        answer:'option1'
    },

    {
        question: 'What is your name?',
        option1: 'josh',
        option2: 'Mike',
        option3: 'Uche',
        answer: 'option1'
    },
];
Questions[0].option4 = 'Vic'
// console.log(Questions[0]);
delete Questions[0].option4;
// console.log(Questions[0]);

let {friends} = person;
 let {name1, age1} = friends[1];
console.log(name1);