import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className="footer" data-wow-delay="0.1s">
        <div className="row">
            <div className="col-3">
                <h5 className="section-title">ADDRESS ---<span></span></h5>
                <p className="abcd"><Image src="/images/icons/location.png" alt="" height={20} width={20} /> Plot No. 131/09, 3rd Floor, Above Beauty Junction, Al-Qumar Complex, M.P. Nagar Zone-
                    II, Bhopal, Madhya Pradesh, 462011 </p>
                <p className="abcd"><Image src="/images/icons/Call-icon-on-transparent-background-PNG.png" alt="" height={20} width={20} /> +91 95864 13079 </p>
                <p className="abcd"><Image  src="/images/icons/clipart905970.png" alt="" height={20} width={20} /> info@abtechzone.com</p>
                <p className="abcd"><Image src="/images/icons/clipart4360917.png" alt="" height={20} width={20} /> sales@abtechzone.com</p>
                
                <div className="row aa">
                    {/* <link></link> */}
                    <a target="_blank" className="btn btn-social"
                        href="#">
                            <Image src="/images/icons/logo-twitter-png-47486.png" alt="" height={20} width={20} />
                            </a>
                    <a target="_blank" className="btn  btn-social"
                        href="#">
                            <Image src="/images/icons/5ecec78673e4440004f09e77.png" alt="" height={20} width={20} />
                            </a>
                    <a target="_blank" className="btn btn-social"
                        href="#">
                            <Image src="/images/icons/623dd7d270712bdafc63c38a.png" alt="" height={20} width={20} />
                            </a>
                    <a target="_blank" className="btn  btn-social"
                        href="#">
                            <Image src="/images/icons/icons8-linkedin-50 (1).png" alt="" height={20} width={20} />
                            </a>
                </div>
            </div>
            <div className="col-3 abc">
                <h5 className="section-title">QUICK LINK ---<span></span></h5>
                <a className=" btn-link" href="#about">▶  About Us</a>
                <a className=" btn-link" href="#newsletter">▶  Contact Us</a>
                <a className=" btn-link" href="#">▶  Privacy Policy</a>
                <a className=" btn-link" href="#">▶  Terms & Condition</a>
                <a className=" btn-link" href="#">▶  Career</a>
            </div>

            <div className="col-3">
                <div className="bigLogo">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14665.58485727035!2d77.4352271!3d23.2286648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17f0afc20386de2d!2sTechJain%20IT%20Solutions%3A%20Software%20Development%20and%20Digital%20Marketing%20Company%20in%20Bhopal!5e0!3m2!1sen!2sin!4v1648886681465!5m2!1sen!2sin"
                        style={{border:0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <button className="top"><a href="#">⬆</a></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;