export async function addFavorite(imgId){
    console.log('hello world')


  const moreInfo = document.getElementById("AddingFunctionality")
  const paragraph = document.createElement('h2');
  const paragraph2 = document.createElement('h1');

    const url = 'https://api.thedogapi.com/v1/favourites';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'x-api-key': 'live_nZAI1f5WqFU4zSd8EkzI2YbGCsHQHlwRbyeQUxnH0VA12yCddcxmlzZ05aRDuJrC',
                    'Content-Type': 'application/json' 
                },
        body: JSON.stringify({
            image_id: 'E8dL1Pqpz'
        })
    });

    const result = await response.url;
    paragraph.innerText = result;
    paragraph2.innerText = 'The url that we are fetching the Post from';

    //moreInfo.appendChild('The url we are appending from ')
    moreInfo.appendChild(paragraph2)
    moreInfo.appendChild(paragraph)
//   var rawBody = JSON.stringify({ 
//     "image_id": "id-of-image-to-favourite",
//      });
    
    
//     const newFavourite = await fetch(
//     "https://api.thecatapi.com/v1/favourites&api_key=live_nZAI1f5WqFU4zSd8EkzI2YbGCsHQHlwRbyeQUxnH0VA12yCddcxmlzZ05aRDuJrC", 
//         {
//             method: 'POST',
//             headers: { 'x-api-key': 'live_nZAI1f5WqFU4zSd8EkzI2YbGCsHQHlwRbyeQUxnH0VA12yCddcxmlzZ05aRDuJrC'} ,
//             body: rawBody
//         }
//     ).then(response =>{
//     paragraph.innerHTML = 'Hope you like dogs :)   if so refresh to see quick slideshow of dogs';
//     moreInfo.appendChild(paragraph)
//     response.text()}
//  )
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));        
}