let classList = [
    {
        courseID: "CPSC4392",
        section: 1,
        meets: "010100925",
        specialties: [2, 3],
    },
    {
        courseID: "CPSC4360",
        section: 1,
        meets: "101001215",
        specialties: [2, 9],
    },
    {
        courseID: "CPSC4360",
        section: 2,
        meets: "010101755",
        specialties: [2, 9],
    },
    {
        courseID: "CPSC4360",
        section: 3,
        meets: "101001755",
        specialties: [2, 9],
    },
    {
        courseID: "CPSC4387",
        section: 1,
        meets: "101010925",
        specialties: [8, 14],
    },
    {
        courseID: "CPSC4379",
        section: 1,
        meets: "101011215",
        specialties: [4, 10],
    },
    {
        courseID: "CPSC4370",
        section: 1,
        meets: "010100800",
        specialties: [13],
    },
    {
        courseID: "CPSC4370",
        section: 2,
        meets: "101000800",
        specialties: [13],
    },
    {
        courseID: "CPSC4399",
        section: 1,
        meets: "101000925",
        specialties: [1],
    },
    {
        courseID: "CPSC4366",
        section: 1,
        meets: "010101215",
        specialties: [11, 4],
    },
    {
        courseID: "CPSC4368",
        section: 1,
        meets: "101001050",
        specialties: [4, 15],
    },
    {
        courseID: "CPSC4368",
        section: 2,
        meets: "010101050",
        specialties: [4, 15],
    },
    {
        courseID: "CPSC4373",
        section: 1,
        meets: "010100925",
        specialties: [0, 1],
    },
    {
        courseID: "CPSC4380",
        section: 1,
        meets: "010101050",
        specialties: [8, 5],
    },
    {
        courseID: "CPSC3377",
        section: 1,
        meets: "101001215",
        specialties: [0, 1, 5],
    },
    {
        courseID: "CPSC3377",
        section: 2,
        meets: "010101215",
        specialties: [0, 1, 5],
    },
    {
        courseID: "CPSC3380",
        section: 1,
        meets: "101010925",
        specialties: [5, 16],
    },
    {
        courseID: "CPSC3380",
        section: 2,
        meets: "010100925",
        specialties: [5, 16],
    },
    {
        courseID: "CPSC3382",
        section: 1,
        meets: "010101055",
        specialties: [8],
    },
    {
        courseID: "CPSC3384",
        section: 1,
        meets: "101011050",
        specialties: [12, 6],
    },
    {
        courseID: "CPSC3384",
        section: 2,
        meets: "010101215",
        specialties: [12, 6],
    },
    {
        courseID: "CPSC2376",
        section: 1,
        meets: "101001215",
        specialties: [2, 3],
    },
    {
        courseID: "CPSC2377",
        section: 1,
        meets: "010101055",
        specialties: [4, 11, 10],
    },
    {
        courseID: "CPSC2377",
        section: 2,
        meets: "101001055",
        specialties: [4, 11, 10],
    },
    {
        courseID: "CPSC2380",
        section: 1,
        meets: "101001055",
        specialties: [12, 8],
    },
    {
        courseID: "CPSC1375",
        section: 1,
        meets: "010101215",
        specialties: [8, 15],
    },
    {
        courseID: "CPSC1375",
        section: 2,
        meets: "101001755",
        specialties: [8, 15],
    },
    {
        courseID: "CPSC1375",
        section: 3,
        meets: "101010800",
        specialties: [8, 15],
    },
    {
        courseID: "CPSC3367",
        section: 1,
        meets: "101011360",
        specialties: [8, 10, 2],
    },
]

let instructors = [
    {
        "name": "Baker",
        "specialties": [0, 2, 3],
        "classLimit": 2,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Elizibeth",
        "specialties": [1, 6, 12, 7],
        "classLimit": 3,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Ivan",
        "specialties": [4, 5, 10],
        "classLimit": 4,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Chu",
        "specialties": [11, 13, 3],
        "classLimit": 3,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Orme",
        "specialties": [14, 10, 9],
        "classLimit": 4,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Bolt",
        "specialties": [15, 9, 14],
        "classLimit": 3,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Springer",
        "specialties": [8, 5, 2, 3],
        "classLimit": 4,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Zak",
        "specialties": [10, 4, 15, 2],
        "classLimit": 3,
        "currentClasses": 0,
        "meets": []
    },
    {
        "name": "Milanova",
        "specialties": [0, 1, 5, 11],
        "classLimit": 4,
        "currentClasses": 0,
        "meets": []
    },
]

let classTime = 75;

