function checkStrength() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (password.length < 5) {
        result.innerHTML = "Weak ❌";
        result.style.color = "red";
    } 
    else if (password.length < 8) {
        result.innerHTML = "Medium ⚠️";
        result.style.color = "orange";
    } 
    else {
        result.innerHTML = "Strong ✅";
        result.style.color = "green";
    }
}