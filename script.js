// --- EXPANDED COMPANY DATABASE (INDIAN TECH, IT SERVICES, GLOBAL TECH) ---
const companiesData = [
    // --- 1. Top Indian IT Services (Tier-1 Campus & Off-Campus Recruiters) ---
    {
        id: "tcs", name: "TCS", origin: "India", type: "IT Services", difficulty: "Medium", icon: "fa-laptop-code",
        desc: "Tata Consultancy Services evaluates aptitude, foundational programming, and advanced DSA for Digital/Prime bands.",
        roles: [
            { title: "Ninja (Associate Software Engineer)", requirements: ["Programming Fundamentals", "Aptitude", "SQL", "DBMS", "Core CS"] },
            { title: "Digital / Prime (Specialist Programmer)", requirements: ["Advanced DSA", "System Design Fundamentals", "Full Stack Development", "Operating Systems"] }
        ]
    },
    {
        id: "infosys", name: "Infosys", origin: "India", type: "IT Services", difficulty: "Medium", icon: "fa-network-wired",
        desc: "Infosys hiring consists of HackWithInfy/InfyTQ coding assessments and comprehensive tech fundamentals.",
        roles: [
            { title: "Systems Engineer (SE)", requirements: ["Programming", "OOP", "DBMS", "Aptitude", "Logical Reasoning"] },
            { title: "Specialist Programmer (SP / DSE)", requirements: ["Advanced DSA", "Dynamic Programming", "Graph Traversal", "System Design"] }
        ]
    },
    {
        id: "wipro", name: "Wipro", origin: "India", type: "IT Services", difficulty: "Medium", icon: "fa-code-branch",
        desc: "Wipro Elite National Talent Hunt & Turbo bands emphasize logical ability, pseudocode, and coding questions.",
        roles: [
            { title: "Project Engineer (Elite Band)", requirements: ["Programming Basics", "DSA Basics", "Aptitude", "Verbal Ability", "Networking"] },
            { title: "Turbo Engineer", requirements: ["Data Structures", "OOP", "Database Management", "Problem Solving"] }
        ]
    },
    {
        id: "cognizant", name: "Cognizant", origin: "India", type: "IT Services", difficulty: "Medium", icon: "fa-terminal",
        desc: "GenC, GenC Next, and GenC Elevate evaluations focus on hands-on coding, algorithms, and full-stack modules.",
        roles: [
            { title: "GenC (Software Developer)", requirements: ["Aptitude", "Programming", "SQL", "HTML/CSS Basics"] },
            { title: "GenC Next / Elevate", requirements: ["Data Structures & Algorithms", "Full Stack", "REST APIs", "DBMS", "Cloud Basics"] }
        ]
    },
    {
        id: "capgemini", name: "Capgemini", origin: "India/Global", type: "IT Services", difficulty: "Medium", icon: "fa-cubes",
        desc: "Assesses algorithmic thinking through pseudocode, game-based aptitude, and technical interviews.",
        roles: [
            { title: "Analyst / Software Engineer", requirements: ["Pseudocode", "Programming", "Aptitude", "DBMS", "OOP"] },
            { title: "Senior Analyst", requirements: ["Data Structures", "SQL", "Cloud Basics", "Web Technologies"] }
        ]
    },
    {
        id: "accenture", name: "Accenture", origin: "India/Global", type: "IT Services", difficulty: "Medium", icon: "fa-code",
        desc: "Cognitive assessment, critical thinking, technical assessments, and coding questions.",
        roles: [
            { title: "Associate Software Engineer (ASE)", requirements: ["Cognitive Ability", "Coding Fundamentals", "Cloud Basics", "Networking", "Security"] },
            { title: "Advanced ASE", requirements: ["Data Structures & Algorithms", "System Architecture", "SQL Optimization", "OOP"] }
        ]
    },

    // --- 2. Top Indian Product Tech & Unicorns ---
    {
        id: "zoho", name: "Zoho Corporation", origin: "India", type: "India Tech", difficulty: "Hard", icon: "fa-cube",
        desc: "Pure core engineering interview process: strict focus on C/C++/Java, memory management, and writing code without libraries.",
        roles: [
            { title: "Software Developer", requirements: ["Basic Programming (C/Java)", "Advanced Recursion", "DSA Without Built-in Libraries", "Application Design (LLD)", "DBMS"] },
            { title: "QA Engineer", requirements: ["Software Testing", "Java/Python", "Test Case Design", "Automation Basics"] }
        ]
    },
    {
        id: "flipkart", name: "Flipkart", origin: "India", type: "India Tech", difficulty: "Very Hard", icon: "fa-shopping-bag",
        desc: "India's premier e-commerce tech platform: machine coding round, advanced DSA, and low-level object-oriented design.",
        roles: [
            { title: "Software Development Engineer I (SDE 1)", requirements: ["Advanced DSA", "Machine Coding (LLD)", "Object-Oriented Design", "Concurrency & Threads", "DBMS"] }
        ]
    },
    {
        id: "zomato", name: "Zomato / Blinkit", origin: "India", type: "India Tech", difficulty: "Hard", icon: "fa-utensils",
        desc: "High-scale consumer tech startup focusing on rapid problem-solving, clean code, and API architecture.",
        roles: [
            { title: "Software Engineer", requirements: ["Data Structures & Algorithms", "System Design", "Golang / Node.js / Python", "Database Indexing", "Caching"] }
        ]
    },
    {
        id: "swiggy", name: "Swiggy", origin: "India", type: "India Tech", difficulty: "Very Hard", icon: "fa-motorcycle",
        desc: "Hyperlocal logistics leader testing data structures, machine coding, scalable distributed backend systems.",
        roles: [
            { title: "SDE I", requirements: ["Data Structures", "Dynamic Programming", "Low-Level Design", "Operating Systems", "Microservices Basics"] }
        ]
    },
    {
        id: "jio", name: "Jio Platforms (Reliance)", origin: "India", type: "India Tech", difficulty: "Medium", icon: "fa-bolt",
        desc: "Telecom and digital ecosystem hiring GETs and software engineers across 5G, cloud, and distributed applications.",
        roles: [
            { title: "Graduate Engineer Trainee (GET)", requirements: ["Programming (Java/Python)", "Computer Networks", "DBMS", "Operating Systems", "Aptitude"] },
            { title: "Software Engineer", requirements: ["Data Structures", "Cloud Fundamentals", "REST APIs", "Microservices"] }
        ]
    },

    // --- 3. Global Technology Product Companies ---
    {
        id: "google", name: "Google", origin: "Global", type: "Global Product", difficulty: "Very Hard", icon: "fa-google",
        desc: "Rigorous focus on high-level mathematical problem solving, algorithm design, graph theory, and scale.",
        roles: [
            { title: "Software Engineer (L3 / SDE)", requirements: ["Advanced DSA", "Dynamic Programming", "Graph Traversal", "System Design", "Operating Systems"] },
            { title: "Data Scientist", requirements: ["Python", "Machine Learning", "Probability & Statistics", "Data Structures", "SQL"] }
        ]
    },
    {
        id: "microsoft", name: "Microsoft", origin: "Global", type: "Global Product", difficulty: "Hard", icon: "fa-microsoft",
        desc: "Focuses on solid data structure fundamentals, clean OOP design, memory management, and system architecture.",
        roles: [
            { title: "Software Engineer", requirements: ["Data Structures & Algorithms", "OOP", "Operating Systems", "System Design", "Computer Networks"] }
        ]
    },
    {
        id: "amazon", name: "Amazon", origin: "Global", type: "Global Product", difficulty: "Hard", icon: "fa-amazon",
        desc: "Evaluates algorithms, tree/graph traversal, and behavioral alignment with 16 Leadership Principles.",
        roles: [
            { title: "SDE I", requirements: ["Data Structures & Algorithms", "Trees & Graphs", "Leadership Principles", "Low-Level Design", "DBMS"] }
        ]
    },
    {
        id: "oracle", name: "Oracle", origin: "Global", type: "Global Product", difficulty: "Hard", icon: "fa-database",
        desc: "Deep focus on relational databases, SQL query optimization, operating system internals, and core C++/Java.",
        roles: [
            { title: "Member of Technical Staff (MTS)", requirements: ["DBMS", "SQL Optimization", "Operating Systems", "Data Structures & Algorithms", "C++ / Java"] }
        ]
    },
    {
        id: "ibm", name: "IBM", origin: "Global", type: "Global Product", difficulty: "Medium", icon: "fa-server",
        desc: "Enterprise compute and cloud pioneer hiring across full-stack, cloud computing, and AI services.",
        roles: [
            { title: "Associate System Engineer", requirements: ["Programming", "Cloud Basics", "Data Structures", "DBMS", "Operating Systems"] }
        ]
    },

    // --- 4. Global FinTech & Consulting Leaders ---
    {
        id: "jpmorgan", name: "JPMorgan Chase & Co.", origin: "Global", type: "FinTech / Consulting", difficulty: "Hard", icon: "fa-landmark",
        desc: "Software Engineer Program (SEP) and Code for Good hackathon evaluating Java, APIs, security, and resilient systems.",
        roles: [
            { title: "Software Engineer (SEP)", requirements: ["Data Structures", "Java / Spring Boot", "SQL & Database Indexing", "System Design", "Operating Systems"] }
        ]
    },
    {
        id: "deloitte", name: "Deloitte", origin: "Global", type: "FinTech / Consulting", difficulty: "Medium", icon: "fa-chart-pie",
        desc: "Tech consulting and advisory roles evaluating data engineering, SQL, cloud foundations, and communication.",
        roles: [
            { title: "Technology Analyst", requirements: ["SQL", "Python", "Business Analytics", "DBMS", "Aptitude", "Communication"] }
        ]
    }
];

