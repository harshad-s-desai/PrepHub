# Placement Preparation Hub (PrepHub)

A responsive, SaaS-style frontend web application designed to help engineering students systematically prepare for campus and off-campus placements. The application dynamically adapts its syllabus and recommendations based on the user's target role and tracks progress entirely on the client side.

## 🚀 Key Features

* **Dynamic Role-Based Syllabus:** Tailored preparation tracks for 10 distinct roles (Software Engineer, Full Stack, Data Analyst, AI/ML, DevOps, etc.).
* **Performance Analytics:** Real-time calculation of overall placement readiness based on completed topics in DSA, Core CS, and Development.
* **Target Company Database:** Curated hiring criteria and skill requirements for 17+ top recruiters (TCS, Google, Flipkart, Amazon, Zoho, etc.).
* **Interactive Skill Roadmaps:** Clickable skill tags that generate step-by-step preparation timelines for specific technologies (e.g., DBMS, System Design, React).
* **Daily Goals & Streak Tracking:** Built-in productivity tools to maintain consistency.
* **Local Persistence:** Zero backend required. All user data, progress, and settings are securely saved in the browser's `localStorage`.
* **Theming:** Full Light and Dark mode support.

## 🛠️ Technology Stack

* **HTML5:** Semantic structuring.
* **CSS3:** Custom responsive layout, CSS variables, Flexbox/Grid, and modern UI/UX design (no external CSS frameworks).
* **Vanilla JavaScript (ES6+):** State management, dynamic DOM manipulation, and interactive modal logic.
* **Storage:** Window `localStorage` API.
* **Icons:** FontAwesome.

## 📂 Project Structure

```text
placement-preparation-hub/
│
├── index.html      # Main application structure and modals
├── style.css       # Custom styling, responsive rules, and theme variables
└── script.js       # App state, data structures, and interactive logic
