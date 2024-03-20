alert("I, Thirupathi, Cordially Welcome You to My Personal Portfolio!")

let dps = ['UI/UX', 'Figma', 'Power BI', 'Python', 'Data Analysis'];
let dpContent = document.querySelector('.dp_content');
let blinky = document.querySelector('.blinker');
let currentIndex = 0;
displayContent();
function displayContent() {
    let word = dps[currentIndex];
    let index = 0;
    function displayLetter() {
        if (index < word.length) {
            dpContent.innerText = word.slice(0, index + 1);
            index++;
            setTimeout(displayLetter, 70);
        }
        else {
            setTimeout(() => eraseContent(dpContent), 1500);
        }
    }
    displayLetter();
}
function eraseContent(content) {
    let text = content.innerText;
    let index = text.length - 1;
    function eraseLetter() {
        if (index > 0) {
            text = text.slice(0, index);
            content.innerText = text;
            index--;
            setTimeout(eraseLetter, 70);
        }
        else {
            currentIndex = (currentIndex + 1) % dps.length;
            setTimeout(displayContent, 1);
        }
    }
    eraseLetter();
}
setTimeout(disappear, 100);
function appear() {
    blinky.innerText = "|";
    setTimeout(disappear, 300);
}
function disappear() {
    blinky.innerText = "";
    setTimeout(appear, 300);
}

let c1 = ["Premeditated", "Disciplined"];
let c2 = ["Problem-Solver", "Diligent"];
let c3 = ["Perfectionist", "Dedicated"];
let c4 = ["Logical Thinker", "Enthusiastic"];
let c5 = ["Tactical Strategist", "Self-Motivated"];
let c6 = ["Hard-Worker", "Committed"];
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0; let p5 = 0; let p6 = 0;
let op1 = 1; let op2 = 1; let op3 = 1; let op4 = 1; let op5 = 1; let op6 = 1;
setTimeout(func1, 2000);
function func1() {
    b1.style.opacity = op1;
    if (op1 > 0) { op1 -= 0.01; setTimeout(func1, 5); }
    else { p1 = (p1 + 1) % c1.length; b1.innerText = c1[p1]; setTimeout(disp1, 50); }
}
function disp1() {
    b1.style.opacity = op1;
    if (op1 < 1) { op1 += 0.01; setTimeout(disp1, 5); }
    else { setTimeout(func2, 50); }
}
function func2() {
    b2.style.opacity = op2;
    if (op2 > 0) { op2 -= 0.01; setTimeout(func2, 5); }
    else { p2 = (p2 + 1) % c2.length; b2.innerText = c2[p2]; setTimeout(disp2, 50); }
}
function disp2() {
    b2.style.opacity = op2;
    if (op2 < 1) { op2 += 0.01; setTimeout(disp2, 5); }
    else { setTimeout(func3, 50); }
}
function func3() {
    b3.style.opacity = op3;
    if (op3 > 0) { op3 -= 0.01; setTimeout(func3, 5); }
    else { p3 = (p3 + 1) % c3.length; b3.innerText = c3[p3]; setTimeout(disp3, 50); }
}
function disp3() {
    b3.style.opacity = op3;
    if (op3 < 1) { op3 += 0.01; setTimeout(disp3, 5); }
    else { setTimeout(func4, 50); }
}
function func4() {
    b4.style.opacity = op4;
    if (op4 > 0) { op4 -= 0.01; setTimeout(func4, 5); }
    else { p4 = (p4 + 1) % c4.length; b4.innerText = c4[p4]; setTimeout(disp4, 50); }
}
function disp4() {
    b4.style.opacity = op4;
    if (op4 < 1) { op4 += 0.01; setTimeout(disp4, 5); }
    else { setTimeout(func5, 50); }
}
function func5() {
    b5.style.opacity = op5;
    if (op5 > 0) { op5 -= 0.01; setTimeout(func5, 5); }
    else { p5 = (p5 + 1) % c5.length; b5.innerText = c5[p5]; setTimeout(disp5, 50); }
}
function disp5() {
    b5.style.opacity = op5;
    if (op5 < 1) { op5 += 0.01; setTimeout(disp5, 5); }
    else { setTimeout(func6, 50); }
}
function func6() {
    b6.style.opacity = op6;
    if (op6 > 0) { op6 -= 0.01; setTimeout(func6, 5); }
    else { p6 = (p6 + 1) % c6.length; b6.innerText = c6[p6]; setTimeout(disp6, 50); }
}
function disp6() {
    b6.style.opacity = op6;
    if (op6 < 1) { op6 += 0.01; setTimeout(disp6, 5); }
    else { setTimeout(func1, 50); }
}

