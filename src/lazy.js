let reports

const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const loadImage = (entry) => {
    const container = entry.target
    const image = container.firstChild    
    const url = image.dataset.src    
    image.src = url            
    reports(0, 1)      
    observer.unobserve(container)
}

const intersection = (entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)    
}
const observer = new IntersectionObserver(intersection)

const count = () =>{
    let shown = 0
    let append = 0
    const counting = (appendImages, shownImages) =>{        
        shown += shownImages
        append += appendImages
        console.log('-------------------')
        console.log(`Imágenes agregadas: ${append}`)
        console.log(`Imágenes mostradas: ${shown}`)
        console.log('-------------------')
    }
    return counting        
}

export const registerImage = (image, appendImages) => {
    observer.observe(image)
    if(appendImages == 1){
        reports = count()
    }
    reports(1,0)            
}

