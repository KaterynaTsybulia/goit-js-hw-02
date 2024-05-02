// Задача 3. Перевірка спаму


function checkForSpam(message) {
    const messageA = message.toLowerCase();
    const messageSpam = messageA.includes("spam");
    const messageSale = messageA.includes("sale");

    if (messageSpam || messageSale) {
        return true; 
    } else {
        return false;
    }

}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true