let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
let i4 = document.getElementById("i4");
let i5 = document.getElementById("i5");
let i6 = document.getElementById("i6");
let w1 = 100; let w2 = 100; let w3 = 100; let w4 = 100; let w5 = 100; let w6 = 100;
setTimeout(wght1, 2000);
function wght1() {
    w1 = 1000;
    i1.style.fontWeight = w1;
    setTimeout(lght1, 499);
}
function lght1() {
    w1 = 100;
    i1.style.fontWeight = w1;
    setTimeout(wght2, 1);
}
function wght2() {
    w2 = 1000;
    i2.style.fontWeight = w2;
    setTimeout(lght2, 499);
}
function lght2() {
    w2 = 100;
    i2.style.fontWeight = w2;
    setTimeout(wght3, 1);
}
function wght3() {
    w3 = 1000;
    i3.style.fontWeight = w3;
    setTimeout(lght3, 499);
}
function lght3() {
    w3 = 100;
    i3.style.fontWeight = w3;
    setTimeout(wght4, 1);
}
function wght4() {
    w4 = 1000;
    i4.style.fontWeight = w4;
    setTimeout(lght4, 499);
}
function lght4() {
    w4 = 100;
    i4.style.fontWeight = w4;
    setTimeout(wght5, 1);
}
function wght5() {
    w5 = 1000;
    i5.style.fontWeight = w5;
    setTimeout(lght5, 499);
}
function lght5() {
    w5 = 100;
    i5.style.fontWeight = w5;
    setTimeout(wght6, 1);
}
function wght6() {
    w6 = 1000;
    i6.style.fontWeight = w6;
    setTimeout(lght6, 499);
}
function lght6() {
    w6 = 100;
    i6.style.fontWeight = w6;
    setTimeout(wght1, 1);
}

let i7 = document.getElementById("i7");
let i8 = document.getElementById("i8");
let i9 = document.getElementById("i9");
let i10 = document.getElementById("i10");
let w7 = 100; let w8 = 100; let w9 = 100; let w10 = 100;
setTimeout(wght7, 2000);
function wght7() {
    w7 = 1000;
    i7.style.fontWeight = w7;
    setTimeout(lght7, 499);
}
function lght7() {
    w7 = 100;
    i7.style.fontWeight = w7;
    setTimeout(wght8, 1);
}
function wght8() {
    w8 = 1000;
    i8.style.fontWeight = w8;
    setTimeout(lght8, 499);
}
function lght8() {
    w8 = 100;
    i8.style.fontWeight = w8;
    setTimeout(wght9, 1);
}
function wght9() {
    w9 = 1000;
    i9.style.fontWeight = w9;
    setTimeout(lght9, 499);
}
function lght9() {
    w9 = 100;
    i9.style.fontWeight = w9;
    setTimeout(wght10, 1);
}
function wght10() {
    w10 = 1000;
    i10.style.fontWeight = w10;
    setTimeout(lght10, 499);
}
function lght10() {
    w10 = 100;
    i10.style.fontWeight = w10;
    setTimeout(wght7, 1);
}


