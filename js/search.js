function handleSearch() {
  let search = document.querySelector('#search').value;
  search = search.toLowerCase();
  const allCaptions = document.querySelectorAll('a');

  allCaptions.forEach(caption => {
    if (caption.attributes[1].nodeValue.toLowerCase().includes(search)) { 
      caption.style.display="initial"; 
    } 
    else { 
      caption.style.display="none";                  
    } 
  })
}

search.addEventListener('keyup', handleSearch);