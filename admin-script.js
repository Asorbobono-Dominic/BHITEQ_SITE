document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".dashboard-section");
    const navItems = document.querySelectorAll(".sidebar nav ul li");
  
    // Sidebar navigation toggle
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        if (item.id === "logout") {
          localStorage.removeItem("isAdmin");
          window.location.href = "admin-login.html";
          return;
        }
  
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
  
        sections.forEach(section => {
          section.classList.remove("active");
          if (section.id === item.dataset.section) {
            section.classList.add("active");
          }
        });
      });
    });
  
    // Redirect non-admins
    if (localStorage.getItem("isAdmin") !== "true") {
      window.location.href = "admin-login.html";
    }
  });
  