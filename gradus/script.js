
let gradus = document.getElementById('style-span') 
let style__gradus = document.querySelector('.style__gradus')

plusBtn()
function plusBtn() {
localStoreg()

    gradus.innerText ++
    if (gradus.innerText >= 25) {
        // gradus.innerText++
        style__gradus.style.backgroundColor = 'rgb(241, 97, 97)'
    }
}
minusBtn()
function minusBtn() {
localStoreg()

    gradus.innerText --
    if (gradus.innerText < 25) {
        // gradus.innerText--
        style__gradus.style.backgroundColor = 'rgb(97, 97, 241)'
    }
}
function localStoreg() {
    localStorage.setItem('count', JSON.stringify(gradus.innerText))
}