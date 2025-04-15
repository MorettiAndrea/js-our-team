const cardContainer = document.querySelector(".card-container");
const newMemberName = document.getElementById("new-member-name");
const newMemberRole = document.getElementById("new-member-role");
const newMemberEmail = document.getElementById("new-member-email");
const newMemberImg = document.getElementById("new-member-img");
const addNewMember = document.getElementById("add-new-member");
const newMemberButton = document.getElementById("new-member-button");
const formContainer = document.getElementById("form-container");
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

let cardsHTML = ``;
for (const member of teamMembers) {
  const { name, role, email, img } = member;
  cardsHTML += `<div class ="col-4">
        <div class = "card d-flex">
          <div class ="card-img"><img src="${img}" alt="${name}" /></div>
          <div class ="card-info bg-dark">
            <h3 class ="fw-bold text-white">${name}</h3>
            <p class ="text-white fs-4">${role}</p>
            <p class ="text-primary fs-4">${email}</p>
          </div>
        </div>
      </div>`;
}
cardContainer.innerHTML = cardsHTML;

addNewMember.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = newMemberName.value;
  const newRole = newMemberRole.value;
  const newEmail = newMemberEmail.value;
  const newImg = newMemberImg.value;

  const newMember = { newName, newRole, newEmail, newImg };
  teamMembers.push(newMember);

  let newCardsHTML = `<div class ="col-4">
        <div class = "card d-flex">
          <div class ="card-img"><img src="${newImg}" alt="${newName}" /></div>
          <div class ="card-info bg-dark">
            <h3 class ="fw-bold text-white">${newName}</h3>
            <p class ="text-white fs-4">${newRole}</p>
            <p class ="text-primary fs-4">${newEmail}</p>
          </div>
        </div>
      </div>`;

  formContainer.innerHTML += newCardsHTML;
  console.log(newMember);
});
console.log(teamMembers);
