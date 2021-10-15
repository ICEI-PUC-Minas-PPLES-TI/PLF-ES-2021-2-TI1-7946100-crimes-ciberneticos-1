const USERS = [
    {
        id: 1,
        name: "",
        email: "",
        password: "", /*SHA256*/
        birthDate: "",
        completedQuizzes: {
            total: 0,
            questionsAnswered: [
                {
                    id: 1,
                    subject: "phishing"
                }
            ],
            hits: 0,
            misses: 0
        },
        experience: 0,
        configurations: {
            sound: true,
            theme: "light",
            reminders: true,
            tips: false,
            mainFontSize: 16
        }
    }
];
