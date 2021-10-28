const button = document.querySelector('#random');
const eyes = document.querySelectorAll('.color-block');
button.addEventListener('click', (event) => {
    for (let index = 0; index < eyes.length; index++) {
        eyes[index].style.transform = `translate(${setTranslateCSSA(eyes)[index]}px, ${
            setTranslateCSSB(eyes)[index]
        }%)`;
        console.log(eyes[index]);
    }
    console.log(`translate(${setTranslateCSSA(eyes)[0]}, ${setTranslateCSSB(eyes)[0]})`);
    console.log('test');
});

function setTranslateCSSA(data) {
    // Random number for a
    const numArray = [];
    data.forEach((el) => {
        numArray.push(Math.ceil(Math.random() * 18) * (Math.round(Math.random()) ? 1 : -1));
    });
    return numArray;
}

function setTranslateCSSB(data) {
    // Random number for b
    const numArray = [];
    data.forEach((el) => {
        numArray.push(Math.floor(Math.random() * 40) + 1);
    });
    return numArray;
}
