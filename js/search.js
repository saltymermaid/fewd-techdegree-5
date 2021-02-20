function search() {
  let search = document.querySelector('#search-box').value;
  const allCaptions = document.querySelectorAll('a');
  search = search.toLowerCase();

  for (i = 0; i < allCaptions.length; i++) {  
    if (allCaptions[i].attributes[1].nodeValue.toLowerCase().includes(search)) { 
      allCaptions[i].style.display="initial"; 
    } 
    else { 
      allCaptions[i].style.display="none";                  
    } 
  } 
}