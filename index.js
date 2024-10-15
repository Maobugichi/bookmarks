const change = document.querySelectorAll(".switch")
const header = document.querySelector(".change-head")
const para = document.querySelector(".change-para")
const img = document.querySelector(".change-img")
const faq = document.querySelectorAll(".faq")
const cavet = document.querySelectorAll(".cavet")
const pad = document.querySelector(".pad")
console.log(faq)

change.forEach(item => {
    item.addEventListener("click", () => {
        try {
            fetch('/data.json')
            .then(response => {
               if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }
                //console.log(response.text())
                 return response.json()
            }).then(data => {
                console.log(img.src)
                 console.log(data.features)
                 data.features.forEach(feature => {
                    if (feature.title.includes("Click") && item.innerText.includes("Simple")){
                        header.innerText = feature.title   
                        para.innerText = feature.description
                        img.src = feature.src
                        
                    }
                        else if (feature.title.includes("Search") && item.innerText.includes("Search")) {
                        header.innerText = feature.title   
                        para.innerText = feature.description
                        img.setAttribute("src",feature.src)
                        
                    } else if (feature.title.includes("Shar") && item.innerText.includes("Shar")){
                        header.innerText = feature.title   
                        para.innerText = feature.description
                        img.src = feature.src
                    } 
                    //console.log(feature.title.includes("Search"))
                 })
            }).catch(error => {
                console.error('Error fetching or parsing data:', error);
            });
          } catch (err) {
              console.log(err)
          }
    })
})


cavet.forEach((item,index) => {
    item.addEventListener("click", () => {
       
        faq[index].classList.toggle('hidden');
        faq[index].classList.toggle("animate-heightAnimation");
        
        //pad.classList.toggle("animate-heightAnimation");
        //console.log(pad);
    
    

    })
})

   



