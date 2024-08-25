// asyncy function
import {logJSONData} from './api.mjs';
import { clickSearch } from './event.mjs';
let jsonData1
   
    
     document.addEventListener('DOMContentLoaded', async () => {
       jsonData1 = await logJSONData();
        console.log('Data fetched and returned:', jsonData1);
        loaddata(jsonData1)
   
   
});
function loaddata(jsonData)
{
   
    const breedSelect = document.getElementById('breedSelect');
    jsonData.forEach(breed => {
        console.log(breed);
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;  
    
        breedSelect.appendChild(option);
       } );
}
   
 
 
 
 document.getElementById("but-search").addEventListener('click', () =>{
     clickSearch(jsonData1);
    

 });
 // Gallary image functions

 
 
//  function showimg (img)
//  {
//      const img1 = document.createElement('img');
//      img1.src= img;
//      img1.id = "breed-image"
//      img1.alt = "breed-image"
//      img1.style.width= "400px";
//      img1.style.height="400px";
//      img1.style.display="block";
 
//      const existingimg = document.getElementById("breed-image");
//      if(existingimg){
//          existingimg.remove();
     
//      }
//      const catdiv = document.getElementById("cat-image")
//      catdiv.append(img1);
 
//  }
 
//  document.getElementById("breedSelect").addEventListener('click', () =>{
    
 
//  })
//  document.getElementById("but-search").addEventListener('click', () =>
//  {
//      const breedSelectID = document.getElementById('breedSelect');
//      console.log(breedSelectID.value);
//      //console.log(jsonData);
//      if(breedSelectID)
//      {
//          loadImage(breedSelectID.value)
//      }
//      else
//      {
//          alert ("please select a breed first");
//      }
 
//  });
//  function storeValue(jsonData)
//  {
//           actualData = jsonData;
//           console.log(actualData);
//  }
//  async function loadImage(breedID)
//  {
//      const breedData = actualData.find(breed => breed.id === breedID)
//      if(breedData && breedData.image && breedData.image.url)
//      {
//          showimg(breedData.img.url);
//          showdetails(breedData)
//      }
//      else
//      {
//          const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedID}`);
//          const imageData = await response.json();
 
//          if(imageData.length > 0)
//          {
//              showimg(imageData[0].url);
//              showdetails(breedData)
 
//          }
//          else
//          {
//            alert("No image availabe for the selected breed");
         
//          }
//      }
        
//  }
//  function showdetails(breedData)
//  {
//      const altname = document.getElementById("img-altname");
//      const desc = document.getElementById("img-desc");
//      altname.innerHTML = `Alternate Names: ${breedData.alt_names}`;
//      console.log(altname);
     
//      desc.innerHTML = `Description : ${breedData.description}`;
//      console.log(desc);
 
//  }
     