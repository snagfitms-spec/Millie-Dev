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
        lessons: generateLessons("html", "intro", 20)
      },
      {
        id: "mod-2",
        title: "HTML Elements",
        lessons: generateLessons("html", "elements", 20)
      },
      {
        id: "mod-3",
        title: "CSS Basics",
        lessons: generateLessons("css", "basics", 20)
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
        id: "mod-1",
        title: "JavaScript Basics",
        lessons: generateLessons("js", "basics", 20)
      },
      {
        id: "mod-2",
        title: "Functions & Logic",
        lessons: generateLessons("js", "logic", 20)
      }
    ]
  },

  "fullstack": {
    id: "fullstack",
    title: "Full Stack Introduction",
    level: "Intermediate",
    premium: true,
    description: "Frontend + backend systems.",

    modules: [
      {
        id: "mod-1",
        title: "Frontend Basics",
        lessons: generateLessons("fullstack", "frontend", 20)
      },
      {
        id: "mod-2",
        title: "Backend Basics",
        lessons: generateLessons("fullstack", "backend", 20)
      }
    ]
  }
};

/* ================= ENGINE GENERATOR ================= */

function generateLessons(courseKey, moduleKey, count) {
  const lessons = [];

  for (let i = 1; i <= count; i++) {
    lessons.push({
      id: `${courseKey}-${moduleKey}-${i}`,
      title: `Lesson ${i}`,
      content: {
        text: `This is Lesson ${i} of ${moduleKey}. (Auto-generated content system)`
      },
      video: null,
      resources: [],
      quiz: i % 3 === 0 ? [
        {
          question: "What did you learn in this lesson?",
          options: ["Option A", "Option B", "Option C"],
          answer: "Option A"
        }
      ] : null,
      completed: false
    });
  }

  return lessons;
}

/* ================= SAFETY LAYER ================= */

function safeCourses(data) {
  Object.keys(data).forEach(key => {
    if (!data[key].modules) data[key].modules = [];

    data[key].modules.forEach(mod => {
      if (!mod.lessons) mod.lessons = [];

      mod.lessons.forEach(lesson => {
        if (!lesson.content) lesson.content = { text: "Content loading..." };
      });
    });
  });

  return data;
}

safeCourses(courses);

if (typeof window !== "undefined") {
  window.courses = courses;
}
