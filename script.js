document.documentElement.style.overflow = 'hidden';  // Para o elemento <html>
document.body.style.overflow = 'hidden';  // Para o elemento <body>

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("header nav a");
  const sections = document.querySelectorAll("section");

  // Garante que a Home inicie visível
  const homeSection = document.querySelector("#home");
  homeSection.classList.add("visible");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove a classe 'active' de todos os links e adiciona ao atual
      navLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");

      // Identifica a seção correspondente
      const target = document.querySelector(link.getAttribute("href"));

      // Remove 'visible' de todas as seções e adiciona apenas na seção correspondente
      sections.forEach(section => {
        section.classList.remove("visible");
        section.style.display = "none"; // Esconde todas as seções
      });
     
      
        
      target.classList.add("visible");
      target.style.display = "flex"; // Mostra a seção correspondente
      
      // Faz a rolagem suave
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
