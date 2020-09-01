import _ from 'lodash';
import printMe from "./print";

function compontent() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    // element.classList.add('hello')
    element.innerHTML = _.join(['你好！', 'JavaScript', '从入门到入土'], '');
    btn.innerHTML = "点我";
    btn.onclick = printMe;
    // let imgDom = new Image();
    // imgDom.src = img
    // element.appendChild(imgDom)
    element.appendChild(btn)
    return element
}

document.body.appendChild(compontent());