const myPicture = ["pic01.png", "pic02.png", "pic03.png", "pic04.png", "pic05.png", "pic06.png"]
const pictureHost = 'img'

let section = document.getElementById('small')
myPicture.forEach(v => {
    let newDiv = document.createElement('div');
    section.append(newDiv);
    let newImg = document.createElement('img');

    newDiv.append(newImg);
    newImg.setAttribute('src', `${pictureHost}/${v}`);
    newImg.setAttribute('width', '100%');
})

let smallSection = document.getElementById('small')

// делегирование///////////////////////////////////
let bigImage = document.getElementById('big_image')

smallSection.addEventListener('click', function (e) {
    let element = e.target;
// убираем img из большого поля
    let elementOn = document.getElementById('on')
    if (elementOn) elementOn.remove();
// делаем опять все серым перебирая все img
    let imgFilter = document.querySelectorAll('img');
    console.log(imgFilter);
    imgFilter.forEach(i => {
        i.style.filter = 'grayscale(90%)';
        console.log(i)
    })
   
    if (element.localName == 'img') {
        element.style.filter = 'none';//делаем img яркой
        let newPic = element.cloneNode();
        newPic.style.width = '68%';
        newPic.id = 'on'; //добавляем id по которому потом удалим

        bigImage.append(newPic);// добавляем в большое поле
        console.log()
    }
    console.dir(element);
})


// //////////////////////////////////
// метод перебора
// let bigImage = document.getElementById('big_image')

// let listDiv = document.querySelectorAll('img')
// listDiv.forEach(pic => {
//     pic.addEventListener('click', function () {
//         pic.style.filter = 'none';
//         let newPic = pic.cloneNode();
//         console.log(newPic.style.width);
//         newPic.style.width = '68%';
//         bigImage.append(newPic);
//     })
// })


