/**
 * Family Tree Explorer & Trivia Game Logic (game.js)
 * Includes: Interactive Tree Explorer, 40-Question Trivia Quiz, Star Confetti Shower
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Family Tree Data Model (Removed - replaced with static image)
       ========================================================================== */

    /* ==========================================================================
       2. Trivia Questions Bank (40 Questions)
       ========================================================================== */
    const triviaQuestions = [
        {
            q: "כמה ילדים נולדו לסולטנה ורפאל אלטרס?",
            options: ["3", "4", "5", "6"],
            correct: "5",
            explanation: "לסולטנה ורפאל אלטרס נולדו 5 ילדים: פרלה, דונה, שרה, לואיזה ויעקב."
        },
        {
            q: "מיהו הבן של סולטנה ורפאל אלטרס שנשאר ללא בת זוג או צאצאים?",
            options: ["רפאל", "יעקב", "ניסים", "אלברט"],
            correct: "יעקב",
            explanation: "יעקב הוא בנם היחיד של סולטנה ורפאל שלא נישא ולא הותיר צאצאים."
        },
        {
            q: "למי הייתה נשואה לואיזה, בתם של סולטנה ורפאל?",
            options: ["יצחק", "אלברט", "ניסים אדטו", "רפאל שאול"],
            correct: "ניסים אדטו",
            explanation: "לואיזה הייתה נשואה לניסים אדטו. לאחר פטירתה, נישא ניסים לאחותה שרה."
        },
        {
            q: "כמה ילדים נולדו ללואיזה וניסים אדטו?",
            options: ["1", "2", "3", "4"],
            correct: "3",
            explanation: "ללואיזה וניסים נולדו 3 ילדים: ג'ו, ויקי וראלף."
        },
        {
            q: "מי הן שלוש הבנות של מלכה ויהודה אסולין?",
            options: ["אפרת, מיכל וקרן", "פרלה, דונה ושרה", "לואיזה, שרה ואתי", "יהודית, מלכה וקרן"],
            correct: "אפרת, מיכל וקרן",
            explanation: "למלכה ויהודה אסולין נולדו שלוש בנות: אפרת, מיכל וקרן."
        },
        {
            q: "מה היה שמה הקודם של רעיה, בתם של אפרת ובני קשי?",
            options: ["ניצן", "אליה", "יעל", "מלכה"],
            correct: "ניצן",
            explanation: "בפירוט אילן המשפחה מצוין כי שמה הקודם של רעיה הוא ניצן."
        },
        {
            q: "מי הם ארבעת הילדים של אפרת ובני קשי?",
            options: ["עופר, יואב, יעל ורעיה", "נדב, נועם, עופר ויואב", "ג'ו, ויקי, ראלף וקרול", "צחי, פנינה, עדי ויהודית"],
            correct: "עופר, יואב, יעל ורעיה",
            explanation: "לאפרת ובני קשי נולדו ארבעה ילדים: עופר, יואב, יעל ורעיה."
        },
        {
            q: "למי הייתה נשואה פרלה, בתם של סולטנה ורפאל?",
            options: ["יצחק", "משה", "יהודה", "בני"],
            correct: "יצחק",
            explanation: "פרלה הייתה נשואה ליצחק."
        },
        {
            q: "מיהי הבת של פרלה ויצחק?",
            options: ["יהודית", "אתי", "דולי", "מלכה"],
            correct: "יהודית",
            explanation: "בתם היחידה של פרלה ויצחק היא יהודית."
        },
        {
            q: "מי הן ארבע הבנות של סולטנה ורפאל אלטרס?",
            options: ["פרלה, דונה, שרה ולואיזה", "אפרת, מיכל, קרן ומלכה", "יהודית, אתי, דולי ומלכה", "לואיזה, שרה, מלכה ואפרת"],
            correct: "פרלה, דונה, שרה ולואיזה",
            explanation: "לסולטנה ורפאל אלטרס נולדו 5 ילדים: בן אחד (יעקב) ו-4 בנות: פרלה, דונה, שרה ולואיזה."
        },
        {
            q: "כיצד מיוחסת מלכה לשרה אלטרס (גיבורת הספר)?",
            options: ["היא בתה", "היא אחותה", "היא נכדתה", "היא סבתה"],
            correct: "היא בתה",
            explanation: "מלכה היא בתה היחידה של שרה מנישואיה הראשונים לרפאל שאול."
        },
        {
            q: "מי היו ההורים של יהודית (הנכדה של סולטנה ורפאל)?",
            options: ["פרלה ויצחק", "דונה ואלברט", "לואיזה וניסים", "שרה ורפאל"],
            correct: "פרלה ויצחק",
            explanation: "יהודית היא בתם היחידה של פרלה ויצחק."
        },
        {
            q: "מי היו ההורים של אתי וג'קי (הנכדים של סולטנה ורפאל)?",
            options: ["דונה ואלברט", "פרלה ויצחק", "לואיזה וניסים", "שרה ורפאל שאול"],
            correct: "דונה ואלברט",
            explanation: "אתי וג'קי הם ילדיהם של דונה ואלברט."
        },
        {
            q: "מיהו בעלה השני של שרה אלטרס (גיבורת הספר)?",
            options: ["מאיר דסה", "רפאל שאול", "ניסים אדטו", "שמואל"],
            correct: "מאיר דסה",
            explanation: "בעלה השני של שרה אלטרס היה מאיר דסה, בעוד שרפאל שאול היה הראשון וניסים אדטו השלישי."
        },
        {
            q: "למי הייתה נשואה דונה, בתם של סולטנה ורפאל אלטרס?",
            options: ["אלברט", "יצחק", "ניסים", "ערן"],
            correct: "אלברט",
            explanation: "דונה הייתה נשואה לאלברט."
        },
        {
            q: "אילו ילדים נולדו לדונה ואלברט?",
            options: ["אתי וג'קי", "יהודית ומלכה", "ג'ו וויקי", "שרה ודליה"],
            correct: "אתי וג'קי",
            explanation: "לדונה ואלברט נולדו אתי וג'קי."
        },
        {
            q: "מיהם ההורים של נדב ונועם?",
            options: ["מיכל וערן ברס", "אפרת ובני קשי", "מלכה ויהודה אסולין", "שרה ורפאל שאול"],
            correct: "מיכל וערן ברס",
            explanation: "נדב ונועם הם בניהם של מיכל וערן ברס."
        },
        {
            q: "מיהי אמה של אליה?",
            options: ["קרן", "מיכל", "אפרת", "מלכה"],
            correct: "קרן",
            explanation: "קרן היא אמה של אליה, כפי שמפורט באילן היוחסין."
        },
        {
            q: "מיהו בעלה הראשון של שרה אלטרס (גיבורת הספר)?",
            options: ["רפאל שאול", "מאיר דסה", "ניסים אדטו", "יהודה אסולין"],
            correct: "רפאל שאול",
            explanation: "בעלה הראשון של שרה אלטרס היה רפאל שאול, וממנו נולדה בתה היחידה מלכה."
        },
        {
            q: "מה היה הקשר של ניסים אדטו לאחיות שרה ולואיזה?",
            options: ["היה נשוי תחילה ללואיזה ואז לאחותה שרה", "היה נשוי לשניהן בו זמנית", "היה נשוי לשרה ואז ללואיזה", "היה אביהן של שרה ולואיזה"],
            correct: "היה נשוי תחילה ללואיזה ואז לאחותה שרה",
            explanation: "ניסים אדטו היה נשוי תחילה ללואיזה אלטרס. לאחר פטירתה בגיל צעיר, הוא נישא לאחותה שרה."
        },
        {
            q: "מי הם שלושת הילדים שנולדו ללואיזה וניסים אדטו?",
            options: ["ג'ו, ויקי וראלף", "אתי, ג'קי ופרלה", "מלכה, יהודית ועדי", "שרה, דליה ואיזבל"],
            correct: "ג'ו, ויקי וראלף",
            explanation: "ללואיזה וניסים אדטו נולדו שלושה ילדים: ג'ו, ויקי וראלף."
        },
        {
            q: "מי הן אחיותיה של קרן אסולין?",
            options: ["אפרת ומיכל", "לואיזה ושרה", "פרלה ודונה", "יעל ורעיה"],
            correct: "אפרת ומיכל",
            explanation: "בנותיהם של מלכה ויהודה אסולין הן אפרת, מיכל וקרן. לכן אחיותיה של קרן הן אפרת ומיכל."
        },
        {
            q: "כיצד מיוחסת אליה (בתה של קרן) למלכה ויהודה אסולין?",
            options: ["נכדתם", "בתם", "נינתם", "אחותם"],
            correct: "נכדתם",
            explanation: "אליה היא בתה של קרן, שהיא בתם של מלכה ויהודה, לכן אליה היא נכדתם."
        },
        {
            q: "מי היו ההורים של ג'ו, ויקי וראלף?",
            options: ["לואיזה וניסים אדטו", "דונה ואלברט", "פרלה ויצחק", "שרה ורפאל שאול"],
            correct: "לואיזה וניסים אדטו",
            explanation: "ג'ו, ויקי וראלף הם ילדיהם של לואיזה וניסים אדטו."
        },
        {
            q: "כיצד מיוחסת יהודית (בתם של פרלה ויצחק) לסולטנה ורפאל אלטרס?",
            options: ["נכדתם", "בתם", "נינתם", "בת-נינתם"],
            correct: "נכדתם",
            explanation: "יהודית היא בתם של פרלה ויצחק, ולכן היא נכדתם של סולטנה ורפאל."
        },
        {
            q: "כמה פעמים נישאה שרה אלטרס, גיבורת הספר?",
            options: ["פעם אחת", "פעמיים", "3 פעמים", "4 פעמים"],
            correct: "3 פעמים",
            explanation: "שרה נישאה שלוש פעמים: לרפאל שאול, למאיר דסה, ולניסים אדטו."
        },
        {
            q: "מיהו בעלה השלישי של שרה אלטרס?",
            options: ["ניסים אדטו", "רפאל שאול", "מאיר דסה", "יצחק"],
            correct: "ניסים אדטו",
            explanation: "בעלה השלישי היה ניסים אדטו, שהיה קודם לכן נשוי לאחותה המנוחה לואיזה."
        },
        {
            q: "מאיזה נישואין של שרה נולדה בתה מלכה?",
            options: ["מהנישואין הראשונים לרפאל שאול", "מהנישואין השניים למאיר דסה", "מהנישואין השלישיים לניסים אדטו"],
            correct: "מהנישואין הראשונים לרפאל שאול",
            explanation: "מלכה היא בתה היחידה של שרה, ונולדה מנישואיה הראשונים לרפאל שאול."
        },
        {
            q: "למי נשואה מלכה, בתה של שרה?",
            options: ["יהודה אסולין", "בני קשי", "ערן ברס", "ניסים אדטו"],
            correct: "יהודה אסולין",
            explanation: "מלכה נשואה ליהודה אסולין."
        },
        {
            q: "כמה בנות נולדו למלכה ויהודה אסולין?",
            options: ["2 בנות", "3 בנות", "4 בנות", "5 בנות"],
            correct: "3 בנות",
            explanation: "למלכה ויהודה נולדו 3 בנות: אפרת, מיכל וקרן."
        },
        {
            q: "למי נשואה אפרת (בתם של מלכה ויהודה)?",
            options: ["בני קשי", "ערן ברס", "יהודה אסולין", "בני קדם"],
            correct: "בני קשי",
            explanation: "אפרת נשואה לבני קשי."
        },
        {
            q: "כמה ילדים נולדו לאפרת ובני קשי?",
            options: ["2", "3", "4", "5"],
            correct: "4",
            explanation: "לאפרת ובני קשי נולדו 4 ילדים: עופר, יואב, יעל ורעיה."
        },
        {
            q: "למי נשוי עופר (בנם של אפרת ובני)?",
            options: ["שולמית", "עדן", "יעל", "רעיה"],
            correct: "שולמית",
            explanation: "עופר נשוי לשולמית."
        },
        {
            q: "למי נשוי יואב (בנם של אפרת ובני)?",
            options: ["עדן", "שולמית", "יעל", "רעיה"],
            correct: "עדן",
            explanation: "יואב נשוי לעדן."
        },
        {
            q: "מהו שמו של בנם של יואב ועדן?",
            options: ["בניה", "נדב", "נועם", "רפאל"],
            correct: "בניה",
            explanation: "ליואב ועדן יש בן אחד בשם בניה."
        },
        {
            q: "למי נשואה מיכל (המחברת, בתם של מלכה ויהודה)?",
            options: ["ערן ברס", "בני קשי", "יהודה אסולין", "מאיר דסה"],
            correct: "ערן ברס",
            explanation: "מיכל (מחברת הספר) נשואה לערן ברס."
        },
        {
            q: "מי הם שני הבנים של מיכל וערן ברס?",
            options: ["נדב ונועם", "עופר ויואב", "ג'ו וראלף", "דולי ואלפר"],
            correct: "נדב ונועם",
            explanation: "למיכל וערן נולדו נדב ונועם."
        },
        {
            q: "מהו הקשר המשפחתי בין הסופרת מיכל ברס לבין שרה אלטרס (גיבורת הספר)?",
            options: ["שרה היא סבתה של מיכל", "שרה היא אמא של מיכל", "שרה היא דודה של מיכל", "שרה היא אחותה של מיכל"],
            correct: "שרה היא סבתה של מיכל",
            explanation: "שרה היא אמה של מלכה, ומלכה היא אמה של מיכל ברס. לכן, שרה היא סבתה של מיכל."
        },
        {
            q: "מהו שמה של בתה של קרן (בתם של מלכה ויהודה)?",
            options: ["אליה", "יעל", "רעיה", "פנינה"],
            correct: "אליה",
            explanation: "לקרן יש בת אחת בשם אליה."
        },
        {
            q: "מי מבין הבאות הייתה נשואה לניסים אדטו?",
            options: ["לואיזה ושרה", "פרלה ודונה", "שרה ואתי", "לואיזה ופרלה"],
            correct: "לואיזה ושרה",
            explanation: "ניסים אדטו היה נשוי תחילה ללואיזה, ולאחר פטירתה הוא נישא לאחותה שרה."
        }
    ];

    /* ==========================================================================
       3. Tab Navigation Logic
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.game-tabs .tab-btn');
    const tabContents = document.querySelectorAll('.game-content-wrapper .tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const activeContent = document.getElementById(targetTab);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       4. Family Tree Explorer - Replaced with Static Image
       ========================================================================== */

    /* ==========================================================================
       5. Trivia Game Logic (Mode B)
       ========================================================================== */
    let activeQuestions = [];
    let currentQuestionIdx = 0;
    let score = 0;
    let answered = false;

    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizScore = document.getElementById('quizScore');
    const quizProgressBar = document.getElementById('quizProgressBar');
    const quizProgressText = document.querySelector('.quiz-progress-text');
    const quizFeedbackCard = document.getElementById('quizFeedbackCard');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackExplanation = document.getElementById('feedbackExplanation');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');

    // Helper function to shuffle an array (Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function initQuiz() {
        // Deep copy of the questions array and shuffle both questions and their options
        activeQuestions = triviaQuestions.map(q => ({
            q: q.q,
            options: shuffleArray([...q.options]),
            correct: q.correct,
            explanation: q.explanation
        }));
        
        shuffleArray(activeQuestions);

        currentQuestionIdx = 0;
        score = 0;
        answered = false;
        if (quizScore) quizScore.textContent = '0';
        updateQuestion();
    }

    function updateQuestion() {
        if (!quizQuestion || !quizOptions) return;

        answered = false;
        quizFeedbackCard.classList.add('hidden');
        quizFeedbackCard.className = 'quiz-feedback-card hidden';
        if (nextQuestionBtn) nextQuestionBtn.disabled = true;

        const currentQ = activeQuestions[currentQuestionIdx];

        quizQuestion.textContent = currentQ.q;
        if (quizProgressText) {
            quizProgressText.textContent = `שאלה ${currentQuestionIdx + 1} מתוך 40`;
        }

        if (quizProgressBar) {
            const progressPercent = ((currentQuestionIdx + 1) / 40) * 100;
            quizProgressBar.style.width = `${progressPercent}%`;
        }

        quizOptions.innerHTML = '';
        currentQ.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => selectAnswer(btn, opt));
            quizOptions.appendChild(btn);
        });
    }

    function selectAnswer(selectedBtn, selectedText) {
        if (answered) return;
        answered = true;

        const currentQ = activeQuestions[currentQuestionIdx];
        const optionButtons = quizOptions.querySelectorAll('.quiz-opt-btn');

        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentQ.correct) {
                btn.classList.add('correct');
            }
        });

        const isCorrect = selectedText === currentQ.correct;
        if (isCorrect) {
            selectedBtn.classList.add('correct');
            score++;
            if (quizScore) quizScore.textContent = score;

            feedbackTitle.textContent = "תשובה נכונה! כל הכבוד!";
            feedbackIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            quizFeedbackCard.className = 'quiz-feedback-card is-correct';
        } else {
            selectedBtn.classList.add('incorrect');

            feedbackTitle.textContent = "לא מדויק...";
            feedbackIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
            quizFeedbackCard.className = 'quiz-feedback-card is-incorrect';
        }

        feedbackExplanation.textContent = currentQ.explanation;
        quizFeedbackCard.classList.remove('hidden');

        if (nextQuestionBtn) {
            nextQuestionBtn.disabled = false;
            if (currentQuestionIdx === 39) {
                nextQuestionBtn.innerHTML = `סיום החידון <i class="fa-solid fa-flag-checkered"></i>`;
            } else {
                nextQuestionBtn.innerHTML = `שאלה הבאה <i class="fa-solid fa-arrow-left"></i>`;
            }
        }
    }

    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', () => {
            if (currentQuestionIdx < 39) {
                currentQuestionIdx++;
                updateQuestion();
            } else {
                showVictoryModal();
            }
        });
    }

    /* ==========================================================================
       6. Victory Modal & Confetti Star Shower
       ========================================================================== */
    const victoryModal = document.getElementById('victoryModal');
    const victoryTitle = document.getElementById('victoryTitle');
    const victoryMessage = document.getElementById('victoryMessage');
    const closeVictoryBtn = document.getElementById('closeVictoryBtn');

    function showVictoryModal() {
        if (!victoryModal) return;

        let titleText = "מזל טוב!";
        let descText = "";
        
        if (score === 40) {
            titleText = "אלוף השורשים! מושלם!";
            descText = `ענית נכון על כל 40 השאלות! אתם מכירים את סיפורה של משפחת אלטרס וספרה של מיכל ברס "חיי שרה" בצורה מופלאה. תודה על השתתפותכם בחיבור העבר להווה!`;
        } else if (score >= 30) {
            titleText = "עבודה מצוינת!";
            descText = `ענית נכון על ${score} מתוך 40 שאלות! ידע מרשים ביותר בשושלת המשפחתית השזורה ברומן. אנו מודים לכם על חיבור קצוות המשפחה.`;
        } else {
            titleText = "תודה ששיחקתם!";
            descText = `ענית נכון על ${score} מתוך 40 שאלות. אילן יוחסין משפחתי הוא מסע מרתק של גילוי. אנו מזמינים אתכם להמשיך לחקור את אילן היוחסין ולגלות את שורשי הספר "חיי שרה".`;
        }

        if (victoryTitle) victoryTitle.textContent = titleText;
        if (victoryMessage) victoryMessage.textContent = descText;

        victoryModal.classList.add('active');
        startStarShower();
    }

    if (closeVictoryBtn) {
        closeVictoryBtn.addEventListener('click', () => {
            victoryModal.classList.remove('active');
            initQuiz();
        });
    }

    function startStarShower() {
        const canvas = document.getElementById('starCanvas');
        if (!canvas) return;
        
        canvas.classList.remove('hidden');
        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const stars = [];
        const colors = ['#c5a059', '#e5c079', '#faf6f0', '#ffffff', '#2b3a4a'];
        
        for (let i = 0; i < 150; i++) {
            stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * -window.innerHeight,
                size: Math.random() * 6 + 3,
                speedY: Math.random() * 2.5 + 1.5,
                speedX: Math.random() * 2 - 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: Math.random() * 0.03 - 0.015
            });
        }
        
        let animationFrameId;
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let activeParticles = false;
            
            stars.forEach(star => {
                star.y += star.speedY;
                star.x += star.speedX;
                star.rotation += star.rotationSpeed;
                
                if (star.y < canvas.height + 20) {
                    activeParticles = true;
                }
                
                ctx.save();
                ctx.translate(star.x, star.y);
                ctx.rotate(star.rotation);
                ctx.fillStyle = star.color;
                ctx.beginPath();
                
                for (let i = 0; i < 5; i++) {
                    ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * star.size,
                               Math.sin((18 + i * 72) * Math.PI / 180) * star.size);
                    ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (star.size / 2),
                               Math.sin((54 + i * 72) * Math.PI / 180) * (star.size / 2));
                }
                
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });
            
            if (activeParticles) {
                animationFrameId = requestAnimationFrame(draw);
            } else {
                canvas.classList.add('hidden');
            }
        }
        
        draw();
        
        setTimeout(() => {
            cancelAnimationFrame(animationFrameId);
            canvas.classList.add('hidden');
        }, 8000);
    }

    /* ==========================================================================
       6. Initializations
       ========================================================================== */
    initQuiz();

});
