let change = () => {
    let bordRed = document.getElementById("red").value;
    let bordGrn = document.getElementById("green").value;
    let bordBlue = document.getElementById("blue").value;
    let bordWidth = document.getElementById("width").value;

    console.log(bordWidth);

    let backRed = document.getElementById("redBack").value;
    let backGreen = document.getElementById("greenBack").value;
    let backBlue = document.getElementById("blueBack").value;

    let paraTag = document.getElementById("styleMe");

    paraTag.style.border = bordWidth + "px solid rgb(" + bordRed + "," + bordGrn + "," + bordBlue + ")";
    paraTag.style.backgroundColor = "rgb(" + backRed + "," + backGreen + "," + backBlue + ")";
}