const r1 = document.getElementById('r1');
const h1 = document.getElementById('h1');
function repositionH1() {
    const r1Rect = r1.getBoundingClientRect();
    const wh = window.innerHeight;
        const hH = h1.clientHeight;
        if (r1Rect.top > wh / 2) {
            h1.style.position = 'absolute';
            h1.style.top = 0 + 'px';
        }
        else {
            if (r1Rect.bottom < (wh / 2 + hH)) {
                h1.style.position = 'absolute';
                h1.style.top = r1Rect.height - hH + 'px';
            }
            else {
                h1.style.position = 'absolute';
                h1.style.top = wh / 2 - r1Rect.top + 'px';
            }
        }
}
window.addEventListener('scroll', repositionH1);
repositionH1();
const r2 = document.getElementById('r2');
const h2 = document.getElementById('h2');
function repositionH2() {
    const r2Rect = r2.getBoundingClientRect();
    const wh = window.innerHeight;
        const hH = h2.clientHeight;
        if (r2Rect.top > wh / 2) {
            h2.style.position = 'absolute';
            h2.style.top = 0 + 'px';
        }
        else {
            if (r2Rect.bottom < (wh / 2 + hH)) {
                h2.style.position = 'absolute';
                h2.style.top = r2Rect.height - hH + 'px';
            }
            else {
                h2.style.position = 'absolute';
                h2.style.top = wh / 2 - r2Rect.top + 'px';
            }
        }
}
window.addEventListener('scroll', repositionH2);
repositionH2();
const r3 = document.getElementById('r3');
const h3 = document.getElementById('h3');
function repositionH3() {
    const r3Rect = r3.getBoundingClientRect();
    const wh = window.innerHeight;
    const hH = h3.clientHeight;
    if (r3Rect.top > wh / 2) {
        h3.style.position = 'absolute';
        h3.style.top = 0 + 'px';
    }
    else {
        if (r3Rect.bottom < (wh / 2 + hH)) {
            h3.style.position = 'absolute';
            h3.style.top = r3Rect.height - hH + 'px';
        }
        else {
            h3.style.position = 'absolute';
            h3.style.top = wh / 2 - r3Rect.top + 'px';
        }
    }
}
window.addEventListener('scroll', repositionH3);
repositionH3();
const r4 = document.getElementById('r4');
const h4 = document.getElementById('h4');
function repositionH4() {
    const r4Rect = r4.getBoundingClientRect();
    const wh = window.innerHeight;
    const hH = h4.clientHeight;
    if (r4Rect.top > wh / 2) {
        h4.style.position = 'absolute';
        h4.style.top = 0 + 'px';
    }
    else {
        if (r4Rect.bottom < (wh / 2 + hH)) {
            h4.style.position = 'absolute';
            h4.style.top = r4Rect.height - hH + 'px';
        }
        else {
            h4.style.position = 'absolute';
            h4.style.top = wh / 2 - r4Rect.top + 'px';
        }
    }
}
window.addEventListener('scroll', repositionH4);
repositionH4();
const r5 = document.getElementById('r5');
const h5 = document.getElementById('h5');
function repositionH5() {
    const r5Rect = r5.getBoundingClientRect();
    const wh = window.innerHeight;
    const hH = h5.clientHeight;
    if (r5Rect.top > wh / 2) {
        h5.style.position = 'absolute';
        h5.style.top = 0 + 'px';
    }
    else {
        if (r5Rect.bottom < (wh / 2 + hH)) {
            h5.style.position = 'absolute';
            h5.style.top = r5Rect.height - hH + 'px';
        }
        else {
            h5.style.position = 'absolute';
            h5.style.top = wh / 2 - r5Rect.top + 'px';
        }
    }
}
window.addEventListener('scroll', repositionH5);
repositionH5();
const r6 = document.getElementById('r1');
const h6 = document.getElementById('h1');
function repositionH6() {
    const r6Rect = r6.getBoundingClientRect();
    const wh = window.innerHeight;
    const hH = h1.clientHeight;
    if (r6Rect.top > wh / 2) {
        h6.style.position = 'absolute';
        h6.style.top = 0 + 'px';
    }
    else {
        if (r6Rect.bottom < (wh / 2 + hH)) {
            h6.style.position = 'absolute';
            h6.style.top = r6Rect.height - hH + 'px';
        }
        else {
            h6.style.position = 'absolute';
            h6.style.top = wh / 2 - r6Rect.top + 'px';
        }
    }
}

const ww = window.innerWidth;
console.log(ww);
