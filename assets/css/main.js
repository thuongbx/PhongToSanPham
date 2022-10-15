var colorsList = document.querySelectorAll('.product>.colors>img');
for (var i = 0; i < colorsList.length; i++) {
    colorsList[i].onmouseover = function() {
        var mainImg = document.querySelector('.product>.mainpicture');
        mainImg.src = this.src;
    }
}