// --- COMPREHENSIVE ROADMAP DATABASE FOR INTERACTIVE MODAL ---
const topicRoadmaps = {
    "Data Structures & Algorithms": [
        { title: "Linear Structures", desc: "Master Arrays, Two Pointers, Sliding Window, Linked Lists, Stacks, and Queues." },
        { title: "Trees & Hierarchical Models", desc: "Binary Trees, Binary Search Trees, Traversals (Inorder/Preorder/Postorder), and Heaps." },
        { title: "Non-Linear & Graphs", desc: "Graph representations, BFS, DFS, Dijkstra's algorithm, and Topological Sorting." },
        { title: "Dynamic Programming & Optimization", desc: "Memoization, Tabulation, Knapsack variations, Longest Common Subsequence, and Backtracking." }
    ],
    "Advanced DSA": [
        { title: "Tree & Graph Mastery", desc: "Segment Trees, Fenwick Trees, Disjoint Set Union (DSU), and Tarjan's Bridge algorithms." },
        { title: "Hard Dynamic Programming", desc: "Digit DP, Bitmask DP, and Matrix Exponentiation." },
        { title: "String Algorithms", desc: "Tries, KMP string matching, and Rabin-Karp hashing." }
    ],
    "System Design": [
        { title: "Architecture Basics", desc: "Client-server model, HTTP/HTTPS, DNS, Load Balancing, and Horizontal vs. Vertical Scaling." },
        { title: "Data Tier & Caching", desc: "SQL vs NoSQL, Master-Slave replication, Sharding, Redis/Memcached caching strategies." },
        { title: "Asynchronous Processing", desc: "Message brokers (Kafka/RabbitMQ), Event-driven design, and Microservices decomposition." },
        { title: "Reliability & CAP Theorem", desc: "Availability vs Consistency, Rate Limiting, CDN delivery, and API Gateways." }
    ],
    "Low-Level Design": [
        { title: "OOP Principles", desc: "Encapsulation, Polymorphism, Inheritance, Abstraction, and Class Relationships." },
        { title: "SOLID Principles", desc: "Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion." },
        { title: "Design Patterns", desc: "Factory, Singleton, Observer, Strategy, and Builder patterns." },
        { title: "Machine Coding Practice", desc: "Design practical systems: Parking Lot, Snake & Ladder, Splitwise, or BookMyShow." }
    ],
    "DBMS": [
        { title: "Relational Modeling", desc: "Entity-Relationship (ER) diagrams, Primary/Foreign keys, and Functional Dependencies." },
        { title: "Normalization", desc: "1NF, 2NF, 3NF, and BCNF to prevent update, insertion, and deletion anomalies." },
        { title: "Transactions & ACID", desc: "Atomicity, Consistency, Isolation, Durability, and Concurrency Control locks." },
        { title: "Query Optimization", desc: "B-Trees, Hash Indexing, and Query execution plan analysis." }
    ],
    "SQL": [
        { title: "CRUD & Filtering", desc: "SELECT, INSERT, UPDATE, DELETE, WHERE, and LIKE pattern matching." },
        { title: "Aggregations & Joins", desc: "GROUP BY, HAVING, INNER JOIN, LEFT/RIGHT OUTER JOINS, and Self Joins." },
        { title: "Advanced SQL", desc: "Subqueries, CTEs (Common Table Expressions), Window functions (ROW_NUMBER, RANK), and Indexes." }
    ],
    "Operating Systems": [
        { title: "Process & Threads", desc: "Process Control Blocks (PCB), Context Switching, Multi-threading, and CPU Scheduling algorithms." },
        { title: "Synchronization & Concurrency", desc: "Critical Section, Mutex locks, Semaphores, and Race conditions." },
        { title: "Deadlocks", desc: "Deadlock characterization, Banker's algorithm, Detection, and Prevention." },
        { title: "Memory Management", desc: "Paging, Segmentation, Virtual Memory, and Page Replacement policies (LRU/FIFO)." }
    ],
    "Computer Networks": [
        { title: "Network Models", desc: "7-layer OSI Model vs. 4-layer TCP/IP Model and encapsulation." },
        { title: "Protocols & Addressing", desc: "IPv4/IPv6, Subnetting, MAC addresses, ARP, and ICMP." },
        { title: "Transport Layer", desc: "TCP 3-way handshake, UDP, Flow Control, and Congestion Control." },
        { title: "Application Layer", desc: "HTTP, HTTPS (SSL/TLS handshake), DNS lookup, and WebSockets." }
    ],
    "OOP": [
        { title: "Core OOP Pillars", desc: "Classes, Objects, Abstraction, Encapsulation, Inheritance, and Polymorphism." },
        { title: "Method Binding", desc: "Compile-time (Overloading) vs Run-time (Overriding) Polymorphism." },
        { title: "Advanced OOP", desc: "Abstract classes, Interfaces, Multiple Inheritance workarounds, and Destructors." }
    ],
    "Programming Fundamentals": [
        { title: "Syntax & Flow", desc: "Variables, Primitive types, Conditionals (if/else), and Loops (for/while)." },
        { title: "Functions & Scope", desc: "Function parameters, return types, pass-by-value vs pass-by-reference, and Scope." },
        { title: "Arrays & Strings", desc: "Iteration, character encodings, string manipulation, and standard libraries." }
    ],
    "Aptitude": [
        { title: "Quantitative Aptitude", desc: "Time & Work, Speed-Time-Distance, Percentages, Ratios, and Profit & Loss." },
        { title: "Logical Reasoning", desc: "Blood Relations, Syllogisms, Coding-Decoding, and Seating Arrangements." },
        { title: "Verbal Ability", desc: "Reading comprehension, sentence correction, synonyms/antonyms, and grammar." }
    ],
    "Machine Learning": [
        { title: "Data Preparation", desc: "Data cleaning, feature scaling, handling missing values, and train/test splits." },
        { title: "Supervised Learning", desc: "Linear Regression, Logistic Regression, Decision Trees, and Random Forests." },
        { title: "Evaluation Metrics", desc: "Precision, Recall, F1-Score, Confusion Matrix, and ROC-AUC curves." }
    ],
    "Cloud Basics": [
        { title: "Cloud Fundamentals", desc: "IaaS vs PaaS vs SaaS, Public vs Private cloud, and Availability Zones." },
        { title: "Core Services", desc: "Compute instances (EC2/VMs), Object Storage (S3), and Virtual Networks (VPC)." },
        { title: "Identity & Security", desc: "IAM users, roles, policies, and encryption basics." }
    ]
};

