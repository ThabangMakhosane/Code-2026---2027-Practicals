let marks = [80, 90, 75, 85, 95];

function totalMarks(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;
}
calculateTotal = totalMarks(marks);
console.log(calculateTotal);