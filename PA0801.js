function getwithdrawal(amount) {
    if (amount < 0) {
        return "Invalid amount";
    }
    if (amount > 1000) {
        return "Amount exceeds limit";
    }
    return "Withdrawal successful: " + amount;
}
let amount = 500;
console.log(getwithdrawal(amount));