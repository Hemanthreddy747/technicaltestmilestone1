 
        let currentIndex = 0;

        function showSlide(index) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        document.querySelector('.arrow-left').addEventListener('click', prevSlide);
        document.querySelector('.arrow-right').addEventListener('click', nextSlide);

        // Auto slide change example
        setInterval(() => {
            nextSlide();
        }, 8000); // Change slide every 5 seconds

        // Enable video controls on user interaction
        document.querySelectorAll('.preview').forEach(video => {
            video.addEventListener('click', () => {
                video.controls = true;
                video.loop = false;
                video.muted = false;
                video.play();
            });
        });

 
    $('.expand-button').on('click', function(){
  $('.special-text').toggleClass('-expanded');
  
  if ($('.special-text').hasClass('-expanded')) {
    $('.expand-button').html('-');
  } else {
    $('.expand-button').html('+');
  }
});
 
   
