let index = 1;
showImg(index);

function plusDiv(n) {
    showImg(index += n);
}

function showImg(n) {
    let imgs = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];
    if ( n > imgs.length ) {index = 1}
    if ( n < 1 ) {index = imgs.length}
    document.getElementById("myImg").src = imgs[index - 1];
}