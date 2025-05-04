AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "ChipSafe: Ingredient Warnings Using OCR and Computer - Vision",
    cardImage: "assets/images/project-page/top-view-nacho-chips-with-potato-chips-cheesy-puffs.jpg",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },

  {
    title: "Trendy Tastes",
    cardImage: "assets/images/project-page/trendytasteimg.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  
  {
    title: "YOLO Based Tumor Localization in Mammography",
    cardImage: "assets/images/project-page/yolocancerdet.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Kaggle - Homesite Quote Conversion Prediction",
    cardImage: "assets/images/project-page/0_cDRFtpTiOJFrfzS5.jpg",
    description: "Built a classification model to predict quote conversions using advanced ensemble methods. Worked on a real-world Kaggle competition dataset.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "https://github.com/KamayaniR/Homesite-Quote-Conversion-ML-Assignment-Kaggle-Competition",
  },

  {
    title: "Kaggle - Allstate Claims Severity",
    cardImage: "assets/images/project-page/allstate.png",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Kaggle - Allstate Claims Severity",
    cardImage: "assets/images/project-page/allstate.png",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage,Previewlink, Githublink }) => {
    output += `       
      <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          <div class="header"></div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
              </div>
              <ul class="menu-content" style="display: flex; gap: 12px; align-items: center; margin-top: 10px;">
                ${Previewlink ? `
                  <li><a href="${Previewlink}" class="social-icon" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </a></li>` : ""}
                ${Githublink ? `
                  <li><a href="${Githublink}" class="social-icon" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                        c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                        A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48
                        a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1
                        A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78
                        c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a></li>` : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  });

  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}