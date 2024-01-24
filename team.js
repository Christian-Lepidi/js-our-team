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
  data.innerHTML += `
  <ul>
   <li>${persona.name}</li>
   <li>${persona.role}</li>
   <li>
    <img src=./img/${persona.image} alt=member${persona.name}${persona.role} 
   </li>
   <hr>
   </ul>`;
}