pairer = {
    instructors: [],
    classes: [],
    length: 0,

    sync: function(decision) {
        this.instructors = decision.pairer.instructors;
        this.classes = decision.pairer.classes;
        this.length = decision.pairer.length;
    },

    clear: function() {
        this.instructors = [];
        this.classes = [];
        this.length = 0;
    },

    getSchedule: function() {
        let newSchedule = {
            Instructors: [].concat(this.instructors),
            Classes: [].concat(this.classes),
        }
        return newSchedule;
    },

    pair: function(instructor, aClass) {
        let copiedInstructor = JSON.parse(JSON.stringify(instructor));
        let copiedClass = JSON.parse(JSON.stringify(aClass));
        this.instructors.push(copiedInstructor);
        this.classes.push(copiedClass);
        this.length++;
        if (copiedInstructor == 0) {
            console.log(copiedInstructor);
            console.log(copiedClass);
        }

    },

    print: function() {
        for (let i = 0; i < this.length; i++) {
            console.log(this.instructors[i].name + ", " + this.classes[i].courseID);
        }
    },

    clear: function() {
        this.instructors = [];
        this.classes = [];
        this.length = 0;
    },

    remove: function(instructor, aClass) {
        for (let i = 0; i < this.length; i++) {
            if (this.instructors[i].name == instructor.name) {
                if (this.classes[i].courseID == aClass.courseID && this.classes[i].section == aClass.section) {
                    console.log(this.classes.splice(i, 1));
                    console.log(this.instructors.splice(i, 1));
                    this.length--;
                }
            }
        }
    }
}

classPriority = {
    classes: [],
    score: [],
    length: 0,

    clear: function() {
        this.classes = [];
        this.score = [];
        this.length = 0;
    },

    getScores: function() {
        return this.classes;
    },

    addScore: function(aClass) {
        let index = this.classes.indexOf(aClass);
        if (index == -1) {
            this.classes.push(aClass);
            this.score.push(1);
            this.length++;
        } else {
            this.score[index]++;
        }
    },

    print: function() {
        for (let i = 0; i < this.length; i++) {
            console.log(this.classes[i].courseID + ", " + this.classes[i].section + ", " + this.score[i]);
        }
    },

    max: function() {
        let max = Math.max(...this.score);
        return this.classes[this.score.indexOf(max)];
    },

    generatePriorities: function(classes, instructors) {
        for (let i = 0; i < classes.length; i++) {
            for (let j = i + 1; j < classes.length; j++) {
                if (isTimeColliding(classes[i], classes[j])) {
                    this.addScore(classes[i]);
                    this.addScore(classes[j]);
                }
            }
        }
        for (let i = 0; i < classes.length; i++) {
            for (let j = 0; j < instructors.length; j++) {
                if (!canTeach(classes[i], instructors[j])) {
                    this.addScore(classes[i]);
                }
            }
        }
        for (let i = 0; i < classes.length; i++) {
            if (!this.classes.includes(classes[i])) {
                this.classes.push(classes[i]);
                this.score.push(0);
                this.length++;
            }
        }
    },
}

score = {
    scores: [],

    retrieveInstructors: function() {
        let instructors = [];
        for (let i = 0; i < this.scores.length; i++) {
            instructors.push(this.scores[i].instructor);
        }
        return instructors;
    },

    //Returns 0 if there are no maxes to be had.
    max: function() {
        let max = -1;
        let target = 0;
        for (let i = 0; i < this.scores.length; i++) {
            if (this.scores[i].score >= max) {
                max = this.scores[i].score;
                target = this.scores[i].instructor;
            }
        }
        return target;
    },

    getScore: function(aClass, aInstructor) {
        // classes already taught weight
        let value1 = 0;
        if (aInstructor.currentClasses == 0) {
            value1 = 1;
        } else {
            value1 = aInstructor.currentClasses / aInstructor.classLimit;
        }
        // if time is taken by another class
        let value2 = false;

        if (aInstructor.meets.length == 0) {
            value2 = true;
        }
        else {
            for (let i = 0; i < aInstructor.meets.length; i++) {
                if (!isTimeColliding(aClass, aInstructor)) {
                    value2 = true;
                }
            }
        }

        //How many specialties match?
        let value3 = specialtyMatches(aClass, aInstructor);
        value3 /= aInstructor.specialties.length;

        let newScore = (value1 + value3) * value2;
        let classScore = {
            instructor: aInstructor,
            score: newScore,
        };
        score.add(classScore);
    },

    constructScores: function(aClass, relevantInstructors) {
        return newScores = relevantInstructors.map(a => score.getScore(aClass, a));
    },

    add: function(classScore) {
        this.scores.push(classScore);
    },

    clear: function() {
        this.scores = [];
    },

    print: function() {
        console.log(this.scores);
    }
}

function classFilter(aClass, chosen) {
    if ((aClass.courseID != chosen.courseID && aClass.section == chosen.section) || (aClass.courseID == chosen.courseID && aClass.section != chosen.section) || (aClass.courseID != chosen.courseID && aClass.section != chosen.section)) {
        return true;
    }
    else {
        return false;
    }
}


let stack = [];
let state = {
    classes: [...classList],
    instructors: [...instructors],
    pairer: pairer,
}

console.log(decide(state, stack));

