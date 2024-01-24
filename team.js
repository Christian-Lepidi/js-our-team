const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

for (members of team) {
  console.log(members.name, members.role, members.image);
}

let data = document.getElementById("data");

for (i = 0; i < team.length; i++) {
  let persona = team[i];

  `
  <div class="col-4">
          <div class="card">
            <img src="./img/${persona.image}" class="card-img-top" alt="member${persona.name}${persona.role} " />
            <div class="card-body text-center">
              <h5 class="card-title">${persona.name}</h5>
              <p class="card-text">${persona.role}</p>
              
            </div>
          </div>
        </div>`;
  data.innerHTML += persona;
}
