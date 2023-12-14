function showPopUp() {
    var visible = document.getElementById('popup').style.visibility;
    if (visible == 'hidden') {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }

}