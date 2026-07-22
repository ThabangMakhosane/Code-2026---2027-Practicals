let student1 = {
    name: "Thabang",
    age: 25,
    course: "Cybersecurity",        
}
let student2 = {
    name: "Siyabonga",
    age: 30,    
    course: "Software Development",
}
let student3 = {
    name: "Thandi",
    age: 28,
    course: "Data Science",
}
let students = [student1, student2, student3];
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}