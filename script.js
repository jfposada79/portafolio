var messageArray = ['FullStack Developer.'];
var textPosition = 0;
var speed = 60;

typewriter = () => {
    document.querySelector('#message').innerHTML = 
    messageArray[0].substring(0, textPosition) + "<p>|</p>";

    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener('load', typewriter);