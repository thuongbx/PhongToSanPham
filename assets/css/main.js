var colorsList = document.querySelectorAll('.product>.colors>img');
for (var i = 0; i < colorsList.length; i++) {
    colorsList[i].onmousover = function() {
        mainImg.src = document.querySelector('.mainpictrure');
    }
}