// --- COMPLETE 10 ROLE SYLLABUS FROM YOUR PROVIDED CURRICULUM ---
const roleSyllabus = {
    "Software Engineer / SDE": {
        "Programming": ["Variables & Data Types", "Operators", "Conditional Statements", "Loops", "Functions", "Recursion", "Arrays", "Strings", "Pointers / References", "Memory Management", "Exception Handling", "File Handling", "Standard Library"],
        "OOP": ["Classes & Objects", "Constructors & Destructors", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Method Overloading", "Method Overriding", "Interfaces", "Composition vs Inheritance", "SOLID Principles", "Common Design Patterns"],
        "Data Structures": ["Arrays", "Strings", "Linked Lists", "Stack", "Queue", "Hash Table", "HashMap / HashSet", "Trees", "Binary Search Tree", "Heap / Priority Queue", "Graphs", "Trie"],
        "Algorithms": ["Time & Space Complexity", "Searching", "Binary Search", "Sorting", "Two Pointers", "Sliding Window", "Recursion", "Backtracking", "Greedy Algorithms", "Divide & Conquer", "Dynamic Programming", "Graph Traversal", "BFS", "DFS", "Shortest Path", "Topological Sorting"],
        "DBMS": ["ER Model", "Relational Model", "Keys", "Functional Dependencies", "Normalization", "SQL", "Joins", "Subqueries", "Views", "Indexing", "Transactions", "ACID Properties", "Concurrency Control", "Deadlocks"],
        "Operating Systems": ["Processes", "Threads", "Process Scheduling", "CPU Scheduling Algorithms", "Synchronization", "Deadlocks", "Memory Management", "Virtual Memory", "Paging", "Segmentation", "File Systems"],
        "Computer Networks": ["OSI Model", "TCP/IP Model", "IP Addressing", "Subnetting", "TCP", "UDP", "HTTP", "HTTPS", "DNS", "DHCP", "Routing", "Network Security Basics"],
        "System Design": ["Client-Server Architecture", "APIs", "REST APIs", "Scalability", "Load Balancing", "Caching", "Databases", "SQL vs NoSQL", "Message Queues", "Microservices Basics"]
    },
    "Full Stack Developer": {
        "HTML": ["Structure", "Semantic HTML", "Forms", "Input Types", "Tables", "Multimedia", "Accessibility", "SEO Basics"],
        "CSS": ["Selectors", "Box Model", "Display", "Positioning", "Flexbox", "CSS Grid", "Responsive Design", "Media Queries", "Animations", "Transitions", "CSS Variables"],
        "JavaScript": ["Variables", "Data Types", "Functions", "Arrays", "Objects", "DOM Manipulation", "Events", "Event Bubbling", "ES6+", "Destructuring", "Spread/Rest", "Promises", "Async/Await", "Fetch API", "Error Handling", "LocalStorage"],
        "Frontend Framework": ["Components", "Props", "State", "Events", "Routing", "Forms", "API Integration", "State Management", "React Hooks"],
        "Backend": ["Server Basics", "REST APIs", "Routing", "Middleware", "Authentication", "Authorization", "Error Handling", "API Validation", "File Uploads"],
        "Database": ["SQL", "Tables", "CRUD", "Joins", "Relationships", "Indexing", "Transactions", "NoSQL Basics"],
        "Git/GitHub": ["Git Basics", "Repository", "Commit", "Branch", "Merge", "Pull Request", "Merge Conflicts", "GitHub Workflow"],
        "Deployment": ["Hosting", "Environment Variables", "Build Process", "Domain Basics", "HTTPS", "CI/CD Basics"]
    },
    "Backend Developer": {
        "Programming": ["C++ / Java / Python / Node", "Data Types", "Functions", "OOP", "Exception Handling", "File Handling", "Collections"],
        "DSA": ["Arrays", "Strings", "Linked Lists", "Stack", "Queue", "Hashing", "Trees", "Graphs", "Sorting", "Searching", "Dynamic Programming"],
        "Backend Fundamentals": ["Client-Server Architecture", "HTTP", "HTTPS", "Request/Response", "REST", "CRUD", "API Design", "Middleware", "Authentication", "Authorization", "Sessions", "Cookies", "JWT"],
        "Databases": ["SQL", "CRUD", "Joins", "Subqueries", "Indexing", "Transactions", "Normalization", "ACID", "Query Optimization"],
        "Backend Security": ["Password Hashing", "Input Validation", "SQL Injection", "XSS", "CSRF", "Rate Limiting"],
        "System Design": ["Scalability", "Load Balancing", "Caching", "Database Scaling", "Queues", "Microservices", "Monolith vs Microservices"]
    },
    "Frontend Developer": {
        "HTML": ["Semantic HTML", "Forms", "Tables", "Accessibility", "SEO Basics"],
        "CSS": ["Box Model", "Flexbox", "Grid", "Positioning", "Responsive Design", "Media Queries", "Animations", "Transitions"],
        "JavaScript": ["Variables", "Functions", "Arrays", "Objects", "DOM", "Events", "ES6+", "Promises", "Async/Await", "Fetch API", "JSON", "Error Handling"],
        "React": ["Components", "Props", "State", "Hooks", "useState", "useEffect", "Conditional Rendering", "Lists", "Forms", "Routing", "API Integration"],
        "Web Concepts": ["HTTP/HTTPS", "Browser Architecture", "Cookies", "LocalStorage", "SessionStorage", "REST APIs", "CORS"],
        "Performance": ["Lazy Loading", "Code Splitting", "Image Optimization", "Caching", "Web Performance Basics"],
        "Tools": ["Git", "GitHub", "npm", "Browser DevTools", "VS Code"]
    },
    "Data Analyst": {
        "Excel": ["Basic Formulas", "IF", "SUMIF", "COUNTIF", "VLOOKUP/XLOOKUP", "Pivot Tables", "Charts", "Conditional Formatting", "Data Cleaning"],
        "SQL": ["SELECT", "WHERE", "GROUP BY", "HAVING", "ORDER BY", "Joins", "Subqueries", "CTEs", "Window Functions", "CASE", "Aggregate Functions"],
        "Statistics": ["Mean, Median, Mode", "Variance", "Standard Deviation", "Probability", "Distribution", "Correlation", "Regression", "Hypothesis Testing"],
        "Python": ["Python Basics", "NumPy", "Pandas", "Data Cleaning", "Data Transformation", "Matplotlib", "Seaborn", "Exploratory Data Analysis"],
        "Data Visualization": ["Charts", "Dashboards", "Power BI", "Tableau", "KPIs", "Filters", "Interactive Dashboards"],
        "Business Skills": ["Problem Solving", "Business Metrics", "Data Storytelling", "Report Generation", "Presenting Insights"]
    },
    "Data Scientist": {
        "Python": ["Python Fundamentals", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Cleaning", "Data Preprocessing"],
        "Mathematics": ["Linear Algebra", "Vectors", "Matrices", "Probability", "Statistics", "Calculus Basics", "Gradients"],
        "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "Decision Trees", "Random Forest", "SVM", "KNN", "Naive Bayes", "Ensemble Methods"],
        "ML Concepts": ["Train/Test Split", "Cross Validation", "Overfitting", "Underfitting", "Bias vs Variance", "Feature Engineering", "Feature Selection", "Hyperparameter Tuning"],
        "Model Evaluation": ["Accuracy", "Precision", "Recall", "F1 Score", "Confusion Matrix", "ROC-AUC", "MAE", "MSE", "RMSE", "R²"],
        "SQL": ["CRUD", "Joins", "Aggregations", "Subqueries", "CTE", "Window Functions"],
        "Advanced": ["NLP Basics", "Time Series", "Recommendation Systems", "Model Deployment Basics"]
    },
    "AI / ML Engineer": {
        "Python": ["Python Fundamentals", "OOP", "NumPy", "Pandas", "Matplotlib", "Data Processing"],
        "Mathematics": ["Linear Algebra", "Matrices", "Vectors", "Probability", "Statistics", "Calculus", "Gradients"],
        "Machine Learning": ["Regression", "Classification", "Clustering", "Decision Trees", "Random Forest", "SVM", "KNN", "Ensemble Learning", "Feature Engineering", "Model Selection"],
        "Deep Learning": ["Neural Networks", "Perceptron", "Activation Functions", "Forward Propagation", "Backpropagation", "Loss Functions", "Optimizers", "CNN", "RNN", "LSTM", "Transformers"],
        "Computer Vision": ["Image Processing", "Image Classification", "Object Detection", "CNN", "OpenCV"],
        "NLP": ["Text Processing", "Tokenization", "Embeddings", "Word Embeddings", "Transformers", "Attention", "Sentiment Analysis"],
        "Generative AI": ["LLMs", "Prompt Engineering", "Embeddings", "Vector Databases", "RAG", "Fine-Tuning Basics", "LLM APIs"],
        "ML Deployment": ["Model Serialization", "REST APIs", "FastAPI/Flask", "Docker", "Cloud Basics", "Model Monitoring"]
    },
    "Cloud / DevOps Engineer": {
        "Linux": ["Linux Commands", "File System", "Permissions", "Processes", "Shell Scripting", "Package Management", "SSH"],
        "Networking": ["TCP/IP", "DNS", "HTTP/HTTPS", "IP Addressing", "Subnetting", "Routing", "Firewalls", "Load Balancing"],
        "Git": ["Repository", "Branches", "Merge", "Pull Requests", "Git Workflow"],
        "Cloud": ["AWS / Azure / GCP", "Compute", "Storage", "Databases", "Networking", "IAM", "Monitoring", "Serverless Basics"],
        "Docker": ["Containers", "Images", "Dockerfile", "Docker Compose", "Container Networking", "Volumes"],
        "CI/CD": ["Continuous Integration", "Continuous Deployment", "Build Pipelines", "Automated Testing", "Deployment Pipelines"],
        "Kubernetes": ["Pods", "Services", "Deployments", "ConfigMaps", "Secrets", "Scaling"],
        "Infrastructure": ["Infrastructure as Code", "Terraform Basics", "Monitoring", "Logging", "Backup", "Security"]
    },
    "Cybersecurity Analyst": {
        "Networking": ["OSI Model", "TCP/IP", "IP Addressing", "Ports", "TCP/UDP", "DNS", "HTTP/HTTPS", "Firewalls", "VPN"],
        "Linux": ["Commands", "File Permissions", "Processes", "Users", "Logs", "Shell Scripting"],
        "Cybersecurity Fundamentals": ["CIA Triad", "Authentication", "Authorization", "Encryption", "Hashing", "Digital Signatures", "Security Policies"],
        "Common Attacks": ["Phishing", "Malware", "Ransomware", "SQL Injection", "XSS", "Brute Force", "DDoS", "Social Engineering"],
        "Web Security": ["OWASP Top 10", "Authentication Security", "Session Security", "Input Validation", "Access Control"],
        "Security Monitoring": ["Logs", "SIEM", "Alerts", "Threat Detection", "Incident Response", "Security Events"],
        "Cryptography": ["Symmetric Encryption", "Asymmetric Encryption", "Hash Functions", "Public/Private Keys", "SSL/TLS Basics"]
    },
    "QA / Automation Engineer": {
        "Software Testing": ["SDLC", "STLC", "Test Cases", "Test Scenarios", "Test Plans", "Bug Life Cycle", "Regression Testing", "Smoke Testing", "Sanity Testing", "Integration Testing", "System Testing", "UAT"],
        "Manual Testing": ["Requirement Analysis", "Test Case Design", "Boundary Value Analysis", "Equivalence Partitioning", "Defect Reporting", "Test Documentation"],
        "Programming": ["Java / Python / JS", "Variables", "Functions", "OOP", "Collections", "Exception Handling"],
        "SQL": ["SELECT", "WHERE", "Joins", "GROUP BY", "Subqueries", "CRUD", "Database Validation"],
        "Automation": ["Selenium", "Playwright", "WebDriver", "Locators", "Assertions", "Test Suites", "Page Object Model"],
        "API Testing": ["HTTP", "REST APIs", "GET", "POST", "PUT", "DELETE", "Status Codes", "JSON", "Postman"],
        "CI/CD": ["Git", "GitHub", "Jenkins/GitHub Actions", "Automated Test Execution", "Test Reports"]
    }
};

const aptitudeTopics = [
    { id: 1, title: "Time & Work", category: "Quantitative", status: false },
    { id: 2, title: "Speed, Distance & Time", category: "Quantitative", status: false },
    { id: 3, title: "Percentages & Ratios", category: "Quantitative", status: false },
    { id: 4, title: "Profit, Loss & Discount", category: "Quantitative", status: false },
    { id: 5, title: "Blood Relations", category: "Logical Reasoning", status: false },
    { id: 6, title: "Syllogisms", category: "Logical Reasoning", status: false },
    { id: 7, title: "Seating Arrangement", category: "Logical Reasoning", status: false },
    { id: 8, title: "Reading Comprehension", category: "Verbal Ability", status: false }
];

// Helper to escape HTML and prevent XSS
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
}

// Storage Key constant
const STORAGE_KEY = 'prepHubState_v7';

const defaultState = {
    isLoggedIn: false,
   user: { name: "", email: "", contact: "", role: "", education: "", theme: "light", streak: 1, lastLogin: new Date().toDateString() },
    roleProgress: {},
    aptitudeProgress: aptitudeTopics,
    goals: [
        { id: 1, text: "Solve 2 DSA questions", completed: false },
        { id: 2, text: "Revise SQL joins and subqueries", completed: false }
    ]
};

let appState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultState;
let currentCompanyFilter = "all";

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateUI();
}

