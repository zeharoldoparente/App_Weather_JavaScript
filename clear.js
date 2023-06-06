const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
   // Limpar o campo de input
   const input = document.querySelector('.search-box input');
   input.value = '';

   // Resetar o estilo
   container.style.height = '';
   weatherBox.style.display = '';
   weatherDetails.style.display = '';
   error404.style.display = '';
   error404.classList.remove('fadeIn');

   // Remover as classes fadeIn
   weatherBox.classList.remove('fadeIn');
   weatherDetails.classList.remove('fadeIn');

   // Remover as imagens e texto
   const image = document.querySelector('.weather-box img');
   const temperature = document.querySelector('.weather-box .temperature');
   const description = document.querySelector('.weather-box .description');
   const humidity = document.querySelector('.weather-details .humidity span');
   const wind = document.querySelector('.weather-details .wind span');

   image.src = '';
   temperature.innerHTML = '';
   description.innerHTML = '';
   humidity.innerHTML = '';
   wind.innerHTML = '';
});
