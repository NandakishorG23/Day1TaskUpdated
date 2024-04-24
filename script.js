
document.getElementById("calculateBtn").addEventListener("click", function() {
    calculateFactorial();
});

function calculateFactorial() {
   
    var num = document.getElementById("factorialInput").value;
    var result = 1;
    for (var i = 1; i <= num; i++) {  
        result *= i;
    }

    document.getElementById("result").innerText = "Factorial of " + num + " is: " + result;
}