function initializeRoleProgress(role) {
    if (!role) return;
    if (!appState.roleProgress[role]) {
        appState.roleProgress[role] = {};
        const categories = roleSyllabus[role];
        if (!categories) return;
        for (const cat in categories) {
            appState.roleProgress[role][cat] = new Array(categories[cat].length).fill(false);
        }
        saveState();
    }
}

// --- Auth Handling ---
function checkAuth() {
    if(appState.isLoggedIn) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'flex';
        
        if (appState.user.role) {
            initializeRoleProgress(appState.user.role);
        }
        
        document.documentElement.setAttribute('data-theme', appState.user.theme);
        updateUI();
        renderCompanies();
        
        const today = new Date().toDateString();
        if(appState.user.lastLogin !== today) {
            appState.user.streak += 1;
            appState.user.lastLogin = today;
            saveState();
        }
    } else {
        document.getElementById('login-container').style.display = 'flex';
        document.getElementById('app-container').style.display = 'none';
    }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    appState.user.name = document.getElementById('login-name').value;
    appState.user.email = document.getElementById('login-email').value;
    appState.user.contact = document.getElementById('login-contact').value;
    appState.user.education = document.getElementById('login-education').value;
    appState.user.role = "";   
    appState.isLoggedIn = true;
    
    saveState();
    checkAuth();
    showToast(`Welcome to PrepHub, ${appState.user.name}! Please set your Target Post in Settings.`);
});

