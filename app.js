const accord = document.getElementsByClassName('question-answer-container');
let currentActive = null;

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener('click', function() {
    
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      currentActive = null;
    } else {

      if (currentActive) {
        currentActive.classList.remove('active');
      }
      
      this.classList.add('active');
      currentActive = this;
    }
  });
}
