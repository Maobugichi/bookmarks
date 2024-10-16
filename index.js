const change = document.querySelectorAll(".switch")
const header = document.querySelector(".change-head")
const para = document.querySelector(".change-para")
const img = document.querySelector(".change-img")
const faq = document.querySelectorAll(".faq")
const cavet = document.querySelectorAll(".cavet")
const pad = document.querySelector(".pad")
const menu = document.querySelector(".menu")
const side = document.querySelector(".side")
const close = document.querySelector(".close")
const form = document.querySelector("form")
const input = document.querySelector("input")
const err = document.querySelector(".err-message")
const sign = document.querySelector(".err")
let prev = null


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    for (let [key,value] of formData.entries()) {
        if (value == "" || !value.includes("@") || !value.includes(".com")) {
            input.classList.add('border-2', 'border-softRed')
            form.classList.remove("gap-3")
            form.classList.add("gap-10")
            err.classList.remove("hidden")
            sign.classList.remove("hidden")
        } else {
            input.classList.remove('border-2', 'border-softRed')
            err.classList.add("hidden")
            form.classList.remove("gap-10")
            form.classList.add("gap-3")
            sign.classList.add("hidden")
        }
        
    }
})

change.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("xl:border-b-2", "xl:border-softRed")
        if (prev) {
            prev.classList.remove("xl:border-b-2", "xl:border-softRed")
        }
        prev = item
        try {
            fetch('./data.json')
            .then(response => {
               if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }
                 return response.json()
            }).then(data => {
                console.log(img.src)
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
                        //console.log(img.src)
                        console.log(feature.src)
                    } 
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
    let down = false
    item.addEventListener("click", () => {
      faq[index].classList.toggle('hidden');
      faq[index].classList.toggle("animate-heightAnimation");
      item.style.transition = "transform 0.5s ease-in-out"
      cavet[index].style.transform = down ?  "rotate(0deg)" : "rotate(180deg)"   
       down = !down
    })
})

   
menu.addEventListener("click", () => {
    side.classList.add("animate-down")
})

close.addEventListener("click", () => {
    side.classList.add("animate-up")
    setTimeout(() => {
        side.classList.remove("animate-down")
        side.classList.remove("animate-up")
    }, 1000)
})


