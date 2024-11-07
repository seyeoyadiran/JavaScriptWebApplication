import * as Carousel from "./Carousel.js";
import axios from "axios";
import { testing123 } from "./LastImportModule.js";


// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_nZAI1f5WqFU4zSd8EkzI2YbGCsHQHlwRbyeQUxnH0VA12yCddcxmlzZ05aRDuJrC";

//Using Fetch API to populate data
async function initialLoad(){
    try{
      const response = await fetch('https://api.thedogapi.com/v1/breeds')
      if (!response.ok) throw new Error('Breed not found')

        console.log(response)
      const breeds = await response.json();
      const breedSelect = document.getElementById('breedSelect');

      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      breedSelect.addEventListener('change', breedSelectionHandler);
  
    }
    catch(e)
    {
      console.log('error')
    }
}
initialLoad();


//Async Await
async function breedSelectionHandler(e){
  try {

      Carousel.clear();
    
    //const cat = document.getElementById('cat');
    //let carousel = document.getElementById('carouselInner')
    //const infoDump = document.getElementById('infoDump')
    const breedId = breedSelect.value;


    const headers = new Headers({
      "Content-Type": "application/json",
       'x-api-key': 'live_qpcWOQBtvxeDe2PFxvWBf3wOmRGMtPEFIUmeprV7DP8RKIkE94GNBjfrCyyFf93o'
    }) 

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };
  //Async Await
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&limit=10`, requestOptions);

        if(!response.ok) throw Error(' Not working')
        const images = await response.json();
        //console.log(response)

        ///carousel.innerHTML = '';
        infoDump.innerHTML = '';


        //User interaction showing the dogs pictures in a gallery carousel way
        images.forEach(imageInfo => {
          const imageElement = document.createElement('img');
          imageElement.src = imageInfo.url
          imageElement.alt = 'Picture of a Dog';
          const imgUrl = imageInfo.url;
          const imgId = imageInfo.id; 
          const imgAlt = `Dog image ${imgId}`
          
          const carouselElement = Carousel.createCarouselItem(imgUrl, imgAlt, imgId); 
          Carousel.appendCarousel(carouselElement); 
          Carousel.start();

         // imageElement.classList.add('carousel-item')
         // carousel.appendChild(imageElement)
        });

  }
  catch(e){
    console.log(error)
  }
}

//Last Imported Functions
testing123();