let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+[0-9]{0,}$|^[a-z][0-9]{2,}$/i; // Change this line
let result = userCheck.test(username);