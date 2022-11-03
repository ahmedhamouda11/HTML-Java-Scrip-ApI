
var nav =document.getElementById('nav')
window.addEventListener('scroll', function(e){
    
    if (window.scrollY>0){
        nav.style.top = '0px'
        nav.style.backgroundColor = ''
        nav.style.width = '100%'
    }
    else if(window.scrollY==0){
        nav.style.opacity = '1'
        nav.style.top = '10'
        nav.style.backgroundColor = 'red'
        nav.style.width = '100%'
    }
})
var myHttp =new XMLHttpRequest()
var allItems = []
myHttp.open('GET',`https://dummyjson.com/products`)
myHttp.send()
myHttp.addEventListener('readystatechange',function()
{
    if (myHttp.readyState == 4 && myHttp.status == 200) 
    {
        allItems = JSON.parse(myHttp.response).products;
        displayProducts()

    }
})
function displayProducts()
{
    var carton = ``;
    for(var i =0 ; i<allItems.length ;i++)
    {
        carton += `<div class="col-md-4">
        <div class="items">
            <img class="w-100" src="${allItems[i].thumbnail}" alt="">
            <h1>${allItems[i].title}</h1>
            <p class="text-muted">${allItems[i].description}</p>
            <a class ='btn btn-outline-info btn-sm my-5' href='${allItems[i].thumbnail}'>Show More</a>
        </div>
    </div>`
    }
    
    document.getElementById('rowData').innerHTML = carton
}
