import Card from './components/Card'

const jobOpenings = [
  {
    company: "Epic Coders",
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VhgQDLwTj5WXB8ea40qVj4V3IxkMQfg8vDUuYCS-2w&s=10",
    price: "$55/hr",
    name: "Wade Wilson",
    role: "UI/UX designer",
    status: "Freelancer",
    skills: ["UI", "UX", "Photoshop"],
    description:
      "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
    datePosted: "2 days ago",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/maria.jpg",
    price: "$32/hr",
    name: "Maria Petrescu",
    role: "Mobile designer",
    status: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    description:
      "Maria is an android and iOS developer who worked at Apple for 6 years.",
    datePosted: "1 day ago",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/alexandra.jpg",
    price: "$42/hr",
    name: "Alexandra Morgan",
    role: "Mobile designer",
    status: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    description:
      "Alexandra is a dedicated developer for mobile platforms and is very good at it.",
    datePosted: "3 days ago",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/jennifer.jpg",
    price: "$44/hr",
    name: "Jennifer Smith",
    role: "Interactive designer",
    status: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    description:
      "Jennifer is an interactive designer who is really awesome at what she does.",
    datePosted: "4 days ago",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/svetlana.jpg",
    price: "$40/hr",
    name: "Svetlana Anyukova",
    role: "Mobile designer",
    status: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    description:
      "Svetlana is an Android and iOS designer with advanced knowledge in coding.",
    datePosted: "2 days ago",
  },
  {
    company: "Visual Madness",
    brandLogo: "/images/marko.jpg",
    price: "$30/hr",
    name: "Marko van Kooh",
    role: "UI/UX designer",
    status: "Visual Madness",
    skills: ["UI", "UX", "Photoshop"],
    description:
      "Marko is a 25 year old web designer with an impressive portfolio behind him.",
    datePosted: "5 days ago",
  },
  {
    company: "Apple Inc.",
    brandLogo: "/images/pawel.jpg",
    price: "$50/hr",
    name: "Pawel Koszentka",
    role: "UX designer",
    status: "Apple Inc.",
    skills: ["UI", "UX", "Photoshop"],
    description:
      "Pawel is a 32 year old UX designer, with over 10 years of experience in what he does.",
    datePosted: "1 day ago",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/sonia.jpg",
    price: "$32/hr",
    name: "Sonia Simionov",
    role: "Mobile designer",
    status: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    description:
      "Sonia is an android and iOS developer who worked at Apple for 6 years.",
    datePosted: "3 days ago",
  },
  {
    company: "Epic Coders",
    brandLogo: "/images/jonathan.jpg",
    price: "$40/hr",
    name: "Jonathan Wayne",
    role: "Photographer",
    status: "Epic Coders",
    skills: ["UI", "UX", "Photoshop"],
    description:
      "Jonathan is a 28 year old photographer from London with a real talent for what he does.",
    datePosted: "6 days ago",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/batman.jpg",
    price: "free",
    name: "Batman",
    role: "Superhero",
    status: "Freelancer",
    skills: ["Tech", "IT", "Martial Arts"],
    description: "I'm Batman!",
    datePosted: "Today",
  },
  {
    company: "Freelancer",
    brandLogo: "/images/georgiana.jpg",
    price: "$39/hr",
    name: "Georgiana Suclea",
    role: "Mobile designer",
    status: "Freelancer",
    skills: ["PHP", "Android", "iOS"],
    description:
      "Georgiana is an android and iOS developer who worked at Apple for 6 years.",
    datePosted: "2 days ago",
  },
  {
    company: "Epic Coders",
    brandLogo: "/images/gregory.jpg",
    price: "$45/hr",
    name: "Gregory Johnes",
    role: "UI/UX designer",
    status: "Epic Coders",
    skills: ["UI", "UX", "Photoshop"],
    description:
      "Gregory is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
    datePosted: "1 day ago",
  },
];
const App = (elem) => {

  return (
    <div className='card-container'>

    {jobOpenings.map((elem, idx) => (
  <Card
    key={idx}
    availability={elem.availability}
    price={elem.price}
    brandLogo={elem.brandLogo}
    name={elem.name}
    designation={elem.designation}
    company={elem.company}
    skills={elem.skills}
    description={elem.description}
  />
))}
    </div>
  )
}

export default App  