document.getElementById('logout-btn').addEventListener('click', () => {
    appState.isLoggedIn = false;
    saveState();
    location.reload();
});

// --- Dynamic Interface Rendering ---
function updateUI() {
    if(!appState.isLoggedIn) return;
    const role = appState.user.role;
    
    // Topbar & Profile
    const avatarLetter = appState.user.name ? appState.user.name.charAt(0).toUpperCase() : 'S';
    document.querySelector('.avatar').textContent = avatarLetter;
    document.getElementById('display-name').textContent = appState.user.name;
    document.getElementById('display-role').textContent = role || "Setup Required";
    
    document.getElementById('home-greeting').textContent = `Welcome, ${appState.user.name}!`;
    document.getElementById('stat-streak').textContent = appState.user.streak;
    
    // Profile Sidebar Card
    document.getElementById('profile-name').textContent = appState.user.name;
    document.getElementById('profile-role').textContent = role || "Not Selected";
    document.getElementById('profile-edu').textContent = appState.user.education;
    document.getElementById('profile-email').textContent = appState.user.email;
    document.getElementById('profile-contact').textContent = appState.user.contact;

    // Home Recommendations
    document.getElementById('rec-role-title').textContent = role || "No Role Selected";
    
    const descEl = document.getElementById('rec-role-desc');
    if (descEl) {
        descEl.innerHTML = role 
            ? 'Key modules for your desired post. Complete all topics in <strong>My Track</strong> to maximize placement readiness:' 
            : 'Please navigate to Settings and select a Desired Post to generate your customized syllabus.';
    }
    const categories = role ? Object.keys(roleSyllabus[role]).slice(0, 5) : [];
    document.getElementById('recommended-topics-list').innerHTML = categories.length > 0 
        ? categories.map(c => `<li class="tag active-tag">${c}</li>`).join('')
        : '<li class="tag" style="cursor:pointer;" onclick="navigateTo(\'settings\')">Go to Settings to set your Target Post</li>';

    // Settings Input Values
    document.getElementById('setting-name').value = appState.user.name;
    document.getElementById('setting-email').value = appState.user.email;
    document.getElementById('setting-contact').value = appState.user.contact;
    document.getElementById('setting-role').value = role;
    document.getElementById('setting-edu').value = appState.user.education;
    
    // Track, Stats & Aptitude
    renderDashboardStats(role);
    renderMyTrack(role);
    renderAptitude();
    
    // Daily Goals
    const goalsContainer = document.getElementById('goals-container');
    if (goalsContainer) {
        goalsContainer.innerHTML = appState.goals.map(g => `
            <div class="goal-item">
                <input type="checkbox" ${g.completed ? 'checked' : ''} onchange="toggleGoal(${g.id})"> 
                <span style="text-decoration: ${g.completed ? 'line-through' : 'none'}; color: ${g.completed ? 'var(--text-muted)' : 'inherit'}">${escapeHTML(g.text)}</span>
            </div>
        `).join('');
    }
}

