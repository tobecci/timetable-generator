console.log("Generating time table");

const lecturers = [
    {name: "Mr A", subject: "maths"},
    {name: "Mrs B", subject: "english"},
    {name: "Mr C", subject: "crk"},
    {name: "Mrs D", subject: "csc"},
    {name: "Mr E", subject: "arts"},
    {name: "Mrs F", subject: "business"},
    {name: "Mr G", subject: "ens"},
    {name: "Mrs F", subject: "physics"},
    {name: null, subject: null},
];

//the null field signifies a free period

// console.log(lecturers);

//define a two  dimensional array
let timetable = [
    new Array(7),
    new Array(7),
    new Array(7),
    new Array(7),
    new Array(7),
    new Array(7),
    new Array(7),
];

function canAdd(day, lecturer,index) {
    // console.log({day: day, lecturer: lecturer, occurence: occurences(day, lecturer)});
    let previousSubject = JSON.stringify(day[index-1]);
    let currentSubject = JSON.stringify(lecturer);
    let isPreceding = previousSubject === currentSubject;
    let occurence = occurences(day, lecturer);
    let canAdd = ((occurence === 1) && isPreceding ) ||  (occurence === 0) ;

    return canAdd;
}

function occurences(array, item) {
    let occurence = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItemString = JSON.stringify(array[i]);
        let itemString = JSON.stringify(item);
        if (itemString === arrayItemString) {
            occurence++;
        }
    }
    return occurence;
}

let stored = [];

for (let i = 0; i < timetable.length; i++) {
    for (let j = 0; j < timetable.length; j++) {
        let randomNumber = Math.floor(Math.random() * Math.floor(lecturers.length));
        let lecturer = lecturers[randomNumber]
        // while the lecture cannot be added reselect a lecture at random
        while(!canAdd(timetable[i], lecturer, j)){
            randomNumber = Math.floor(Math.random() * Math.floor(lecturers.length));
            lecturer = lecturers[randomNumber];
        }
        timetable[i][j] = lecturer;
        stored.push(lecturer);
    }
}

console.log(timetable);


