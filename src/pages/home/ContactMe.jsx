//phamthanhdat301413056
export default function ContactMe(){
    return (
        <section id='Contact' className="contact">
            <div className='ContactMe'>
                <h2 >Get In Touch</h2>
                <h1 >Contact Me</h1>
            </div>
            <form className="ContactForm" action="/" method="get">
                <div className="form-contain">
                    <label htmlFor="firstName" className="contact-label">
                        <span>First Name</span>
                    </label>
                    <input type="text" className="Contact-input" required/>

                    <label htmlFor="lastName" className="contact-label">
                        <span>Last Name</span>
                    </label>
                    <input type="text" className="Contact-input" required/>

                    <label htmlFor="Email" className="contact-label">
                        <span>Email</span>
                    </label>
                    <input type="email" className="Contact-input" required/>

                    <label htmlFor="Phone" className="contact-label">
                        <span>Phone</span>
                    </label>
                    <input type="Phone" className="Contact-input" required/>

                    <label htmlFor="message" className="contact-label">
                        <span>Message</span>
                    </label>
                    <textarea className="Contact-input" placeholder="Type your message" rows={8}/>
                </div>
                <div>
                    <button className="btn btn-primary" >Submit</button>
                </div>
            </form>
        </section>
    )
}
