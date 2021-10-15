const quizHolder = document.getElementById('quiz');
const quizSize = 2;

const filterByType = (questions, type) => {
    return questions.filter((quest) => {
        if (quest.type == type) {
            return quest;
        }
    });
};

const filterByChallenge = (questions, challenge) => {
    return questions.filter((quest) => {
        if (quest.challenge == challenge) {
            return quest;
        }
    });
};

const fetchIsCompletedInfo = (questions) => {
    const user = USERS[0];
    const alreadyAnswered = user.completedQuizzes.questionsAnswered;
    let answeredQuestionsIds = [];

    for (let i = 0; i < alreadyAnswered.length; i++) {
        answeredQuestionsIds.push(alreadyAnswered[i].id);
    }

    for (let i = 0; i < questions.length; i++) {
        if (answeredQuestionsIds.indexOf(questions[i].id) > -1) {
            questions[i]["completed"] = true;
            continue;
        }

        questions[i]["completed"] = false;
    }

    return questions;
};

const filterAlreadyDoneQuestions = (questions) => {
    const questionsWithCompleteInformation = fetchIsCompletedInfo(questions);
    return questions.reduce((acc, cur) => {
        cur.completed ? acc.alreadyDone.push(cur) : acc.neverDone.push(cur);
        return acc;
    }, { alreadyDone: [], neverDone: [] });
};

const orderByPriority = (questions) => {
    return questions.sort(function (a, b) {
        if (a.priority > b.priority) {
            return -1;
        }
        if (a.priority < b.priority) {
            return 1;
        }

        return 0;
    });
};

const fillQuestionsArray = (preSelected, questions) => {
    for (let i = 0; i < questions.length; i++) {
        if (preSelected.length >= quizSize) {
            break;
        }
        preSelected.push(questions[i]);
    }

    return preSelected;
};

const fetchQuestions = (type, challenge) => {
    const quests = type ? filterByType(QUESTIONS, type) : QUESTIONS;
    const leveledQuests = challenge ? filterByChallenge(quests, challenge) : quests;
    const { neverDone, alreadyDone } = filterAlreadyDoneQuestions(leveledQuests);
    const firstChoices = orderByPriority(neverDone);
    const seccondChoices = orderByPriority(alreadyDone);

    let questions = fillQuestionsArray([], firstChoices);
    questions = fillQuestionsArray(questions, seccondChoices);
    return questions;
};

const checkResult = (question, answer) => {
    if (question.correctAnswersIndex.indexOf(answer) > -1) {
        // incrementUserHits();
        // addAnsweredQuestion(question);
        window.alert(question.success);
        return;
    }

    // incrementUserMisses();
    window.alert(question.failure);
};

const renderQuestions = (questions) => {
    for (let i = 0; i < questions.length; i++) {
        const quizQuestion = document.createElement('div');
        const question = document.createElement('h3');
        const answers = document.createElement('div');

        question.innerText = questions[i].question;

        for (let j = 0; j < questions[i].answers.length; j++) {
            const answer = document.createElement('button');
            answer.innerText = questions[i].answers[j];
            answer.onclick = () => checkResult(questions[i], j);
            answers.appendChild(answer);
        }

        quizQuestion.appendChild(question);
        quizQuestion.appendChild(answers);

        quizHolder.appendChild(quizQuestion);
    }
}

const init = () => {
    const questions = fetchQuestions();
    renderQuestions(questions);
};

init();