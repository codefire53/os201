$(document).ready(function() {
    var bod=document.getElementById("bod");
    bod.innerHTML='<img src="https://i.kym-cdn.com/entries/icons/original/000/032/100/cover4.jpg" alt="Loading">'
   fetch('https://meme-api.herokuapp.com/gimme')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    bod.innerHTML=`<img class="img-responsive" src=${data.url} alt="Image not found">`;
    console.log(bod.innerHTML);
    
  });
  
})
 