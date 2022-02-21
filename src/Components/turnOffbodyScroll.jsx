// Turn off scrolling on body when modal is displayed
const turnOffBodyScrolling = (target) => {
    if (target === true){
        document.body.classList.add("bodyContent");
    }
    else if (target === false){
        document.body.classList.remove("bodyContent");
    }
}

export default turnOffBodyScrolling;