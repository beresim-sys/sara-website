/**
 * Family Tree Explorer & Trivia Game Logic (game.js)
 * Includes: Interactive Tree Explorer, 40-Question Trivia Quiz, Star Confetti Shower
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Family Tree Data Model
       ========================================================================== */
    const familyData = {
        id: "founders",
        name: "סולטנה ורפאל אלטרס",
        relation: "מייסדי המשפחה",
        spouse: "סולטנה ורפאל",
        story: "ראשי המשפחה, מהם מתחיל הסיפור המופלא השזור בין דפי הספר.",
        children: [
            {
                id: "perla",
                name: "פרלה",
                spouse: "יצחק",
                relation: "בתם של סולטנה ורפאל",
                story: "פרלה היא בתם של סולטנה ורפאל אלטרס, נשואה ליצחק ולהם בת אחת - יהודית.",
                children: [
                    {
                        id: "yehudit",
                        name: "יהודית",
                        spouse: "שמואל",
                        relation: "נכדתם של סולטנה ורפאל, בתם של פרלה ויצחק",
                        story: "יהודית ושמואל הקימו משפחה ענפה עם שלושה ילדים: צחי, פנינה ועדי.",
                        children: [
                            {
                                id: "tzachi",
                                name: "צחי",
                                spouse: "עירית",
                                relation: "נינם של סולטנה ורפאל, בנם של יהודית ושמואל",
                                story: "צחי נשוי לעירית, ולהם שלושה ילדים: אור, לירון וטל.",
                                children: [
                                    {
                                        id: "or",
                                        name: "אור",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של צחי ועירית",
                                        story: "אור הוא ילדם של צחי ועירית."
                                    },
                                    {
                                        id: "liron",
                                        name: "לירון",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של צחי ועירית",
                                        story: "לירון הוא ילדם של צחי ועירית."
                                    },
                                    {
                                        id: "tal",
                                        name: "טל",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של צחי ועירית",
                                        story: "טל הוא ילדם של צחי ועירית."
                                    }
                                ]
                            },
                            {
                                id: "pnina",
                                name: "פנינה",
                                spouse: "אבי",
                                relation: "נינתם של סולטנה ורפאל, בתם של יהודית ושמואל",
                                story: "פנינה נשואה לאבי, ולהם שלושה ילדים: תום, לידור ואלמוג.",
                                children: [
                                    {
                                        id: "tom",
                                        name: "תום",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של פנינה ואבי",
                                        story: "תום הוא ילדם של פנינה ואבי."
                                    },
                                    {
                                        id: "lidor",
                                        name: "לידור",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של פנינה ואבי",
                                        story: "לידור הוא ילדם של פנינה ואבי."
                                    },
                                    {
                                        id: "almog",
                                        name: "אלמוג",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של פנינה ואבי",
                                        story: "אלמוג הוא ילדם של פנינה ואבי."
                                    }
                                ]
                            },
                            {
                                id: "adi",
                                name: "עדי",
                                spouse: "מיטל",
                                relation: "נינם של סולטנה ורפאל, בנם של יהודית ושמואל",
                                story: "עדי נשוי למיטל, ולהם שני ילדים: אופק ומאור.",
                                children: [
                                    {
                                        id: "ofek",
                                        name: "אופק",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של עדי ומיטל",
                                        story: "אופק הוא ילדם של עדי ומיטל."
                                    },
                                    {
                                        id: "maor",
                                        name: "מאור",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של עדי ומיטל",
                                        story: "מאור הוא ילדם של עדי ומיטל."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "duna",
                name: "דונה",
                spouse: "אלברט",
                relation: "בתם של סולטנה ורפאל",
                story: "דונה היא בתם של סולטנה ורפאל אלטרס, נשואה לאלברט ולהם שני ילדים: אתי וג'קי.",
                children: [
                    {
                        id: "etty",
                        name: "אתי",
                        spouse: "משה",
                        relation: "נכדתם של סולטנה ורפאל, בתם של דונה ואלברט",
                        story: "אתי ומשה הקימו משפחה ענפה בארץ. להם שלוש בנות: שרה, דליה ואיזבל.",
                        children: [
                            {
                                id: "etty_sarah",
                                name: "שרה",
                                spouse: "אורחן",
                                relation: "נינתם של סולטנה ורפאל, בתם של אתי ומשה",
                                story: "שרה (הקרויה על שם דודתה שרה) נשואה לאורחן, ולהם שני ילדים: מליך ומרט.",
                                children: [
                                    {
                                        id: "melih",
                                        name: "מליך",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של שרה ואורחן",
                                        story: "מליך הוא ילדם של שרה ואורחן."
                                    },
                                    {
                                        id: "mert",
                                        name: "מרט",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של שרה ואורחן",
                                        story: "מרט הוא ילדם של שרה ואורחן."
                                    }
                                ]
                            },
                            {
                                id: "dalia",
                                name: "דליה",
                                spouse: "מאיר",
                                relation: "נינתם של סולטנה ורפאל, בתם של אתי ומשה",
                                story: "דליה נשואה למאיר, ולהם שני ילדים: סנדי וטרייסי.",
                                children: [
                                    {
                                        id: "sandy",
                                        name: "סנדי",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של דליה ומאיר",
                                        story: "sandy היא בתם של דליה ומאיר."
                                    },
                                    {
                                        id: "tracy",
                                        name: "טרייסי",
                                        spouse: "ללא",
                                        relation: "דור חמישי, ילדם של דליה ומאיר",
                                        story: "טרייסי היא בתם של דליה ומאיר."
                                    }
                                ]
                            },
                            {
                                id: "isabel",
                                name: "איזבל",
                                spouse: "חייטי",
                                relation: "נינתם של סולטנה ורפאל, בתם של אתי ומשה",
                                story: "איזבל נשואה לחייטי, ולהם בן אחד - רמי.",
                                children: [
                                    {
                                        id: "rami",
                                        name: "רמי",
                                        spouse: "ללא",
                                        relation: "דור חמישי, בנם של איזבל וחייטי",
                                        story: "רמי הוא בנם של איזבל וחייטי."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "jacky",
                        name: "ג'קי",
                        spouse: "לואיזה",
                        relation: "נכדם של סולטנה ורפאל, בנם של דונה ואלברט",
                        story: "ג'קי נשוי ללואיזה, ולהם שני ילדים: דולי ואלפר.",
                        children: [
                            {
                                id: "dolly",
                                name: "דולי",
                                spouse: "איזט",
                                relation: "נינתם של סולטנה ורפאל, בתם של ג'קי ולואיזה",
                                story: "דולי נשואה לאיזט, ולהם שתי בנות: דינה ולאה.",
                                children: [
                                    {
                                        id: "dina",
                                        name: "דינה",
                                        spouse: "ללא",
                                        relation: "דור חמישי, בתם של דולי ואיזט",
                                        story: "דינה היא בתם של דולי ואיזט."
                                    },
                                    {
                                        id: "lea",
                                        name: "לאה",
                                        spouse: "ללא",
                                        relation: "דור חמישי, בתם של דולי ואיזט",
                                        story: "לאה היא בתם של דולי ואיזט."
                                    }
                                ]
                            },
                            {
                                id: "alper",
                                name: "אלפר",
                                spouse: "סובל",
                                relation: "נינם של סולטנה ורפאל, בנם של ג'קי ולואיזה",
                                story: "אלפר נשוי לסובל, ולהם שני בנים: ג'רי וברי.",
                                children: [
                                    {
                                        id: "jerry",
                                        name: "ג'רי",
                                        spouse: "ללא",
                                        relation: "דור חמישי, בנם של אלפר וסובל",
                                        story: "ג'רי הוא בנם של אלפר וסובל."
                                    },
                                    {
                                        id: "barry",
                                        name: "ברי",
                                        spouse: "ללא",
                                        relation: "דור חמישי, בנם של אלפר וסובל",
                                        story: "ברי הוא בנם של אלפר וסובל."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "sarah",
                name: "שרה",
                spouse: "רפאל שאול / מאיר דסה / ניסים אדטו",
                relation: "בתם של סולטנה ורפאל - גיבורת הספר",
                story: "שרה, גיבורת הרומן הקרוי על שמה, נישאה שלוש פעמים. מנישואיה הראשונים לרפאל שאול נולדה בתה היחידה מלכה. בהמשך נישאה למאיר דסה, ולאחר מכן לניסים אדטו (האלמן של אחותה לואיזה).",
                highlight: true,
                children: [
                    {
                        id: "malka",
                        name: "מלכה",
                        spouse: "יהודה אסולין",
                        relation: "נכדתם של סולטנה ורפאל, בתה של שרה",
                        story: "מלכה נישאה ליהודה אסולין, ולהם שלוש בנות: אפרת, מיכל וקרן.",
                        children: [
                            {
                                id: "efrat",
                                name: "אפרת",
                                spouse: "בני קשי",
                                relation: "נינתם של סולטנה ורפאל, בתם של מלכה ויהודה",
                                story: "אפרת ובני קשי הקימו משפחה ענפה המונה 4 ילדים: עופר, יואב, יעל ורעיה.",
                                children: [
                                    {
                                        id: "ofer",
                                        name: "עופר",
                                        spouse: "שולמית",
                                        relation: "בן-נינתם של סולטנה ורפאל, בנם של אפרת ובני",
                                        story: "עופר נשוי לשולמית."
                                    },
                                    {
                                        id: "yoav",
                                        name: "יואב",
                                        spouse: "עדן",
                                        relation: "בן-נינתם של סולטנה ורפאל, בנם של אפרת ובני",
                                        story: "יואב נשוי לעדן, ולהם בן אחד בשם בניה (בנם המשותף, דור שישי למייסדים).",
                                        children: [
                                            {
                                                id: "benaya",
                                                name: "בניה",
                                                spouse: "ללא",
                                                relation: "דור שישי, בנם של יואב ועדן, נין-נינם של סולטנה ורפאל",
                                                story: "בניה הקטן הוא הדור הצעיר ביותר במשפחה המפורט באילן."
                                            }
                                        ]
                                    },
                                    {
                                        id: "yael",
                                        name: "יעל",
                                        spouse: "ללא",
                                        relation: "בת-נינתם של סולטנה ורפאל, בתם של אפרת ובני",
                                        story: "יעל היא בתם של אפרת ובני."
                                    },
                                    {
                                         id: "raya",
                                         name: "רעיה (ניצן)",
                                         spouse: "ללא",
                                         relation: "בת-נינתם של סולטנה ורפאל, בתם של אפרת ובני",
                                         story: "רעיה (שמה הקודם היה ניצן) היא בתם של אפרת ובני."
                                    }
                                ]
                            },
                            {
                                id: "michal",
                                name: "מיכל ברס",
                                spouse: "ערן ברס",
                                relation: "נינתם של סולטנה ורפאל, בתם של מלכה ויהודה - מחברת הספר!",
                                story: "מיכל ברס, מחברת הספר וחוקרת המשפחה, נשואה לערן ברס ולהם שני בנים: נדב ונועם.",
                                highlight: true,
                                children: [
                                    {
                                        id: "nadav",
                                        name: "נדב",
                                        spouse: "ללא",
                                        relation: "בן-נינתם של סולטנה ורפאל, בנם של מיכל וערן",
                                        story: "נדב הוא בנם הבכור של מיכל וערן."
                                    },
                                    {
                                        id: "noam",
                                        name: "נועם",
                                        spouse: "ללא",
                                        relation: "בן-נינתם של סולטנה ורפאל, בנם של מיכל וערן",
                                        story: "נועם הוא בנם הצעיר של מיכל וערן."
                                    }
                                ]
                            },
                            {
                                id: "keren",
                                name: "קרן",
                                spouse: "ללא",
                                relation: "נינתם של סולטנה ורפאל, בתם של מלכה ויהודה",
                                story: "קרן היא בתם של מלכה ויהודה, ולה בת אחת בשם אליה.",
                                children: [
                                    {
                                        id: "aliya",
                                        name: "אליה",
                                        spouse: "ללא",
                                        relation: "בת-נינתם של סולטנה ורפאל, בתה של קרן",
                                        story: "אליה היא בתה של קרן."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "louisa",
                name: "לואיזה",
                spouse: "ניסים אדטו",
                relation: "בתם של סולטנה ורפאל",
                story: "לואיזה היא בתם של סולטנה ורפאל אלטרס, נשואה לניסים אדטו ולהם שלושה ילדים: ג'ו, ויקי וראלף. לאחר פטירתה, נישא ניסים לאחותה שרה.",
                children: [
                    {
                        id: "joe",
                        name: "ג'ו",
                        spouse: "ג'ין",
                        relation: "נכדם של סולטנה ורפאל, בנם של לואיזה וניסים",
                        story: "ג'ו נשוי לג'ין, ולהם בת אחת - קרול.",
                        children: [
                            {
                                id: "carol",
                                name: "קרול",
                                spouse: "ללא",
                                relation: "נינתם של סולטנה ורפאל, בתם של ג'ו וג'ין",
                                story: "קרול היא בתם של ג'ו וג'ין."
                            }
                        ]
                    },
                    {
                        id: "vicky",
                        name: "ויקי",
                        spouse: "ג'ק",
                        relation: "נכדתם של סולטנה ורפאל, בתם של לואיזה וניסים",
                        story: "ויקי נשואה לג'ק, ולהם שלושה ילדים: סטיב, רוני וילד נוסף.",
                        children: [
                            {
                                id: "steve",
                                name: "סטיב",
                                spouse: "ללא",
                                relation: "נינם של סולטנה ורפאל, בנם של ויקי וג'ק",
                                story: "סטיב הוא בנם של ויקי וג'ק."
                            },
                            {
                                id: "roni",
                                name: "רוני",
                                spouse: "ללא",
                                relation: "נינם של סולטנה ורפאל, בנם של ויקי וג'ק",
                                story: "רוני הוא בנם של ויקי וג'ק."
                            },
                            {
                                id: "vicky_child3",
                                name: "ילד נוסף",
                                spouse: "ללא",
                                relation: "נינם של סולטנה ורפאל, בנם של ויקי וג'ק",
                                story: "בנם של ויקי וג'ק."
                            }
                        ]
                    },
                    {
                        id: "ralph",
                        name: "ראלף",
                        spouse: "מרסל",
                        relation: "נכדם של סולטנה ורפאל, בנם של לואיזה וניסים",
                        story: "ראלף נשוי למרסל, ולהם בת בשם קארן וילד נוסף.",
                        children: [
                            {
                                id: "karen",
                                name: "קארן",
                                spouse: "ללא",
                                relation: "נינתם של סולטנה ורפאל, בתם של ראלף ומרסל",
                                story: "קארן היא בתם של ראלף ומרסל."
                            },
                            {
                                id: "ralph_child2",
                                name: "ילד נוסף",
                                spouse: "ללא",
                                relation: "נינם של סולטנה ורפאל, בנם של ראלף ומרסל",
                                story: "בנם של ראלף ומרסל."
                            }
                        ]
                    }
                ]
            },
            {
                id: "yakov",
                name: "יעקב",
                spouse: "ללא בת זוג",
                relation: "בנם של סולטנה ורפאל",
                story: "יעקב הוא בנם של סולטנה ורפאל. הוא חי חיים עצמאיים וללא צאצאים או בת זוג."
            }
        ]
    };

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
            q: "למי נשוי ג'ו אדטו (בנם של לואיזה וניסים)?",
            options: ["ג'ין", "מרסל", "יהודית", "לואיזה"],
            correct: "ג'ין",
            explanation: "ג'ו נשוי לג'ין, בעוד שמרסל נשואה לאחיו ראלף."
        },
        {
            q: "למי נשואה ויקי אדטו (בתם של לואיזה וניסים)?",
            options: ["ג'ק", "משה", "שמואל", "אבי"],
            correct: "ג'ק",
            explanation: "ויקי נשואה לג'ק."
        },
        {
            q: "למי נשוי ראלף אדטו (בנם של לואיזה וניסים)?",
            options: ["מרסל", "עירית", "מיטל", "סובל"],
            correct: "מרסל",
            explanation: "ראלף נשוי למרסל."
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
            explanation: "בתם היחידה של פרלה ויצחק היא יהודית. אתי היא בתם של דונה ואלברט."
        },
        {
            q: "למי נשואה יהודית, בתם של פרלה ויצחק?",
            options: ["שמואל", "משה", "ערן", "בני"],
            correct: "שמואל",
            explanation: "יהודית נשואה לשמואל."
        },
        {
            q: "כמה ילדים נולדו ליהודית ושמואל?",
            options: ["2", "3", "4", "5"],
            correct: "3",
            explanation: "ליהודית ושמואל נולדו 3 ילדים: צחי, פנינה ועדי."
        },
        {
            q: "למי נשוי צחי (בנם של יהודית ושמואל)?",
            options: ["עירית", "פנינה", "עדי", "מיטל"],
            correct: "עירית",
            explanation: "צחי נשוי לעירית. מיטל נשואה לאחיו עדי."
        },
        {
            q: "למי נשואה פנינה (בתם של יהודית ושמואל)?",
            options: ["אבי", "משה", "יהודה", "ערן"],
            correct: "אבי",
            explanation: "פנינה נשואה לאבי."
        },
        {
            q: "למי נשוי עדי (בנם של יהודית ושמואל)?",
            options: ["מיטל", "שולמית", "עדן", "יעל"],
            correct: "מיטל",
            explanation: "עדי נשוי למיטל."
        },
        {
            q: "למי הייתה נשואה דונה, בתם של סולטנה ורפאל אלטרס?",
            options: ["אלברט", "יצחק", "ניסים", "ערן"],
            correct: "אלברט",
            explanation: "דונה הייתה נשואה לאלברט."
        },
        {
            q: "אילו ילדים נולדו לדונה ואלברט?",
            options: ["אתי וג'קי", "יהודית ומלכה", "דולי ואלפר", "ג'ו וויקי"],
            correct: "אתי וג'קי",
            explanation: "לדונה ואלברט נולדו אתי וג'קי. דולי ואלפר הם הילדים של ג'קי."
        },
        {
            q: "למי נשואה אתי, בתם של דונה ואלברט?",
            options: ["משה", "שמואל", "מאיר", "אורחן"],
            correct: "משה",
            explanation: "אתי נשואה למשה."
        },
        {
            q: "כמה בנות נולדו לאתי ומשה?",
            options: ["2", "3", "4", "1"],
            correct: "3",
            explanation: "לאתי ומשה נולדו 3 בנות: שרה, דליה ואיזבל."
        },
        {
            q: "למי נשואה שרה (בתם של אתי ומשה)?",
            options: ["אורחן", "מאיר", "חייטי", "ניסים"],
            correct: "אורחן",
            explanation: "שרה זו (הנקראת על שם דודתה שרה) נשואה לאורחן."
        },
        {
            q: "למי נשואה דליה (בתם של אתי ומשה)?",
            options: ["מאיר", "אורחן", "חייטי", "משה"],
            correct: "מאיר",
            explanation: "דליה נשואה למאיר."
        },
        {
            q: "למי נשואה איזבל (בתם של אתי ומשה)?",
            options: ["חייטי", "מאיר", "משה", "אלברט"],
            correct: "חייטי",
            explanation: "איזבל נשואה לחייטי."
        },
        {
            q: "למי נשוי ג'קי (בנם של דונה ואלברט)?",
            options: ["לואיזה", "סולטנה", "יהודית", "אתי"],
            correct: "לואיזה",
            explanation: "ג'קי נשוי ללואיזה."
        },
        {
            q: "מי הם הילדים של ג'קי ולואיזה?",
            options: ["דולי ואלפר", "צחי ופנינה", "ג'ו וויקי", "שרה ודליה"],
            correct: "דולי ואלפר",
            explanation: "לג'קי ולואיזה נולדו דולי ואלפר."
        },
        {
            q: "למי נשואה דולי (בתם של ג'קי ולואיזה)?",
            options: ["איזט", "סובל", "אלפר", "ג'ק"],
            correct: "איזט",
            explanation: "דולי נשואה לאיזט. סובל היא אשתו של אחיה אלפר."
        },
        {
            q: "למי נשוי אלפר (בנם של ג'קי ולואיזה)?",
            options: ["סובל", "דולי", "ג'ין", "מרסל"],
            correct: "סובל",
            explanation: "אלפר נשוי לסובל."
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
                
                if (targetTab === 'mode-tree') {
                    recenterTreeView();
                }
            }
        });
    });

    /* ==========================================================================
       4. Interactive Family Tree Explorer (Mode A)
       ========================================================================== */
    const treePanZoom = document.getElementById('treePanZoom');
    const treeViewport = document.getElementById('treeViewport');
    const detailName = document.getElementById('detailName');
    const detailRelation = document.getElementById('detailRelation');
    const detailSpouse = document.getElementById('detailSpouse');
    const detailChildren = document.getElementById('detailChildren');
    const detailStory = document.getElementById('detailStory');

    // Drag-to-pan implementation
    let isMouseDown = false;
    let startX, startY, scrollLeft, scrollTop;

    if (treeViewport) {
        treeViewport.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            treeViewport.style.cursor = 'grabbing';
            startX = e.pageX - treeViewport.offsetLeft;
            startY = e.pageY - treeViewport.offsetTop;
            scrollLeft = treeViewport.scrollLeft;
            scrollTop = treeViewport.scrollTop;
        });

        treeViewport.addEventListener('mouseleave', () => {
            isMouseDown = false;
            treeViewport.style.cursor = 'grab';
        });

        treeViewport.addEventListener('mouseup', () => {
            isMouseDown = false;
            treeViewport.style.cursor = 'grab';
        });

        treeViewport.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - treeViewport.offsetLeft;
            const y = e.pageY - treeViewport.offsetTop;
            const walkX = (x - startX) * 1.5;
            const walkY = (y - startY) * 1.5;
            treeViewport.scrollLeft = scrollLeft - walkX;
            treeViewport.scrollTop = scrollTop - walkY;
        });
    }

    // Function to render the family tree
    function initFamilyTree() {
        if (!treePanZoom) return;
        treePanZoom.innerHTML = ''; // Clear previous

        // Create tree structure starting from founders
        const treeRootHTML = renderNodeHTML(familyData);
        treePanZoom.appendChild(treeRootHTML);

        // Add event listeners to cards
        const cards = treePanZoom.querySelectorAll('.family-card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const nodeId = card.getAttribute('data-node-id');
                const nodeData = findNodeById(familyData, nodeId);
                if (nodeData) {
                    displayNodeDetails(nodeData);
                    
                    // Mark card as selected
                    cards.forEach(c => c.classList.remove('active-selected'));
                    card.classList.add('active-selected');
                }
            });
        });

        // Set default detail display to founders
        displayNodeDetails(familyData);
        
        // Mark founders card as selected initially
        const foundersCard = treePanZoom.querySelector(`[data-node-id="${familyData.id}"]`);
        if (foundersCard) foundersCard.classList.add('active-selected');
    }

    // Recenter the tree viewport
    function recenterTreeView() {
        if (treeViewport && treePanZoom) {
            applyZoom();
            setTimeout(() => {
                treeViewport.scrollLeft = (treePanZoom.offsetWidth - treeViewport.offsetWidth) / 2;
                treeViewport.scrollTop = 0;
            }, 100);
        }
    }

    // Recursively render node HTML with nested structures
    function renderNodeHTML(node) {
        const branchDiv = document.createElement('div');
        branchDiv.className = 'tree-branch';

        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'tree-node-wrapper';
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'family-card';
        cardDiv.setAttribute('data-node-id', node.id);

        // Class highlights
        if (node.highlight) {
            if (node.id === 'sarah') {
                cardDiv.classList.add('book-highlight');
            } else if (node.id === 'michal') {
                cardDiv.classList.add('author-highlight');
            }
        }

        const nameSpan = document.createElement('span');
        nameSpan.className = 'card-name';
        nameSpan.textContent = node.name;
        cardDiv.appendChild(nameSpan);

        const spouseSpan = document.createElement('span');
        spouseSpan.className = 'card-spouse';
        spouseSpan.textContent = node.spouse && node.spouse !== 'ללא' ? `זוג: ${node.spouse}` : '';
        cardDiv.appendChild(spouseSpan);

        nodeWrapper.appendChild(cardDiv);
        branchDiv.appendChild(nodeWrapper);

        // If child node has children, render them
        if (node.children && node.children.length > 0) {
            nodeWrapper.classList.add('has-children');
            const childrenRow = document.createElement('div');
            childrenRow.className = 'tree-children-row';

            node.children.forEach(child => {
                const childHTML = renderNodeHTML(child);
                childrenRow.appendChild(childHTML);
            });

            branchDiv.appendChild(childrenRow);
        }

        return branchDiv;
    }

    // Helper to find node by ID in tree
    function findNodeById(rootNode, id) {
        if (rootNode.id === id) return rootNode;
        if (rootNode.children) {
            for (let child of rootNode.children) {
                const result = findNodeById(child, id);
                if (result) return result;
            }
        }
        return null;
    }

    // Populate detail panel
    function displayNodeDetails(node) {
        if (!detailName) return;

        detailName.textContent = node.name;
        detailRelation.textContent = node.relation || "חבר משפחה";
        detailSpouse.textContent = node.spouse || "אין";
        detailStory.textContent = node.story || "אין פרטים זמינים.";

        if (detailChildren) {
            detailChildren.innerHTML = '';
            if (node.children && node.children.length > 0) {
                node.children.forEach(child => {
                    const li = document.createElement('li');
                    li.textContent = child.name;
                    li.addEventListener('click', () => {
                        const targetCard = treePanZoom.querySelector(`[data-node-id="${child.id}"]`);
                        if (targetCard) {
                            targetCard.click();
                            targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }
                    });
                    detailChildren.appendChild(li);
                });
                detailChildren.parentElement.style.display = 'block';
            } else {
                detailChildren.parentElement.style.display = 'none';
            }
        }
    }

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
       Zoom Controls for Family Tree
       ========================================================================== */
    let currentZoom = 0.85; // Default zoom level

    function applyZoom() {
        if (treePanZoom) {
            treePanZoom.style.transform = `scale(${currentZoom})`;
        }
    }

    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomFitBtn = document.getElementById('zoomFitBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            if (currentZoom < 1.5) {
                currentZoom += 0.1;
                applyZoom();
            }
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (currentZoom > 0.35) {
                currentZoom -= 0.1;
                applyZoom();
            }
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => {
            currentZoom = 1.0;
            applyZoom();
            recenterTreeView();
        });
    }

    if (zoomFitBtn) {
        zoomFitBtn.addEventListener('click', () => {
            if (treeViewport && treePanZoom) {
                const viewportWidth = treeViewport.clientWidth;
                const treeWidth = treePanZoom.scrollWidth || 1200;
                const fitScale = (viewportWidth - 40) / treeWidth;
                currentZoom = Math.max(0.35, Math.min(fitScale, 1.0));
                applyZoom();
                recenterTreeView();
            }
        });
    }

    /* ==========================================================================
       7. Initializations
       ========================================================================== */
    initFamilyTree();
    recenterTreeView();
    initQuiz();

});
