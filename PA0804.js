function bankcharge(deposit){
    if(deposit > 0){
        let bankcharge =  deposit * 0.02
        return "Total amount after bank charge: " + (deposit - bankcharge);
    }
    if(deposit < 0){
        return "Invalid deposit amount. Please enter a positive value.";
    }
    return "No bank charge applicable.";
}
deposit = 1500;
console.log(bankcharge(deposit));