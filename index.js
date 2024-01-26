//initialize the news api parameter
let source = 'bbc-news';
let apikey = 'cd32b85c903c4725a15978713f7e8af0'

//grab the news container
let ListNewsAccordion = document.getElementById('ListNewsAccordion')

//create an ajax get reqest object
const xhr = new XMLHttpRequest

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true)


//what to do when reqst is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        
        let newshtml = ''
        articles.forEach(function (element, index) {

            let news =

                `<div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button btn btn-line  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                <strong>Breaking News ${index+1}:</strong> ${element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#ListNewsAccordion">
                         ${element["content"]} .<a href="${element["url"]}" target="_blank">Read More....</a>
            </div>
          </div>`
            newshtml += news;
        });
        ListNewsAccordion.innerHTML = newshtml
    }
    else {
        console.log("Something is error please cheack out")
    }
}
xhr.send()

