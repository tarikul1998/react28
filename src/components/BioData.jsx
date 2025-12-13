const BioData = (props) => {
    // let age = 35;
    return (
        <div className="bio-data">
            <div className="personal-info">
                <h2>BioData of {props.name}</h2>
                <p>
                    <strong>Email: </strong>{props.email}
                </p>
                <p>
                    <strong>Phone: </strong>{props.phone}
                </p>
                <p>
                    <strong>Github: </strong>{props.github}
                </p>
            </div>
            <div className="skills">
                <h2>My Skills:</h2>
                <ul>
                    {
                        props?.skills?.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="interests">
                <h2>My Interests:</h2>
                <ul>
                    {
                        props?.interests?.map(interest => (
                            <li key={interest}>{interest}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="social-links">
                <h2>My Social Medias:</h2>
                <ul>
                    {
                        props?.socialLinks?.map(socialLink => (
                            <li><strong>{socialLink.platformName}:</strong>
                                {socialLink.handle}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default BioData;

/**
 * A component must fulfil 3 criteria:
 *   1) A component must be a function
 *   2) That function should return "something"
 *   3) That "something" should be some html-ish code (jsx)
 */


// JSX er vitore JS code likhle = Second Bracket {} dibo
// <h3>{age}</h3>