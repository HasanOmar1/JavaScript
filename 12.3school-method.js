const school = {
    teachers: [
    {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
    },
    {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
    },
    ],

    students: [
    {
        id: 10,
        name: "Jennifer",
        age: 20,
    },
    {
        id: 11,
        name: "Howard",
        age: 23,
    },
    {
        id: 12,
        name: "Old-Timmy",
        age: 86,
    },
    {
        id:13,
        name: "Houston",
        age: 21,
    },
    ],

    findPerson : function(type , id){
        let person;
        if (type === 'student'){
            person =  this.students.find(s => {
                return s.id === id;
            })
        }
        
        if (type === 'teacher'){
            person = this.teachers.find(t => {
                return t.id === id
            })
                
            }
            return person;
    },



   assignStudent : (studentId, subject) =>{

        const findPerson = school.students.find(student => student.id === studentId);
    
        console.log(findPerson)
        const teacher = school.teachers.find(teacher => {
            return teacher.subjects.includes(subject) && teacher.capacityLeft;})
        if(teacher){
            teacher.capacityLeft--;
            teacher.students.push(findPerson.name);
            return teacher;
        } else {
            console.log('Sorry, no available teachers left')
        }
    },
   


   assignTeachersSubject : function(id , subject){
    
   let teacher1 = this.findPerson('teacher' , id)
   if(teacher1.subjects.includes(subject) === false ){
    teacher1.subjects.push(subject)

   }
   },

   hello : function(name = 'Tom'){
    return `Hello ${name}!`
   }
    }


console.log(school.findPerson('student' , 11))

school.assignStudent(10, 'chemistry')
console.log(school.teachers)

school.assignTeachersSubject(1 , 'Music')
console.log(school.findPerson('teacher' , 1))

console.log(school.hello('Hasan'))

