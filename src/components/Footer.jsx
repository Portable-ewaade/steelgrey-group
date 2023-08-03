import React from 'react'

const Footer = () => {
  return (
    <div className='pt-5'>
        <div className="container text-black">
            <div className="row mt-3 ">
                <div className="col-md-3">
                    <h6> Contacts:</h6>
                    <a href="tel:+239035169253">                      
                        Doris: 09035169253 (Lagos)                      
                    </a>
                    <br />
                    <a href="tel:+2348097659230">                      
                         Fechi: +2348097659230 (Abuja)                     
                    </a>
                    <hr />
                    <div className="w-50 my-4">
                        <img src="../../../assets/icons/instagram.png" alt="..." className='mx-3 '
                        style={{width:"1.5rem"}} />
                        <img src="../../../assets/icons/facebook.png" alt="..." style={{width:"1.5rem"}}/>
                    </div>
                </div>
                {/* <div className="col-md-3">
                    <a href="#services">
                        <ul className='px-1' id='services'>Services</ul>
                    </a>
                    <a href="#">
                        <ul className='px-1'>End of Tenancy</ul>
                    </a>
                    <a href="#">
                        <ul className='px-1'>AirBnb Cleaning</ul>
                    </a>
                    
                </div>
                <hr className='d-md-none mt-4'/>
                <div className="col-md-3">
                    <a href="#">
                        <ul className='px-1'>Coronavirus Cleaning</ul>
                    </a>
                    <a href="#">
                        <ul className='px-1'>Company Let Accommodation Cleaning</ul>
                    </a>
                    <a href="#">
                        <ul className='px-1'>Communal Area Cleaning</ul>
                    </a>
                   
                </div>
                <hr className='d-md-none mt-4'/>
                <div className="col-md-3">
                    <a href="/getStarted">
                        <ul className='px-1'>Contact Us</ul>
                    </a>
                    <a href="#">
                        <ul className='px-1'>News</ul>
                    </a>
                    <a href="#">
                        <ul className='px-1'>Get Help</ul>
                    </a>
                </div> */}
            </div>
        </div>
        <div className="bg-color">
            <div className="container">
                <div className="row mt-5 pt-md-4 pt-3 ">
                    <div className="col-md-6">
                        <p>Copyright &copy; Gray Cleaning 2023 </p>
                    </div>
                    <div className="col-md-6">
                    <a href="#">
                            <ul className='px-1'>
                                Privacy Policy
                                Terms & Conditions
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

{/* <a href="#" class="position-absolute position-fixed bottom-0 end-0 top-25 m-4 arrow-up">
<i class="bi bi-arrow-up-circle h2"></i>
</a> */}