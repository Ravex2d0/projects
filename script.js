const projects = [
  {
    title: "RVX binary format",
    desc: "Custom binary format designed for efficient storage.",
    link: "https://ravex2d0.github.io/rvx/"
  },
  {
    title: "LSB steganography",
    desc: "Hide secret messages inside images using least significant bit (LSB) encoding.",
    link: "https://ravex2d0.github.io/steganography/"
  }
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  container.appendChild(card);
});
