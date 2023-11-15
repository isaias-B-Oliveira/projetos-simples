const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming \n HTML \n css \n javascript'
let idx = 1
let speed = 200 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
  
    idx++

    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
};


