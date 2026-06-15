/**
 * MillieDev Course Data Blueprint
 * This structure is optimized for global indexing, 
 * cross-device syncing, and future cloud integration.
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
                id: "html-intro",
                title: "Introduction to HTML",
                lessons: [
                    { id: "what-is-html", title: "What is HTML?", content: { text: "HTML is the standard language used to create the structure of web pages.", video: null, image: null, resources: [] }, quiz: null, completed: false },
                    { id: "basic-structure", title: "Basic Structure", content: { text: "A web page is structured using HTML tags.", video: null, image: null, resources: [] }, quiz: null, completed: false }
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
        modules: [
            {
                id: "js-basics",
                title: "JavaScript Basics",
                lessons: [
                    { id: "variables", title: "Variables", content: { text: "Variables store data values in JavaScript.", video: null, image: null, resources: [] }, quiz: null, completed: false }
                ]
            }
        ]
    },
    "fullstack": { id: "fullstack", title: "Full Stack Introduction", level: "Intermediate", premium: true, description: "Frontend + backend systems.", modules: [] },
    "responsive-design": { id: "responsive-design", title: "Responsive Design", level: "Beginner", premium: false, description: "All-device layouts.", modules: [] },
    "website-deployment": { id: "website-deployment", title: "Website Deployment", level: "Intermediate", premium: false, description: "Hosting and launching.", modules: [] },
    "freelancing": { id: "freelancing", title: "Freelancing & Clients", level: "Intermediate", premium: false, description: "Get clients and earn online.", modules: [] }
};

// Data Safeguard: Prevents crashes if a course is missing a module array
const validateCourses = () => {
    Object.keys(courses).forEach(key => {
        if (!courses[key].modules) courses[key].modules = [];
    });
};
validateCourses();

// Make data globally accessible
if (typeof window !== "undefined") {
    window.courses = courses;
}