function renderDashboardStats(role) {
    
    const statsGrid = document.getElementById('dynamic-stats-grid');
     if(!statsGrid) return;
    
    if (!role || !appState.roleProgress[role]) {
        statsGrid.innerHTML = '<div class="card" style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--text-muted);"><i class="fas fa-cog" style="font-size: 24px; margin-bottom: 12px; color: var(--primary);"></i><h3>Setup Incomplete</h3><p class="mt-2">Please select a Target Post in Settings to view your module progress.</p></div>';
        document.getElementById('stat-readiness').textContent = `0%`;
        document.getElementById('bar-readiness').style.width = `0%`;
        return;
    }
    const progressData = appState.roleProgress[role];
    
    
    let totalTopics = 0;
    let totalCompleted = 0;
    let html = '';
    
    const colors = ['purple-card', 'blue-card', 'insight-card', 'yellow-card'];
    let cIdx = 0;

    for (const cat in progressData) {
        const boolArr = progressData[cat];
        const completed = boolArr.filter(Boolean).length;
        const total = boolArr.length;
        const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
        
        totalTopics += total;
        totalCompleted += completed;

        const themeClass = colors[cIdx % colors.length];
        cIdx++;

        html += `
            <div class="stat-card">
                <div class="stat-header" style="color: var(--text-main);"><h3>${cat}</h3></div>
                <div class="stat-value" style="font-size: 24px;">${percentage}%</div>
                <div class="progress-bar"><div class="progress-fill ${themeClass}" style="width: ${percentage}%;"></div></div>
            </div>
        `;
    }
    
    const overall = totalTopics === 0 ? 0 : Math.round((totalCompleted / totalTopics) * 100);
    document.getElementById('stat-readiness').textContent = `${overall}%`;
    document.getElementById('bar-readiness').style.width = `${overall}%`;
    
    statsGrid.innerHTML = html;
}

