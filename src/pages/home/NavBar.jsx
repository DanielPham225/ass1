import { useState, useEffect } from "react";
//phamthanhdat301413056
function Navbar(){
    const [navScroll, setNavScroll] = useState('') 
    
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll("section");
          let currentSection = "";
    
          sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            
            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) 
                currentSection = section.getAttribute("id");
          })
    
          setNavScroll(currentSection)
        }
    
        window.addEventListener("scroll", handleScroll)
        
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      }, [])

    return (
        <nav className="nav">
            <div className="logo-nav">
                <img src="./img/2.png" alt="logo"></img>
            </div>
            <ul>
                <li><a href="#intro" id='Home' 
                className={navScroll === "intro" ? "active" : ""} 
                >
                    Home
                </a></li>
                <li><a href="#AboutMe" id='About' 
                className={navScroll === "AboutMe" ? "active" : ""}
                >
                    About Me
                </a></li> 
                <li><a href="#Project" id='Projects'
                className={navScroll === "Project" ? "active" : ""}
                >
                    Projects
                </a></li>   
                <li><a href="#myskills" id='Service'
                className={navScroll === "myskills" ? "active" : ""}
                >
                    Services
                </a></li> 
            </ul>
                <a href="#Contact" className='btn btn-outline-primary'>Contact</a>
        </nav>
    )
}

export default Navbar