const landscapeMessage = document.getElementById("landscapeMessage");

/*function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    landscapeMessage.style.display = 'block';
  } else {
    landscapeMessage.style.display = 'none';
  }
}*/

// Initial check on page load
//checkOrientation();

// Check orientation whenever the window is resized
//window.addEventListener('resize', checkOrientation);

function startTransition(){
  document.getElementById("wipe-text").style.animation =
    "wipeout 0.5s linear 2.1s";
  const texts = [
    "RIDE",
    "OWER",
    "URPOSE",
    "ASSION",
    "LAN",
    "RACTICE",
    "ERSEVERANCE",
    "RECISION",
    "ROGRESS",
    "ROGRAMMING",
    "HOENIX",
  ];
  let i = 0;
  let toggle = false;
  setInterval(() => {
    if (i < texts.length) {
      document.getElementById("wipe-text").innerHTML = texts[i];
      if (i == 10) {
        document.getElementsByClassName("wipe-container")[0].classList.toggle("orange");
        document.getElementsByClassName("cc")[0].classList.toggle("orange");
        toggle = true;
      }
      document.getElementById("wipe-text").style.animation =
        "wipein 0.5s linear,wipeout 0.5s linear 1.6s";
      setTimeout(() => {
        document.getElementById("wipe-text").innerHTML = "";
        document.getElementById("wipe-text").style.animation = "";
        if (toggle) {
          document
            .getElementsByClassName("wipe-container")[0]
            .classList.toggle("orange");
          document.getElementsByClassName("cc")[0].classList.toggle("orange");
          toggle = false;
        }
      }, 2000);
      i++;
    } else {
      i = 0;
      document.getElementById("wipe-text").innerHTML = "HOENIX";
    }
  }, 2100);
}

const sections = document.querySelectorAll(".dive-in");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop - window.innerHeight <= 0) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        sidebarToggle.style.color = '#000'; // Change color when sidebar is open
    }
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        sidebarToggle.style.color = '#fff'; // Change color when sidebar is open
    }

    sidebarToggle.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    overlay.addEventListener('click', closeSidebar);

    // Optionally close sidebar when a link is clicked
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});
