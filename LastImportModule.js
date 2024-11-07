import { Carousel } from "bootstrap"

export function testing123(){

    const moreInfo = document.getElementById("AddingFunctionality")


    const dog = document.getElementById('dog');
    
    const heading1 = document.createElement('h1');
    heading1.textContent = "Refresh to see more dogs without choosing a breed or click dog image to see more dogs"

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

    for (let i = 0; i < 10; i++){
        getNewDog();
    }
    
    
   // moreInfo.append(dogInfo)
}
