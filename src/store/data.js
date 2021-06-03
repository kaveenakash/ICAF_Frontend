

const routes = [
  { name: "Home", link: "/" ,activeIndex:0},
  { name: "Keynotes", link: "/keynotes",activeIndex:1 },
  { name: "Presentation", link: "/presentations",activeIndex:2 },
  { name: "Downloads", link: "/downloads",activeIndex:3 },
  { name: "Registrations", link: "/registration",activeIndex:4 },
  { name: "Workshops", link: "/workshops",activeIndex:5 },
  { name: "Contact Us", link: "/contact-us",activeIndex:6 },
];


const venueImages = [
  {id:"1",src:"https://i.ibb.co/bdny1yB/sliitone.jpg"},
  {id:"2",src:"https://i.ibb.co/yWHFyR6/sliittwo.jpg"},
  {id:"3",src:"https://i.ibb.co/L1S7z9v/sliitfour.png"},
  {id:"4",src:"https://i.ibb.co/VQVZLkn/sliitfive.jpg"},
  {id:"5",src:"https://i.ibb.co/4pz6BL4/sliitsix.png"},
  {id:"6",src:"https://i.ibb.co/r7tJS8f/sliitseven.jpg"},
  {id:"7",src:"https://i.ibb.co/XJsv2gs/sliiteight.jpg"},
  {id:"8",src:"https://i.ibb.co/XpbP8BG/sliitnine.jpg"},
  {id:"9",src:"https://i.ibb.co/Gxp74qM/sliitten.jpg"},
]

const news = [
  {id:"1",date:"April 03, 2021",content:"Registrations are now open for the workshops. Register here"},
  {id:"2",date:"April 03, 2021",content:"Extended abstract submission deadline for ERU Symposium has been extended to 3rd May 2021. Submit "},
  {id:"3",date:"April 03, 2021",content:"Registrations are now open for the workshops. Register here"},
  {id:"4",date:"April 03, 2021",content:"Registrations are now open for the workshops. Register here"},
  {id:"5",date:"April 03, 2021",content:"Registrations are now open for the workshops. Register here"},
  {id:"5",date:"April 03, 2021",content:"Registrations are now open for the workshops. Register here"},
]


const aboutDetailsOne = "The 3rd International conference on advancements in computing -2021 (ICAC2021) is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains. Primary objective of the ICAC is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work. ICAC 2019 and ICAC 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available in IEEE Xplore digital library"
const aboutDetailsTwo = "July 24 - 27 in Sri Lanka Institute of Information Technology"
export {routes,aboutDetailsOne,aboutDetailsTwo,news,venueImages}
