const accountID = 12345
let accountEmail = "manas@google.com"
var accountPassword = "1357"
accountCity = "Jaipur"

accountEmail = "mp@mp.com"
accountPassword = "121212"
accountCity = "Bhavnagar"

// const cannot be changed

/*
var doesn't work properly with scope so we use let 
*/

console.table(accountEmail, accountID, accountPassword)