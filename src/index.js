import { registerImage } from './lazy'

const baseUrl = 'https://randomfox.ca/images/'
const appNode = document.querySelector('#images')
//buttonAdd.addEventListener('click', addImage)

document.querySelector('#utils').addEventListener('click', (event)=>{
    if(event.target.nodeName === 'BUTTON'){
        switch(event.target.id){
            case 'buttonAdd':
                addImage()
                break
            case 'buttonClear':
                clearAll()
                break
        }
    }
})


function clearAll(){
    appNode.innerHTML = "";
}

function addImage() {
    //Create image container
    const container = document.createElement('div')
    container.className = 'p-4'        
    //Create image
    const image = document.createElement('img')
    image.width = '320'
    image.height = '350'
    image.style.backgroundColor = '#000'
    const number = random(122, 1)
    image.dataset.src = `${baseUrl}${number}.jpg`
    image.className = 'mx-auto'

    //Add image into image container
    container.appendChild(image)
    appNode.appendChild(container)    
    registerImage(container, appNode.childElementCount)
}

const random = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
