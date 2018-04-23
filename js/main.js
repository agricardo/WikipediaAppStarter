// grab elements
const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'


const searchTerm = document.querySelector('.searchTerm')
const searchButton = document.querySelector('.search')
const randomButton = document.querySelector('.random')
const output = document.querySelector('.output')



//define functions
function ajaxSearch() {
    const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
    $.ajax({
        url: api_url,
        dataType: 'json',
        success: (data) => {
            console.log(data)
            //data[1]is the title
            //data[2]is the description
            //data[3]is the link
            for (var i = 0; i < data[1].length; i++) {
                output.innerHTML += `
            <li class="item"> 
            <a href="${data[3][i]}">${data[1][i]}</a>
            <p>${data[2][1]}</p>
            </li>
            `
            }
        },
        error: (error) => {
            console.log("There was an error")
        }
    })
}



//call functions
searchButton.addEventListener('click', ajaxSearch)
randomButton.addEventListener('click', function(){
    window.open(`${wiki_link}${randomEndpoint}`)
})

