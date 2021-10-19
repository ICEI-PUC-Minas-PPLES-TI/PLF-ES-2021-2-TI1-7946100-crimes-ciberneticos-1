let timePerQuestion = {};

const startTimeCount = (id) => {
    return timePerQuestion[id] = {
        startTime: new Date().getTime(),
        endTime: null
    };
}

const endTimeCount = (id) => {
    timePerQuestion[id].endTime = new Date().getTime();
    console.log(timePerQuestion);
};