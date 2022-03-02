function Calculate() {
    let pennies = document.getElementById("Pennies").value

    let dollars = Math.floor(pennies/100)
    pennies %= 100
    let quarters = Math.floor(pennies/25)
    pennies %= 25
    let dimes = Math.floor(pennies/10)
    pennies %= 10
    let nickels = Math.floor(pennies/5)
    pennies %= 5
    
    document.getElementById("dollar").innerHTML = "Dollars: " + dollars
    document.getElementById("quarter").innerHTML = "Quarters: " + quarters
    document.getElementById("dime").innerHTML = "Dimes: " + dimes
    document.getElementById("nickel").innerHTML = "Nickels: " + nickels
    document.getElementById("penny").innerHTML = "Pennies: " + pennies
}

function Reset() {
    document.getElementById("dollar").innerHTML = "Dollars: "
    document.getElementById("quarter").innerHTML = "Quarters: "
    document.getElementById("dime").innerHTML = "Dimes: "
    document.getElementById("nickel").innerHTML = "Nickels: "
    document.getElementById("penny").innerHTML = "Pennies: "
}