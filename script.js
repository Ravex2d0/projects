const projects = [
  {
    title: "RVX Binary Format",
    desc: "Custom binary format designed for efficient storage.",
    link: "https://ravex2d0.github.io/rvx/"
  },
  {
    title: "LSB Steganography",
    desc: "Hide secret messages inside images using least significant bit (LSB) encoding.",
    link: "https://ravex2d0.github.io/steganography/"
  },
  {
    title: "Image Compressor & Resizer",
    desc: "Tool for resizing images and adjusting compression quality while preserving visual clarity.",
    link: "https://ravex2d0.github.io/image-tool/"
  },
  {
    title: "Password Generator",
    desc: "Generate secure passwords from plaintext using a custom key, including uppercase, lowercase, numbers, and symbols.",
    link: "https://ravex2d0.github.io/password-generator/"
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
