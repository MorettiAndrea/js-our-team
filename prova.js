const cardContainer = document.querySelector(".card-container");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// let cardsHTML = ``;
// for (const member of teamMembers) {
//   cardsHTML += `<div class ="col-4">
//         <div class = "card d-flex">
//           <div class ="card-img"><img src="${member.img}" alt="${member.name}" /></div>
//           <div class ="card-info bg-dark">
//             <h3 class ="fw-bold text-white">${member.name}</h3>
//             <p class ="text-white fs-4">${member.role}</p>
//             <p class ="text-primary fs-4">${member.email}</p>
//           </div>
//         </div>
//       </div>`;
// }
let cardsHTML = ``;
for (const member of teamMembers) {
  cardsHTML += `<div class ="col-4">
        <div class = "custom-card d-flex f-direction-column">
          <div class ="card-img w -25 bg-success">
          <div class ="card-info bg-dark">
            <h3 class ="fw-bold text-white">${member.name}</h3>
            <p class ="text-white fs-4">${member.role}</p>
            <p class ="text-primary fs-4">${member.email}</p>
          </div>
        </div>
      </div>`;
}
cardContainer.innerHTML = cardsHTML;
