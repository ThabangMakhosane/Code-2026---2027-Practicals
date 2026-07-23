function withdrawal(amount,balance){
    if (amount <= 0) {
        return "Invalid amount";
    }
    if (amount > balance) {
        return "Insufficient funds";
    }
    if (balance > amount){
        balance = balance - amount;
        return "Withdrawal successful: " + amount + ". New Balance: " + balance;

    }
    return "Withdrawal successful: " + amount;
}
amount = 500;
balance = 1000;
console.log(withdrawal(amount,balance));