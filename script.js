// Portfolio projects data
const projectData = [
  {
    title: "Weather App",
    desc: "Shows weather info using a public API and temperature toggle.",
    tech: "HTML, CSS, JS, API"
  },
  {
    title: "Expense Tracker",
    desc: "Tracks income and expenses and persists data using LocalStorage.",
    tech: "JavaScript, CSS Grid"
  },
  {
    title: "This Portfolio",
    desc: "Responsive portfolio site with blog CMS and dark mode toggle.",
    tech: "HTML, CSS, JavaScript"
  }
];

// Load projects dynamically
const projectGrid = document.querySelector(".project-grid");
if (projectGrid) {
  projectGrid.innerHTML = projectData.map(p => `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span>${p.tech}</span>
    </div>
  `).join("");
}

// Load or initialize blog posts with fixed past dates
let posts = JSON.parse(localStorage.getItem("blogPosts"));

if (!posts || posts.length === 0) {
  posts = [
    {
      title: "Welcome to My Blog!",
      content: "This is the first blog post on my portfolio. Stay tuned for updates!",
      date: "2024-01-15"
    },
    {
      title: "My Journey as a Web Developer",
      content: "I started learning web development in 2023. I love creating interactive web applications using HTML, CSS, and JavaScript.",
      date: "2024-03-10"
    },
    {
      title: "Tips for Responsive Design",
      content: "Responsive design ensures your website looks great on all devices. Use flexible grids, media queries, and scalable images.",
      date: "2024-05-05"
    }
  ];

  localStorage.setItem("blogPosts", JSON.stringify(posts));
}

// Render blog posts newest first
const blogSection = document.getElementById("blog");
if (blogSection && posts.length > 0) {
  blogSection.innerHTML = ""; // Clear existing
  posts.slice().reverse().forEach(post => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.content}</p>
    `;
    blogSection.appendChild(article);
  });
}

// Dark mode toggle and persistence
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}


