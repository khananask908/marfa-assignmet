const data = [
  { id: 1, title: "Learn JavaScript Basics", category: "programming" },
  { id: 2, title: "UI/UX Design for Beginners", category: "design" },
  { id: 3, title: "Advanced React Patterns", category: "programming" },
  { id: 4, title: "Web Design Principles", category: "design" },
];

function filterResults() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filter = document.getElementById("filter").value;
  const results = document.getElementById("results");

  const filteredData = data.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query);
    const matchesFilter = filter === "all" || item.category === filter;
    return matchesQuery && matchesFilter;
  });

  results.innerHTML = filteredData
    .map(
      (item) =>
        `<li><h3>${item.title}</h3><p>Category: ${item.category}</p></li>`
    )
    .join("");
}

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Initial display of all results
filterResults();