function decide(state, stack) {
    score.clear();
    classPriority.clear();
    // depth++;
    // if(depth == 100000){
    //     return false;
    // }
    if (state.classes.length == 0) {
        pairer.print();
        return state.pairer;
    }
    else {
        //Get all possible options on this level
        classPriority.generatePriorities(state.classes, state.instructors);
        let chosenClass = classPriority.max();

        let relevantInstructors = getRelevantInstructors(chosenClass, state.instructors);
        //Bail if this is a dead timeline
        if (relevantInstructors.length == 0) {
            return false;
        }
        //Otherwise, for each possible option
        for (let i = 0; i < relevantInstructors.length; i++) {
            stack.push(JSON.parse(JSON.stringify(state)));
            state.pairer.pair(relevantInstructors[i], chosenClass);
            relevantInstructors[i].currentClasses++;
            relevantInstructors[i].meets.push(chosenClass.meets);
            state.instructors = state.instructors.filter(instructor => instructor.currentClasses < instructor.classLimit);
            state.classes = state.classes.filter(aClass => classFilter(aClass, chosenClass));
            return decide(state, stack);
            stack.pop();
        }
    }
}

//Continue on
// score.constructScores(chosenClass, relevantInstructors);
// let chosenInstructor = score.max();
// for(let i = 0; i < instructorList.length; i++){
//     if(instructorList[i].name == chosenInstructor.name){
//         instructorList[i].currentClasses++;
//         instructorList[i].meets.push(chosenClass.meets);
//     }
// }

function decideClass(decision, stack) {

}

function recurseClass(decision, stack) {

}

function decideInstructor(decision, stack) {

}

function recurseInstructor(decision, stack) {

}

//Returns true if all specialties match
// function specialtiesMatch(aClass, aInstructor){
//     let score = 0;
//     for(let i = 0; i < aClass.specialties.length; i++){
//         if(aInstructor.specialties.includes(aClass.specialties[i])){
//             score++;
//         }
//     }
//     if(score == aClass.specialties.length)
//     {
//         return true;
//     }else{
//         return false;
//     }
// }

//Returns true if even a single specialty matches
function canTeach(aClass, aInstructor) {
    for (let i = 0; i < aClass.specialties.length; i++) {
        if (aInstructor.specialties.includes(aClass.specialties[i])) {
            return true;
        }
    }
    return false;
}

//Returns how many specialties match
function specialtyMatches(matcher, matchAgainst) {
    let hitCount = 0;
    for (let z = 0; z < matchAgainst.specialties.length; z++) {
        if (matcher.specialties.includes(matchAgainst.specialties[z])) {
            hitCount++;
        }
    }
    return hitCount;
}

//Given a class, get all instructors that are able to teach for it
function getRelevantInstructors(aClass, instructorList) {
    let relevantInstructors = [];
    for (let i = 0; i < instructorList.length; i++) {
        if (canTeach(aClass, instructorList[i])) {
            relevantInstructors.push(instructorList[i]);
        }
    }
    return relevantInstructors;
}

function timeAdd(time, timeToAdd) {
    let hours = parseInt(timeToAdd / 60) * 100;
    let minutes = (timeToAdd % 60);
    time = time + hours;
    time = time + minutes;

    let nstring = String(time);
    if (nstring.substring(nstring.length - 2) == "60") {
        time += 100;
        time -= 60;
    }
    return time;
}

function isTimeColliding(object1, object2) {
    //If object 2 is an instructor, handle possible multiple meets
    if (object2.meets.length >= 1) {
        for (let i = 0; i < object2.meets.length; i++) {
            let day1 = object1.meets.substring(0, 5);
            let day2 = object2.meets[i].substring(0, 5);
            let dayMatch = false;

            for (let i = 0; i < day1.length; i++) {
                if (day1[i] == day2[i]) {
                    dayMatch = true;
                }
            }

            let timeMatch = false;
            let time1 = object1.meets.substring(5);
            time1 = parseInt(time1);

            let time2 = object2.meets[i].substring(5);
            time2 = parseInt(time2);
            if (time2 <= timeAdd(time1, classTime) && timeAdd(time2, classTime) >= time1) {
                //console.log(object1.name + ", " + object2.name + ", " + time2  + ", " + timeAdd(time1, classTime) + ", " + timeAdd(time1, classTime) + ", " + time2);
                timeMatch = true;

            } else {
                timeMatch = false;
            }

            if (dayMatch && timeMatch) {
                return true;
            }
        }
        return false;
    }
    else {
        let day1 = object1.meets.substring(0, 5);
        let day2 = object2.meets.substring(0, 5);
        let dayMatch = false;

        for (let i = 0; i < day1.length; i++) {
            if (day1[i] == day2[i]) {
                dayMatch = true;
            }
        }

        let timeMatch = false;
        let time1 = object1.meets.substring(5);
        time1 = parseInt(time1);

        let time2 = object2.meets.substring(5);
        time2 = parseInt(time2);
        if (time2 <= timeAdd(time1, classTime) && timeAdd(time2, classTime) >= time1) {
            //console.log(object1.name + ", " + object2.name + ", " + time2  + ", " + timeAdd(time1, classTime) + ", " + timeAdd(time1, classTime) + ", " + time2);
            timeMatch = true;

        } else {
            timeMatch = false;
        }

        return (dayMatch && timeMatch);
    }
}