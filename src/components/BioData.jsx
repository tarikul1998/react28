export default function BioData(props) {
    // let age = 35;
    console.log(props);

    return (
        <div className="bio-data">
            <div className="personal-info">
                <h2>BioData of {props.name}</h2>
                {/* <h3>{age}</h3>  // JSX er vitore JS code likhle = Second Bracket {} dibo */}
                <p>
                    <strong>Email:</strong> {props.email}
                </p>
                <p>
                    <strong>Phone:</strong> {props.phone}
                </p>
                <p>
                    <strong>Github:</strong> {props.github}
                </p>
            </div>

            <div className="skills">
                <h2>My Skills:</h2>
                <ul>
                    {
                        props.skills.map(skill => (
                            <li>{skill}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="interests">
                <h2>My Interests:</h2>
                <ul>
                    {props.interests.map(interest => (
                        <li>{interest}</li>
                    ))}
                </ul>
            </div>

            <div className="social-links">
                <h2>My Social Medias:</h2>
                <ul>
                    {props.socialLinks.map(socialLink => (
                        <li><strong>{socialLink.platformName}: </strong>{socialLink.handle}</li>
                    ))
                    }
                </ul>
            </div>
            <hr /><hr />
        </div>
    )
}

// component er 2 ta layer thake
// Data Layer
// Presentation Layer (design Part)