function renderMyTrack(role) {
    const trackContainer = document.getElementById('dynamic-track-container');
    
    if(!trackContainer) return;
    document.getElementById('track-role-title').textContent = role || "Unassigned";
    if (!role || !roleSyllabus[role]) {
        trackContainer.innerHTML = '<div class="card" style="padding: 40px; text-align: center; color: var(--text-muted);"><i class="fas fa-road" style="font-size: 32px; margin-bottom: 16px; color: var(--primary);"></i><h3>No Track Available</h3><p class="mt-2">Please navigate to Settings and select a Desired Post to generate your customized syllabus.</p><button type="button" class="btn btn-primary mt-4" onclick="navigateTo(\'settings\')">Go to Settings</button></div>';
        return;
    }

    const categories = roleSyllabus[role];
    const progressData = appState.roleProgress[role];
    let html = '';

    for (const cat in categories) {
        const topics = categories[cat];
        const boolArr = progressData[cat];
        
        let tableRows = topics.map((topic, index) => {
            const isChecked = boolArr[index] ? 'checked' : '';
            return `
                <tr>
                    <td style="width: 60px;"><input type="checkbox" ${isChecked} onchange="toggleSkill('${role}', '${cat}', ${index})"></td>
                    <td><strong>${topic}</strong></td>
                    <td><span class="badge ${boolArr[index] ? 'insight-card' : 'yellow-card'}">${boolArr[index] ? 'Completed' : 'Pending'}</span></td>
                </tr>
            `;
        }).join('');

        html += `
            <div class="card mt-4">
                <h3 class="mb-4" style="color: var(--primary);"><i class="fas fa-layer-group"></i> ${cat}</h3>
                <table class="data-table">
                    <thead><tr><th>Status</th><th>Topic</th><th>Progress</th></tr></thead>
                    <tbody>${tableRows}</tbody>
                </table>
            </div>
        `;
    }
    trackContainer.innerHTML = html;
}

function renderAptitude() {
    const tbody = document.getElementById('aptitude-table-body');
    if(!tbody) return;
    tbody.innerHTML = appState.aptitudeProgress.map((item, index) => `
        <tr>
            <td style="width: 60px;"><input type="checkbox" ${item.status ? 'checked' : ''} onchange="toggleAptitude(${index})"></td>
            <td><strong>${item.title}</strong></td>
            <td>${item.category}</td>
        </tr>
    `).join('');
}

// --- Companies Rendering & Filtering ---
function renderCompanies() {
    const container = document.getElementById('company-grid-container');
    if (!container) return;

    const searchQuery = (document.getElementById('company-search-input')?.value || '').toLowerCase().trim();

    const filtered = companiesData.filter(c => {
        const matchesFilter = currentCompanyFilter === "all" || c.type === currentCompanyFilter;
        const matchesSearch = c.name.toLowerCase().includes(searchQuery) ||
                              c.roles.some(r => r.requirements.some(req => req.toLowerCase().includes(searchQuery)));
        return matchesFilter && matchesSearch;
    });

    if(filtered.length === 0) {
        container.innerHTML = `<div class="card text-center" style="grid-column: 1 / -1; padding: 40px; color: var(--text-muted);">
            <i class="fas fa-search" style="font-size: 32px; margin-bottom: 12px;"></i>
            <h3>No companies match your search</h3>
            <p class="mt-2">Try clearing the search query or switching filters.</p>
        </div>`;
        return;
    }

    container.innerHTML = filtered.map(c => {
        const diffClass = c.difficulty === 'Very Hard' ? 'purple-card' : c.difficulty === 'Hard' ? 'blue-card' : 'insight-card';
        const keyReqs = c.roles[0]?.requirements.slice(0, 3).join(', ') + '...';

        return `
            <div class="company-card" onclick="openCompanyModal('${c.id}')">
                <i class="fab ${c.icon} icon"></i>
                <h3 style="font-size: 18px;">${c.name}</h3>
                <div class="badge-group">
                    <span class="badge ${diffClass}">${c.difficulty}</span>
                    <span class="badge yellow-card">${c.type}</span>
                </div>
                <p class="tag-preview"><i class="fas fa-key"></i> ${keyReqs}</p>
            </div>
        `;
    }).join('');
}

