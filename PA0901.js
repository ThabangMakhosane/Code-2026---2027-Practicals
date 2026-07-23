let marks = [80, 90, 75, 85, 95];
for (let i = 0; i < marks.length; i++){
    if (0 <=marks[i] && marks[i] <= 29)
        console.log("You have obtained level 1, you have failed");
    else if (30 <= marks[i] && marks[i] <= 39)
        console.log("You have obtained level 2, you have failed");
    else if (40 <= marks[i] && marks[i] <= 49)
        console.log("You have obtained level 3, you have failed");
    else if (50 <= marks[i] && marks[i] <= 59)
        console.log("You have obtained level 4, you have Passed");
    else if (60 <= marks[i] && marks[i] <= 69)
        console.log("You have obtained level 5, you have Passed");
    else if (70 <= marks[i] && marks[i] <= 79)
        console.log("You have obtained level 6, you have Passed");
    else
        console.log("You have obtained level 7, you have a distinction");
}