import Card from './components/Card'

const App = () => {

  
 const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tags: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tags: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    name: "Apple",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tags: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    name: "Netflix",
    datePosted: "4 weeks ago",
    post: "Senior Software Engineer",
    tags: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tags: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    name: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "8 weeks ago",
    post: "UI Designer",
    tags: "Part Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    name: "Oracle",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tags: "Full Time",
    tag2: "Mid Level",
    pay: "$36/hour",
    location: "Hyderabad, India"
  }
];

console.log(jobOpenings);

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
        <Card 
        key={idx}
        brandLogo={elem.brandLogo}
        company={elem.name} 
        datePosted={elem.datePosted}
        tags={elem.tags}
        post={elem.tag2}
        pay={elem.pay}
        location={elem.location}
        />
        </div>     
      })}
    </div>
  )
}

export default App
