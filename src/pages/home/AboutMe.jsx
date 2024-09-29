//phamthanhdat301413056
export default function AboutMe()
{
    return(
        <section id='AboutMe' className="about-section">
            <div className="About-img">
                <img src='./img/aboutme.png'></img>
            </div>
            <div className="About-content"> 
                <h2 className="about-title">About</h2>
                <h1 className="about-heading">About Me</h1>
                <p className="about-descrip">
                My name is Pham Thanh Dat, you can call me Daniel. I'm from Viet Nam and i'm 19 years old single. I am a dedicated student of software engineering, specializing in Health informatics Technology, with demonstrated applied projects experience in web development, interface design, data management and performing testing. Holds strong collaboration skills and the ability to work effectively independently, honed through work experience. Able and willing to learn new technologies quickly, with strong troubleshooting skills.
                </p>
                <div>
                    <a href='/img/Thanh Dat Daniel CV.pdf' target='_blank' className='btn btn-outline-primary'>My Résume</a>
                </div>
            </div>
        </section>
    )
}