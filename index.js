console.log("Generating time table");

const lecturers = [
    {name: "Dennis", subject: "maths"},
    {name: "Jeffery", subject: "english"},
    {name: "Egwu", subject: "crk"},
    {name: "Julian", subject: "csc"},
    {name: "Ada", subject: "arts"},
    {name: "Zoe", subject: "business"},
    {name: "Jane", subject: "ens"},
    {name: "Olivia", subject: "physics"},
    {name: null, subject: null},
];

//the null field signifies a free period


//define a two  dimensional array

const table = [];
const periods = 4
const days = 5;

if(periods > 10){
    console.log("maiximum number of periods is 10");
    console.log("exiting");
    process.exit();
}

for(let i = 0; i<days; i++){
    table.push(new Array(periods));
}

/** to check if a lecture can be added to that day's instance
 *
 * @param day
 * @param lecturer
 * @param index
 * @return {boolean}
 */
function canAdd(day, lecturer,index) {
    let previousSubject = JSON.stringify(day[index-1]);
    let currentSubject = JSON.stringify(lecturer);
    let isPreceding = previousSubject === currentSubject;
    let occurence = occurences(day, lecturer);
    let canAdd = ((occurence === 1) && isPreceding ) ||  (occurence === 0) ;

    return canAdd;
}

/**checks how many times a lecture has been added to a days
 *
 * @param array
 * @param item
 * @return {number}
 */
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

//main logic for generating the time table
for (let i = 0; i < days; i++) {
    for (let j = 0; j < periods; j++) {
        let randomNumber = Math.floor(Math.random() * Math.floor(lecturers.length));
        let lecturer = lecturers[randomNumber]
        // while the lecture cannot be added reselect a lecture at random
        while(!canAdd(table[i], lecturer, j)){
            randomNumber = Math.floor(Math.random() * Math.floor(lecturers.length));
            lecturer = lecturers[randomNumber];
        }
        table[i][j] = lecturer;
    }
}

console.log(table);


