
const images = [
    {
      preview: 'https://media.istockphoto.com/id/157373207/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D1%96-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%96-%D0%BD%D0%B0-%D0%B3%D0%B0%D0%BB%D1%8C%D0%BA%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96-%D0%BF%D1%96%D0%B4-%D1%87%D0%B0%D1%81-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D1%83-%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg?s=612x612&w=0&k=20&c=7GZMPjEM4PoQvqahIGvmAT3HvaYJQAMHepuSzW7QL7o=',  
      original: 'https://media.istockphoto.com/id/157373207/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D1%96-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%96-%D0%BD%D0%B0-%D0%B3%D0%B0%D0%BB%D1%8C%D0%BA%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96-%D0%BF%D1%96%D0%B4-%D1%87%D0%B0%D1%81-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D1%83-%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg?s=612x612&w=0&k=20&c=7GZMPjEM4PoQvqahIGvmAT3HvaYJQAMHepuSzW7QL7o=', 
      description: 'Опис зображення 1',
    },
    {
      preview: 'https://s0.tchkcdn.com/g-49bK-ihki_h_sf4gLEKMHQ/17/261234/660x480/f/0/05d_2a99744_dyka_pryroda_bilka_ta_tulpan.jpg',
      original: 'https://s0.tchkcdn.com/g-49bK-ihki_h_sf4gLEKMHQ/17/261234/660x480/f/0/05d_2a99744_dyka_pryroda_bilka_ta_tulpan.jpg',
      description: 'Опис зображення 2',
    },
    {
      preview: 'https://hochu.ua/static/content/thumbs/780x468/d/08/cad6o4---c5x3x50px50p--834cb720f76193acdff471c5962db08d.jpg',
      original: 'https://hochu.ua/static/content/thumbs/780x468/d/08/cad6o4---c5x3x50px50p--834cb720f76193acdff471c5962db08d.jpg',
      description: 'Опис зображення 3',
    },
    {
      preview: 'https://www.purina.ru/sites/default/files/styles/ttt_image_510/public/2021-01/Yorkshire%20Terrier2.jpg?itok=gPlIljOh',
      original: 'https://www.purina.ru/sites/default/files/styles/ttt_image_510/public/2021-01/Yorkshire%20Terrier2.jpg?itok=gPlIljOh',
      description: 'Опис зображення 4',
    },
    {
      preview: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg',
      original: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg',
      description: 'Опис зображення 5',
    },
    {
      preview: 'https://cdn-us0.puzzlegarage.com/img/puzzle/10/4016_preview.v1.jpg',
      original: 'https://cdn-us0.puzzlegarage.com/img/puzzle/10/4016_preview.v1.jpg',
      description: 'Опис зображення 6',
    },
];
  
const galleryContainer = document.querySelector('.gallery');

images.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.dataset.original = original;

  galleryItem.appendChild(image);
  galleryContainer.appendChild(galleryItem);
});

galleryContainer.addEventListener('click', (event) => {
  const clickedImage = event.target;
  if (clickedImage.tagName === 'IMG') {
    const largeImageURL = clickedImage.dataset.original;
    console.log(largeImageURL); 

    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${clickedImage.alt}">
    `);
    instance.show();
  }
});

  

