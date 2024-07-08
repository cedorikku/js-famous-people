const cards = document.querySelector(".card-container");

cards.addEventListener('click', (e) => {
  switch(e.target.id) {
    case 'bronny':
      // open bronny popup
      console.log('bronny was clicked');
      break;
    case 'jeff':
      // open jeff popup
      console.log('jeff was clicked');
      break;
    case 'alice':
      // open alice popup
      console.log('alice was clicked');
      break;
    default:
      console.log("no image clicked");
  }
});