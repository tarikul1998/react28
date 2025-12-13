import "./App.css";
import BioData from "./components/BioData";

function App() {
    // console.log("I am invoked");
    return (
        <>
            <BioData
                name="SR Setu"
                email="srsetu@gmail.com"
                phone="+245456452132452"
                github="github.com/srsetu"
                skills={["JS", "WP", "CSS", "REACT", "Next"]}
                interests={["Chess", "Football", "Entrepreneurship"]}
                socialLinks={[
                    { platformName: "FB", handle: "fb/srsetu" },
                    { platformName: "Twitter", handle: "x/srsetu" },
                    { platformName: "LinkedIn", handle: "linkedin/in/srsetu" }
                ]}
            />
            <BioData
                name="Mahir Asief"
                email="asiefmahir1@gmail.com"
                phone="+43543543545"
                github="github.com/asiefmahir"
                skills={["JS", "REACT", "Next"]}
                interests={["Chess", "Football"]}
                socialLinks={[
                    { platformName: "FB", handle: "fb/asiefmahir" },
                    { platformName: "Twitter", handle: "x/asiefmahir" },
                    {
                        platformName: "LinkedIn",
                        handle: "linkedin/in/asiefmahir",
                    },
                ]}
            />

        </>
    );
}

export default App;

// JSX er vitore JS code likhle = Second Bracket {} dibo, Eikhane JS ta array
// skills={["JS", "WP", "CSS", "REACT", "Next"]}

/**
 * props = {
 *   name: "SR Setu",
 *   email: "srsetu@gmail.com",
 *   phone: "+245456452132452",
 *   github: "github.com/srsetu",
 *   skills: ["JS", "WP", "CSS", "REACT", "Next"],
 *   interests: ["Chess", "Football", "Entrepreneurship"],
 *   socialLinks: [
 *     { platformName: "FB", handle: "fb/srsetu" },
 *     { platformName: "Twitter", handle: "x/srsetu" },
 *     { platformName: "LinkedIn", handle: "linkedin/in/srsetu" }
 *   ]
 * }
 */


