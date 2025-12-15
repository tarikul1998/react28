import './App.css'
import BioData from './components/BioData'

function App() {
  // console.log("I am invoked");
  return (
    <BioData
      name="SR Setu"
      email="srsetu@gmail.com"
      phone="+245456452132452"
      github="github.com/srsetu"
      // Amra j skills pathabo attribute er moto kore equal diye,
      // Since return er moddhe sob html(jsx code), Amra jani jsx er vitore JS code likhle (Eikhane Array) = {} er vitore likhte hobe
      // Object er moddhe array pathacchi emon nah btw
      skills={["JS", "WP", "CSS", "REACT", "Next"]}
      interests={["Chess", "Football", "Entrepreneurship"]}
      socialLinks={[
        { platformName: "FB", handle: "fb/srsetu" },
        { platformName: "Twitter", handle: "x/srsetu" },
        { platformName: "LinkedIn", handle: "linkedin/in/srsetu" }
      ]}
    />
  )
}

export default App



// JSX = JavaScript XML
// JSX er vitore JS code likhle = Second Bracket {} dibo, Eikhane JS ta array
// skills={["JS", "WP", "CSS", "REACT", "Next"]}

/**
 * A component must fulfil 3 criteria:
 *   1) A component must be a function
 *   2) That function should return "something"
 *   3) That "something" should be some html-ish code (jsx)
 */

// Props is actually parameter


import './App.css'
import BioData from './components/BioData'
// Suppose, array akaare api(backend) theke data ashche, UI te dekhabo
const bioData = [
  {
    name: "SR Setu",
    email: "srsetu@gmail.com",
    phone: "+245456452132499",
    github: "github.com/srsetu",
    skills: ["JS", "WP", "CSS", "REACT", "Next"],
    interests: ["Chess", "Football", "Entrepreneurship"],
    socialLinks: [
      { platformName: "FB", handle: "fb/srsetu" },
      { platformName: "Twitter", handle: "x/srsetu" },
      { platformName: "LinkedIn", handle: "linkedin/in/srsetu" }
    ]
  },
  {
    name: "Mahir Asief",
    email: "asiefmahir1@gmail.com",
    phone: "+245456452132452",
    github: "github.com/asiefmahit",
    skills: ["JS", "REACT", "Next"],
    interests: ["Chess", "Football"],
    socialLinks: [
      { platformName: "FB", handle: "fb/srsetu" },
      { platformName: "Twitter", handle: "x/srsetu" },
      { platformName: "LinkedIn", handle: "linkedin/in/srsetu" }
    ]
  },
]


function App() {

  return (
    <>
      {bioData.map((singleBioData, index) => (
        <div key={index}>
          <BioData
            name={singleBioData.name}
            email={singleBioData.email}
            phone={singleBioData.phone}
            skills={singleBioData.skills}
            interests={singleBioData.interests}
            socialLinks={singleBioData.socialLinks}
          />
          <hr /><hr />
        </div>
      ))}
    </>
  )
}

export default App
