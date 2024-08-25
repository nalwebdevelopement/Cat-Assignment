


export function clickSearch(jsonData1)
{
     {
         const breedSelectID = document.getElementById('breedSelect');
         console.log(breedSelectID.value);
         //console.log(jsonData);
         if(breedSelectID)
         {
             loadImage(breedSelectID.value, jsonData1)
         }
         else
         {
             alert ("please select a breed first");
         }
     
     }
    }
   
     async function loadImage(breedID,jsonData1)
     {
         const breedData = jsonData1.find(breed => breed.id === breedID)
         if(breedData && breedData.image && breedData.image.url)
         {
             showimg(breedData.img.url);
             showdetails(breedData)
         }
         else
         {
             const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedID}`);
             const imageData = await response.json();
     
             if(imageData.length > 0)
             {
                 showimg(imageData[0].url);
                 showdetails(breedData)
     
             }
             else
             {
               alert("No image availabe for the selected breed");
             
             }
         }
            
     }

     function showimg (img)
 {
     const img1 = document.createElement('img');
     img1.src= img;
     img1.id = "breed-image"
     img1.alt = "breed-image"
     img1.style.width= "400px";
     img1.style.height="400px";
     img1.style.display="block";
 
     const existingimg = document.getElementById("breed-image");
     if(existingimg){
         existingimg.remove();
     
     }
     const catdiv = document.getElementById("cat-image")
     catdiv.append(img1);
    }

    function showdetails(breedData)
 {
     const altname = document.getElementById("img-altname");
     const desc = document.getElementById("img-desc");
     altname.innerHTML = `Alternate Names: ${breedData.alt_names}`;
     console.log(altname);
     
     desc.innerHTML = `Description : ${breedData.description}`;
     console.log(desc);
 
 }