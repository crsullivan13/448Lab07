let validate = () => {
    let pass = document.getElementById("password").value;
    let val = document.getElementById("valPass").value;

    if(pass.length < 8)
    {
        alert("Password must be at least 8 characters!")
        return;
    }

    if(pass === val)
    {
        alert("Validation successful. Passwords match!")
    } else {
        alert("Validation failed. Passwords do not match.")
    }
}
