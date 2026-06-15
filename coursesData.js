const courses = {
    "html-css": {
        id: "html-css",
        title: "HTML & CSS Basics",
        level: "Beginner",
        premium: false,
        description: "Learn how websites are structured and styled from scratch.",
        modules: [
            {
                id: "intro-html",
                title: "Introduction to HTML",
                lessons: [
                    {
                        id: "what-is-html",
                        title: "What is HTML?",
                        content: {
                            text: "HTML is the structure of all web pages. It defines elements like headings, paragraphs, links, images.",
                            code: "<h1>Hello World</h1>",
                            video: "",
                            resources: []
                        },
                        quiz: {
                            question: "What does HTML stand for?",
                            options: [
                                "Hyper Text Markup Language",
                                "Home Tool Markup Language",
                                "Hyperlinks Text Mark Language"
                            ],
                            answer: "Hyper Text Markup Language"
                        },
                        completed: false
                    }
                ]
            },

            {
                id: "css-basics",
                title: "CSS Basics",
                lessons: [
                    {
                        id: "what-is-css",
                        title: "What is CSS?",
                        content: {
                            text: "CSS is used to style HTML elements.",
                            code: "body { color: red; }",
                            video: "",
                            resources: []
                        }
                    }
                ]
            }
        ]
    },

    "javascript": {
        id: "javascript",
        title: "JavaScript Fundamentals",
        level: "Beginner",
        premium: false,
        description: "Learn programming logic and interactivity.",
        modules: [
            {
                id: "js-intro",
                title: "JS Basics",
                lessons: [
                    {
                        id: "variables",
                        title: "Variables",
                        content: {
                            text: "Variables store data values.",
                            code: "let name = 'Millie';"
                        },
                        quiz: {
                            question: "Which keyword declares a variable?",
                            options: ["let", "car", "make"],
                            answer: "let"
                        }
                    }
                ]
            }
        ]
    },

    "fullstack": {
        id: "fullstack",
        title: "Full Stack Intro",
        level: "Intermediate",
        premium: true,
        description: "Frontend + Backend fundamentals.",
        modules: [
            {
                id: "frontend",
                title: "Frontend",
                lessons: [
                    {
                        id: "ui",
                        title: "UI Basics",
                        content: {
                            text: "Frontend is what users see."
                        }
                    }
                ]
            }
        ]
    },

    "responsive-design": {
        id: "responsive-design",
        title: "Responsive Design",
        level: "Beginner",
        premium: false,
        description: "Mobile friendly layouts.",
        modules: []
    },

    "website-development": {
        id: "website-development",
        title: "Website Development",
        level: "Intermediate",
        premium: false,
        description: "Build and deploy websites.",
        modules: []
    },

    "freelancing": {
        id: "freelancing",
        title: "Freelancing & Clients",
        level: "Intermediate",
        premium: false,
        description: "Get clients and earn online.",
        modules: []
    }
};

window.courses = courses;
