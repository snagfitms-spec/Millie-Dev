const courses = {

"html-css": {
    id: "html-css",
    title: "HTML & CSS Basics",
    level: "Beginner",
    premium: false,
    description: "Learn how websites are structured and styled.",
    modules: [
        {
            id: "html-intro",
            title: "HTML Introduction",
            lessons: [
                {
                    id: "what-is-html",
                    title: "What is HTML?",
                    content: {
                        text: "HTML builds the structure of web pages.",
                        code: "<h1>Hello</h1>"
                    },
                    quiz: {
                        question: "HTML is used for?",
                        options: ["Structure", "Styling", "Database"],
                        answer: "Structure"
                    }
                },
                {
                    id: "tags",
                    title: "HTML Tags",
                    content: {
                        text: "Tags define elements like headings and paragraphs."
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
    description: "Learn logic and interactivity.",
    modules: [
        {
            id: "js-basics",
            title: "Basics",
            lessons: [
                {
                    id: "variables",
                    title: "Variables",
                    content: {
                        text: "Variables store data.",
                        code: "let x = 10;"
                    },
                    quiz: {
                        question: "Which keyword defines a variable?",
                        options: ["let", "make", "varr"],
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
    description: "Frontend + backend basics.",
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

/* 💥 FIXED COURSES BELOW (THIS WAS YOUR ISSUE) */

"responsive-design": {
    id: "responsive-design",
    title: "Responsive Design",
    level: "Beginner",
    premium: false,
    description: "Mobile-friendly websites.",
    modules: [
        {
            id: "responsive-intro",
            title: "Introduction",
            lessons: [
                {
                    id: "what-is-responsive",
                    title: "What is Responsive Design?",
                    content: {
                        text: "Responsive design makes websites adapt to all screen sizes."
                    }
                },
                {
                    id: "media-queries",
                    title: "Media Queries",
                    content: {
                        text: "Media queries apply CSS based on screen size.",
                        code: "@media (max-width: 768px) {}"
                    }
                }
            ]
        }
    ]
},

"website-development": {
    id: "website-development",
    title: "Website Deployment",
    level: "Intermediate",
    premium: false,
    description: "Build and deploy websites.",
    modules: [
        {
            id: "deployment-basics",
            title: "Deployment Basics",
            lessons: [
                {
                    id: "hosting",
                    title: "What is Hosting?",
                    content: {
                        text: "Hosting makes your website available online."
                    }
                },
                {
                    id: "github-pages",
                    title: "GitHub Pages",
                    content: {
                        text: "GitHub Pages allows free website hosting."
                    }
                }
            ]
        }
    ]
},

"freelancing": {
    id: "freelancing",
    title: "Freelancing & Clients",
    level: "Intermediate",
    premium: false,
    description: "Get clients and earn online.",
    modules: [
        {
            id: "clients",
            title: "Getting Clients",
            lessons: [
                {
                    id: "finding-clients",
                    title: "Finding Clients",
                    content: {
                        text: "Clients can be found on platforms like Fiverr and Upwork."
                    }
                },
                {
                    id: "pricing",
                    title: "Pricing Work",
                    content: {
                        text: "Set prices based on skill and project size."
                    }
                }
            ]
        }
    ]
}

};

window.courses = courses;
