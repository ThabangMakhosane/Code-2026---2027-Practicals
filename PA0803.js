function depositamount(balance,deposit){
    if(deposit <= 0){
        return "Invalid deposit amount";
    }
    if(deposit > 0 && deposit <= 10000){
        balance = balance + deposit;
        return "Deposit successful: " + deposit + ". New Balance: " + balance;
    }
    if (deposit > 10000){
    return "Deposit amount exceeds limit";
}
}
deposit= 1500;
balance = 1000;
console.log(depositamount(balance,deposit));