function playString(val) {
    var audio = new Audio('./strings/' + val +'.mp3');
    audio.play();
}

function keyBoard(evt){

    switch (evt) {
        case 65:
            var audio = new Audio('./strings/E.mp3');
            audio.play();
            break;
        case 83:
            var audio = new Audio('./strings/A.mp3');
            audio.play();
            break;
        case 68:
            var audio = new Audio('./strings/D.mp3');
            audio.play();
            break;
        case 70:
            var audio = new Audio('./strings/G.mp3');
            audio.play();
            break;
        case 71:
            var audio = new Audio('./strings/B.mp3');
            audio.play();
            break;
        case 72:
            var audio = new Audio('./strings/Em.mp3');
            audio.play();
            break;
    }
}

 document.onkeydown = function(evt) {
     evt = evt || window.event;
     keyBoard(evt.keyCode);
 };