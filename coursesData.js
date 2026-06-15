/**
 * MILLIEDEV MASTER DATA BLUEPRINT
 * Use this structure to add your 1,000+ lessons.
 * Always follow the ID, Title, Content, and Quiz structure.
 */

const courses = {
    "html-css": {
        id: "html-css",
        title: "HTML & CSS Basics",
        level: "Beginner",
        premium: false,
        description: "Learn how websites are structured and styled from scratch.",
        modules: [
            {
                id: "mod-1",
                title: "Introduction to HTML",
                lessons: [
                    { 
                        id: "what-is-html", 
                        title: "What is HTML?", 
                        content: { 
                            text: "HTML is the standard language used to create the structure of web pages.", 
                            video: null, 
                            image: null, 
                            resources: [] 
                        }, 
                        quiz: { 
                            question: "What does HTML stand for?", 
                            options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"], 
                            answer: "Hyper Text Markup Language" 
                        },
                        completed: false 
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
        description: "Learn logic, events, and interactive web development.",
        modules: [] // Add your modules here following the same pattern as html-css
    },
    "fullstack": { id: "fullstack", title: "Full Stack Introduction", level: "Intermediate", premium: true, description: "Frontend + backend systems.", modules: [] },
    "responsive-design": { id: "responsive-design", title: "Responsive Design", level: "Beginner", premium: false, description: "All-device layouts.", modules: [] },
    "website-deployment": { id: "website-deployment", title: "Website Deployment", level: "Intermediate", premium: false, description: "Hosting and launching.", modules: [] },
    "freelancing": { id: "freelancing", title: "Freelancing & Clients", level: "Intermediate", premium: false, description: "Get clients and earn online.", modules: [] }
};

// DATA SAFEGUARD: Ensures structure is consistent to prevent app crashes
const validateCourses = () => {
    Object.keys(courses).forEach(key => {
        if (!courses[key].modules) courses[key].modules = [];
    });
};
validateCourses();

if (typeof window !== "undefined") {
    window.courses = courses;
}
