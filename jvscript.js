function showMoreProducts() {
    const hiddenProducts = document.querySelectorAll('.hidden');

  document.addEventListener("DOMContentLoaded", function () {
    const hiddenProducts = document.querySelectorAll('.hidden');
    const showMoreBtn = document.getElementById('showMoreBtn');

    showMoreBtn.addEventListener('click', function () {
      hiddenProducts.forEach(product => {
        product.classList.toggle('hidden');
      });

      showMoreBtn.textContent = showMoreBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
    });
  });


}