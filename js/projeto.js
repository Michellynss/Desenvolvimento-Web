/* Seleciona os quizzes do html */
let quizzes = document.querySelectorAll('.quiz');

/* Define o início do contador */
let startTime = null; 

/* Seleciona as alternativas ea funçã o de checar as respostas */
for (let quiz of quizzes) {
  let alternativas = quiz.querySelectorAll('li');
  for (let alternativa of alternativas) {
    alternativa.addEventListener('click', checador);
  }
}

/* Cria a função de checar as respostas */
function checador(event) {
  let alternativa = event.target;
  let quiz = alternativa.closest('.quiz');
  let resultado = quiz.querySelector('.resultado');
  let resposta = quiz.querySelector('.resposta');
  quiz.classList.add('inactive');
  let correto = alternativa.classList.contains('correto');
  alternativa.classList.add('clicked');
  
/* Mensagem se a alternativa estiver correta */
  if (correto) {
    resultado.style.color = '#000';
    resultado.textContent = 'Você acertou';

    /* Conta o tempo que demorou pra pessoa acertar */
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
  } 
    /* Mensagem se a resposta estiver errada */
  else {
    resultado.style.color = '#000';
    resultado.textContent = 'Você errou';
  }
  resposta.style.display = 'initial';}

/* Toca os audios e começa o contador */
function playAudio(audioId) {
  return function() {
    document.querySelector(audioId).play();
    startTime = new Date(); };
}

document.querySelector('.tecla_bang').onclick = playAudio('#som_tecla_bang');
document.querySelector('.tecla_lancinho').onclick = playAudio('#som_tecla_lancinho');
document.querySelector('.tecla_azul_mar').onclick = playAudio('#som_tecla_azul_mar');
document.querySelector('.tecla_devolva').onclick = playAudio('#som_tecla_devolva');
