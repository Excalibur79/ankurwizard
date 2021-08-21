const myFunction = (options) => {
  let images = document.querySelectorAll('.myBorders');
  if (options.shadowType === 'hard') options.shadowType = '0px';
  else options.shadowType = '15px';

  images.map((image) => {
    image.style.boxShadow = `10px 10px ${options.shadowType} 1px black`;
    if (options.padding) image.style.padding = '1em';
  });
};

export { myFunction };
