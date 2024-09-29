import data from '../../Data/index.js';
//phamthanhdat301413056
export default function Service(){
    return (
        <section className='skills' id='myskills'>
            <div className='portfolio'>
                <h2 >My Service</h2>
                <h1 >My Expertise</h1>
            </div>
            <div className='skills-container'>
                {data.skills.map((item, index) => {
                    
                    return(
                    <div key = {index}
                    className='skills-card'>   
                        <img src={item.src} className='skills-img'></img> 
                        <div
                        className='skills-content'>
                            <h3 
                            className='skills-title'>
                            {item.title}</h3>
                            <p className='skills-description'>{item.description}</p>
                    </div>
                    </div>
                    )
                })}
                </div>
                </section>
    )
}