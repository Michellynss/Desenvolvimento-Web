let quizzes = document.querySelectorAll('.quiz');
let startTime = null; 

for (let quiz of quizzes) {
  let alternatives = quiz.querySelectorAll('li');

  for (let alternative of alternatives) {
    alternative.addEventListener('click', checkAnswer);
  }
}

function checkAnswer(event) {
  let alternative = event.target;
  let quiz = alternative.closest('.quiz');
  let result = quiz.querySelector('.result');
  let answer = quiz.querySelector('.answer');
  quiz.classList.add('inactive');
  let correct = alternative.classList.contains('correct');

  alternative.classList.add('clicked');

  if (correct) {
    result.style.color = '#000';
    result.textContent = 'Você acertou';

    if (startTime) {
      let endTime = new Date();
      let timeDiff = (endTime - startTime) / 1000;
      let timeDisplay = quiz.querySelector('.time');
      if (!timeDisplay) {
        timeDisplay = document.createElement('div');
        timeDisplay.className = 'time';
        quiz.appendChild(timeDisplay);
      }
      timeDisplay.textContent = `Você levou ${timeDiff.toFixed(2)} segundos para acertar`;
      startTime = null;
    }
  } else {
    result.style.color = '#000';
    result.textContent = 'Você errou';
  }

  answer.style.display = 'initial';
}

function playAudio(audioId) {
  return function() {
    document.querySelector(audioId).play();
    startTime = new Date(); 
  };
}

document.querySelector('.tecla_bang').onclick = playAudio('#som_tecla_bang');
document.querySelector('.tecla_lancinho').onclick = playAudio('#som_tecla_lancinho');
document.querySelector('.tecla_azul_mar').onclick = playAudio('#som_tecla_azul_mar');
document.querySelector('.tecla_devolva').onclick = playAudio('#som_tecla_devolva');

