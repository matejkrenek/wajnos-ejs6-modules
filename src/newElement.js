class Element {

    constructor(element, className){
        this.element = element
        this.className = className
    }

    createElement(){
        const elementContainer = document.createElement(this.element)
        elementContainer.classList.add(this.className)

        return elementContainer
    }
}

export {
    Element
}