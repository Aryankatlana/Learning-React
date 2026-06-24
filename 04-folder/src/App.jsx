
import Card from './Components/Card'


const App =()=>{

  const jobOpenings = [
  {
    brandLogo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.6x6s1sTIRrU8my_FCLwPqwHaFj?pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://assets.designhill.com/design-blog/wp-content/uploads/2023/12/5.jpg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logosmarcas.net/wp-content/uploads/2020/11/Nvidia-Logo.png",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://freelogopng.com/images/all_img/1659761207uber-app-logo-png.png",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Backend Java Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?pid=Api&P=0&h=180",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  }
  ];
     console.log(jobOpenings);
  return(
    <div className="parent">
     {jobOpenings.map(function(elem){

      return <Card company={elem.companyName} post={elem.post} date={elem.datePosted} type={elem.tag1} salary={elem.pay} city={elem.location} posted={elem.datePosted}
      level={elem.tag2} brandlogo={elem.brandLogo}/>
     })}
    </div>
    
  )
}

export default App