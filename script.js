const quizData = [
    {
        question: "O que é fake news?",
        a: "Notícias que não gostamos",
        b: "Notícias que são verdadeiras",
        c: "Notícias que são falsas ou enganosas",
        d: "Notícias sobre celebridades",
        correct: "c",
    },
    {
        question: "Qual é a principal plataforma onde as fake news são disseminadas?",
        a: "Jornais impressos",
        b: "Televisão",
        c: "Redes sociais",
        d: "Rádio",
        correct: "c",
    },
    {
        question: "Quem geralmente cria fake news?",
        a: "Jornalistas",
        b: "Professores",
        c: "Médicos",
        d: "Qualquer pessoa com acesso à internet",
        correct: "d",
    },
    {
        question: "Por que as pessoas compartilham fake news?",
        a: "Porque elas verificaram a informação",
        b: "Porque elas querem enganar outras pessoas",
        c: "Porque elas acreditam que a informação é verdadeira",
        d: "Porque elas são pagas para isso",
        correct: "c",
    },
    {
        question: "Como você pode verificar se uma notícia é verdadeira ou falsa?",
        a: "Perguntando a um amigo",
        b: "Compartilhando nas redes sociais para ver o que os outros pensam",
        c: "Verificando em sites de fact-checking",
        d: "Acreditando se a notícia está de acordo com suas crenças pessoais",
        correct: "c",
    },
    {
        question: "O que você deve fazer ao encontrar uma notícia falsa?",
        a: "Compartilhar com todos os seus amigos",
        b: "Ignorar a notícia",
        c: "Reportar a notícia como falsa",
        d: "Criar uma nova notícia falsa para combater a primeira",
        correct: "c",
    },
    {
        question: "Qual é o impacto das fake news na sociedade?",
        a: "Elas são inofensivas",
        b: "Elas podem causar confusão e desinformação",
        c: "Elas tornam as pessoas mais informadas",
        d: "Elas são benéficas para a sociedade",
        correct: "b",
    },
    {
        question: "As fake news podem influenciar as eleições?",
        a: "Não, as pessoas sempre verificam as informações antes de votar",
        b: "Sim, elas podem influenciar a opinião pública",
        c: "Não, as fake news são facilmente identificáveis",
        d: "Sim, mas apenas em pequena escala",
        correct: "b",
    },
    {
        question: "Qual é a melhor maneira de combater as fake news?",
        a: "Ignorando todas as notícias",
        b: "Compartilhando todas as notícias que você recebe",
        c: "Verificando a autenticidade das notícias antes de compartilhá-las",
        d: "Criando mais fake news",
        correct: "c",
    },
    {
        question: "As fake news são um problema recente?",
        a: "Sim, elas começaram com a internet",
        b: "Não, elas existem desde que as notícias começaram a ser publicadas",
        c: "Sim, elas começaram com as redes sociais",
        d: "Não, elas sempre existiram, mas se tornaram mais proeminentes com a internet",
        correct: "d",
    },
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            endQuiz();
        }
    }
});

function endQuiz() {
    const reloadBtn = document.createElement('button');
    reloadBtn.innerText = 'Recarregar';
    reloadBtn.onclick = () => location.reload();

    const container = document.querySelector('.container');
    container.appendChild(reloadBtn);

    submitBtn.style.display = 'none';

    questionEl.innerHTML = `
        <h2>Você respondeu corretamente ${score}/${quizData.length} perguntas</h2>
    `;

    const answerList = document.querySelector('.answer ul');
    if (answerList) {
        answerList.style.display = 'none';
    }
}

loadQuiz();
