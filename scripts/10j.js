const testButton = document.querySelector('.js-button');
if(testButton.classList.contains('js-button')) {
    console.log('The button has the class "js-button".');
} else {
    console.log('The button does not have the class "js-button".');
}

function toggleButton(selector){
    const toggleButton = document.querySelector(selector);

    if(toggleButton.classList.contains('is-toggled')){
        toggleButton.classList.remove('is-toggled');
    } else {
        turnOffPreviousButton();
        toggleButton.classList.add('is-toggled');
    }
   
}
function turnOffPreviousButton(){
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}