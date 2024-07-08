const cards = document.querySelector(".card-container");

cards.addEventListener('click', (e) => {
  switch(e.target.closest('.card').id) {
    case 'bronny':
      document.querySelector('#mainPage').style.display = 'none';
      document.querySelector('#firstArtist').style.display = 'block';
      console.log('bronny was clicked');
      break;
    case 'jeff':
      document.querySelector('#mainPage').style.display = 'none';
      document.querySelector('#secondArtist').style.display = 'block';
      console.log('jeff was clicked');
      break;
    case 'alice':
      document.querySelector('#mainPage').style.display = 'none';
      document.querySelector('#thirdArtist').style.display = 'block';
      console.log('alice was clicked');
      break;
    default:
      console.log("no image clicked");
  }
});

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('#firstArtist').style.display = 'none';
  document.querySelector('#secondArtist').style.display = 'none';
  document.querySelector('#thirdArtist').style.display = 'none';
  document.querySelector('#mainPage').style.display = 'block';
  console.log('close was clicked');
});