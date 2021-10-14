const filterByType = (questions, type) => {
    return questions.filter((quest) => {
        if (quest.type == type) {
            return quest;
        }
    });
};

const filterAlreadyDoneQuestions = (questions) => {
    return questions.reduce((acc, cur) => {
        cur.completed ? acc.done.push(cur) : acc.notDone.push(cur);
        return acc;
    }, { done: [], notDone: [] });
};

const orderByPriority = (questions) => {
    return questions.sort(function (a, b) {
        if (a.priority > b.priority) {
            return 1;
        }
        if (a.priority < b.priority) {
            return -1;
        }

        return 0;
    });
};

const fillQuestionsArray = (preSelected, questions) => {
    for (let i = 0; i < questions.length; i++) {
        if (preSelected.length >= 10) {
            break;
        }
        preSelected.push(questions[i]);
    }

    return preSelected;
};

const fetchQuestions = (type) => {
    const quests = type ? filterByType(QUESTIONS, type) : QUESTIONS;
    const { neverDone, alreadyDone } = filterAlreadyDoneQuestions(quests);
    const firstChoices = orderByPriority(neverDone);
    const seccondChoices = orderByPriority(alreadyDone);

    let questions = fillQuestionsArray([], firstChoices)(questions, seccondChoices);
    return questions;
};

const init = () => {
    console.log(fetchQuestions());
};
