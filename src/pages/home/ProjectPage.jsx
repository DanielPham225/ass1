//phamthanhdat301413056
import data from '../../Data/index.js';
export default function Project(){
    return(
        <section id='Project'>
            <div className="ProjectHeading">
                <h2>My Project</h2>
                <h1>Projects</h1>
            </div>
            <div className="projects">
                {data.project.map((item, index) =>{
                    return (
                       <div key = {index} className="project-card">   
                            <img src={item.src}></img>
                            {/* <div className='project-contain'> */}
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {/* </div> */}
                       </div> 
                    )
                })}
            </div>
        </section>
    )
}