import {logJSONDataGallary} from './api.mjs';




document.addEventListener('DOMContentLoaded', async () => {
   
    loadnoofimages(20);

});
function loadnoofimages(i)
{   
   const noofimg = document.getElementById("no-of-image");
   for (let j = 1; j <= i; j++) {  // Using a for loop to iterate from 1 to the value of i
    console.log(j);
       console.log(i);
      
       const option = document.createElement('option');
       option.value = j
       option.textContent = j;
   
       noofimg.appendChild(option);
      } 


}

const selectElement = document.getElementById("no-of-image");
selectElement.addEventListener('change', (event) => {
    const selectedvalue = event.target.value
    console.log(selectedvalue) 
    const ImgJSONData = logJSONDataGallary(selectedvalue);
    console.log(ImgJSONData);
    loadcaraousel(ImgJSONData);
});
let images1 = []
let currentIndex = 0;
// carassole
async function  loadcaraousel(images)
{
    console.log(images);
    images1 = await images;
    const carouselInner = document.getElementById('carousel-inner');

        images1.forEach((imageData, index) => {
        const img = document.createElement('img');
        img.src = imageData.url;
        img.alt = `Cat Image ${index + 1}`;
        carouselInner.appendChild(img);
    });
}


    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images1.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images1.length) % images1.length;
        updateCarousel();
    });

    function updateCarousel() {
        const carouselInner = document.getElementById('carousel-inner');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
