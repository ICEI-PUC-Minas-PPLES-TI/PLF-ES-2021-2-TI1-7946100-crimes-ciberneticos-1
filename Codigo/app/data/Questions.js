/* Modelo
{
    id: 0,
    type: "",
    subject: "phishing",
    challenge: 0,
    priority: 1,
    question: "",
    answers: [
        "",
        "",
        "",
        ""
    ],
    correctAnswersIndex: [2],
    success: "",
    failure: "",
    experience: 15
},
*/

const QUESTIONS = [
    {
        id: 1,
        type: "single",
        subject: "phishing",
        challenge: 0,
        priority: 0,
        question: "Ao receber um email com uma promoção, qual a atitude correta a se tomar?",
        answers: [
            "Clicar no link e aproveitar imediatamente",
            "Fazer login com seus dados pessoais na página redirecionada",
            "Verificar o remetente e a vericidade da promoção",
            "Fazer download do anexo do email"
        ],
        correctAnswersIndex: [2],
        success: "Parabéns! Você respondeu corretamente, basta ficar tranquilo e analisar emails suspeitos com bastante atenção que ficará tudo bem!",
        failure: "Essa não, infelizmente você errou. Nunca confie em emails promocionais ou alarmantes de imediato, sempre verifique cuidadosamente o remetente. Mas fique tranquilo, na próxima você acerta!",
        experience: 15
    },
    {
        id: 2,
        type: "single",
        subject: "phishing",
        challenge: 0,
        priority: 1,
        question: "Dentre as atitudes a se tomar ao receber um email com assunto alarmante, selecione a atitude que não se deve ser tomada:",
        answers: [
            "Verificar o remetente",
            "Buscar outras fontes confiáveis que confirmem a veracidade do email",
            "Realizar imediatamente as demandas recebidas pelo email",
            "Perguntar a opinião de alguém confiável sobre o assunto"
        ],
        correctAnswersIndex: [2],
        success: "Parabéns! Hackers sempre tentam usar assuntos alarmantes para te distrair e te preocupar, lembre-se sempre de manter a calma e ter certeza que é verdade, antes de se preocupar.",
        failure: "Não foi dessa vez. Nunca confie imediatamente em um email com assunto alarmante, pode ser cilada! Mas fique tranquilo, com certeza você acertará na próxima vez!",
        experience: 15
    },
];