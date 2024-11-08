import { Carousel } from "bootstrap"

export function testing123(){

    const moreInfo = document.getElementById("AddingFunctionality")


    const dog = document.getElementById('dog');
    
    const heading1 = document.createElement('h1');
    heading1.textContent = "click dog image to see more dogs or refresh the page to see a fast slideshow of a few dogs"

    moreInfo.append(heading1)

    console.log(heading1)
    //heading1.textContent = 'Look at the slideshow of random dogs'
    dog.addEventListener("click", getNewDog);

    async function getNewDog() {
        dog.style.cursor = 'wait';
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const jsonData = await response.json();
        const url = jsonData.message;

        dog.src = url;
        dog.style.cursor = 'pointer';
        
    }

    for (let i = 0; i < 20; i++){
        getNewDog();
    }
}