window.setCompanyFilter = function(filterVal, element) {
    currentCompanyFilter = filterVal;
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    renderCompanies();
};

window.filterCompanies = function() {
    renderCompanies();
};

// --- Modals & Interactive Roadmaps ---
window.openCompanyModal = function(companyId) {
    const company = companiesData.find(c => c.id === companyId);
    if(!company) return;

    document.getElementById('modal-company-name').textContent = company.name;
    document.getElementById('modal-company-type').textContent = company.type;
    document.getElementById('modal-company-diff').textContent = company.difficulty;
    document.getElementById('modal-company-diff').className = `badge ${company.difficulty === 'Very Hard' ? 'purple-card' : company.difficulty === 'Hard' ? 'blue-card' : 'insight-card'}`;
    document.getElementById('modal-company-origin').textContent = company.origin;
    document.getElementById('modal-company-desc').textContent = company.desc;

    const iconEl = document.getElementById('modal-company-icon');
    iconEl.className = `fab ${company.icon}`;

    document.getElementById('modal-roles-container').innerHTML = company.roles.map(role => `
        <div class="role-item">
            <h4 style="margin-bottom: 12px; font-size: 16px;"><i class="fas fa-briefcase text-primary"></i> ${role.title}</h4>
            <ul class="skill-tags">
                ${role.requirements.map(req => `<li class="tag clickable" onclick="openRoadmapModal('${escapeHTML(req)}')" title="Click to view roadmap">${req} <i class="fas fa-chevron-right" style="font-size:10px; margin-left:4px;"></i></li>`).join('')}
            </ul>
        </div>
    `).join('');

    document.getElementById('company-modal').classList.add('active');
};

window.openRoadmapModal = function(topic) {
    const cleanTopic = topic.trim();
    let steps = topicRoadmaps[cleanTopic];

    if(!steps) {
        // Fallback search ensuring word boundary match to avoid 'SQL' matching 'NoSQL'
        for(const k in topicRoadmaps) {
            const regex = new RegExp(`\\b${cleanTopic}\\b`, 'i');
            if(regex.test(k) || k.toLowerCase() === cleanTopic.toLowerCase()) {
                steps = topicRoadmaps[k];
                break;
            }
        }
    }

    if(!steps) {
        steps = [
            { title: "Core Foundations", desc: `Understand fundamental syntax, mathematical logic, and core theory behind ${cleanTopic}.` },
            { title: "Hands-on Problem Solving", desc: `Implement key patterns, common data operations, and test corner cases.` },
            { title: "Interview Practice & Review", desc: `Practice standard technical interview questions and optimize solution time/space complexity.` },
            { title: "Real-world Project Implementation", desc: `Integrate ${cleanTopic} concepts into a functional portfolio project.` }
        ];
    }

    document.getElementById('roadmap-title').textContent = cleanTopic;
    document.getElementById('roadmap-timeline-container').innerHTML = steps.map(step => `
        <div class="timeline-item">
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
        </div>
    `).join('');

    document.getElementById('roadmap-modal').classList.add('active');
};

window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
};

document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if(e.target === e.currentTarget) window.closeModal(modal.id);
    });
});

// Close modals on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            window.closeModal(modal.id);
        });
    }
});

// --- Actions & Toggles ---
window.toggleSkill = (role, category, topicIndex) => {
    appState.roleProgress[role][category][topicIndex] = !appState.roleProgress[role][category][topicIndex];
    saveState();
};

window.toggleAptitude = (index) => {
    appState.aptitudeProgress[index].status = !appState.aptitudeProgress[index].status;
    saveState();
};

window.toggleGoal = (id) => {
    const g = appState.goals.find(i => i.id === id);
    if(g) { g.completed = !g.completed; saveState(); }
};

window.addGoal = () => {
    const text = prompt("Enter daily goal:");
    if(text && text.trim() !== "") {
        appState.goals.push({ id: Date.now(), text, completed: false });
        saveState();
    }
};

document.getElementById('theme-toggle').addEventListener('click', () => {
    appState.user.theme = appState.user.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', appState.user.theme);
    saveState();
});

document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const oldRole = appState.user.role;
    const newRole = document.getElementById('setting-role').value;
    
    appState.user.name = document.getElementById('setting-name').value;
    appState.user.email = document.getElementById('setting-email').value;
    appState.user.contact = document.getElementById('setting-contact').value;
    appState.user.role = newRole;
    appState.user.education = document.getElementById('setting-edu').value;
    
    if(oldRole !== newRole) {
        initializeRoleProgress(newRole);
        showToast(`Target Post updated. Syllabus switched to ${newRole}!`);
    } else {
        showToast("Settings saved successfully!");
    }
    saveState();
});

document.getElementById('reset-data-btn').addEventListener('click', () => {
    if(confirm("Permanently erase all saved progress and reset to defaults?")) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
});

// --- Navigation ---
window.navigateTo = function(targetId) {
    document.querySelectorAll('.nav-item, .page-section, .topbar-nav span').forEach(el => el.classList.remove('active'));
    const section = document.getElementById(targetId);
    if(section) section.classList.add('active');
    const sidebarBtn = document.querySelector(`.nav-item[data-target="${targetId}"]`);
    if(sidebarBtn) sidebarBtn.classList.add('active');
    const topbarBtn = document.querySelector(`.topbar-nav span[data-target="${targetId}"]`);
    if(topbarBtn) topbarBtn.classList.add('active');
    if(window.innerWidth <= 768) document.querySelector('.sidebar').classList.remove('open');
};

document.querySelectorAll('.nav-item, .topbar-nav span').forEach(btn => {
    btn.addEventListener('click', (e) => navigateTo(e.currentTarget.dataset.target));
});

document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Initial Boot
document.addEventListener('DOMContentLoaded', checkAuth);