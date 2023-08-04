import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>steelgrey-group</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      </Head>
      <main >
        <Navbar />

      <section>
        <div className='container text-black p-md-'>
          <div className='row '>
            {/* show on mobile */}
          <div className='col-md-6 ui-show-only ui-hide-big '>
              <div className="pt-5 mt-4 mx-auto">        
                <img src="../../../assets/house.jpg" class="d-block im-fluid" alt="..."/>
                </div>
              </div>

            <div className='col-md-6 ui-hide-only'>
                <div className="pt-5 mt-4">
                    <h1 className='fs-xxxlarge lh-1 text-color mb-4'>SteelGrey Group <br  className='d-none d-md-block'/> Limited</h1>
                    <p className='pt-3 fs-normal'>Steelgrey group offers a comprehensive range of services to help you make informed decisions and achieve your lifestyle goals</p>

                </div>
            </div>
              {/* show on laptop*/}
              <div className='col-md-6 ui-hide-only '>
              <div className="pt-5 mt-4">
                <img src="../../../assets/house.jpg" class="d-block img-fluid" alt="..."/>
                </div>
              </div>
              {/* show on laptop */}
              <div className='col-md-6 ui-show-only ui-hide-big'>
                <div className="pt-2 mt-2">
                    <h1 className='fs-xxlarge line-height text-color
                      mb-4'>SteelGrey Group cleaning <br /> service</h1>
                    <p className='pt-3 fs-normal'>Steelgrey Cleaning Specialists are on a mission to provide first class cleaning services and customer care, putting the customers needs at the forefront of all we do.</p>

                </div>
            </div>
              
          </div>
        </div>
      </section>

      {/* second session */}
      <div id='services'>
        <div className="container ">
            <hr />
           <div className="text-center">
                <h1 className='text-color my-5 fw-light fs-xxxlarge'>Solutions for every <br /> business needs</h1>
           </div>
           <div className="row ">
                <div className="col-md-4 border-0">
                    <div className="card border-0 ">
                        <div className="card-body shadow-lg p-4 mb-3">
                            <h1 className='text-color  mb-md-2'>1.</h1>
                            <h2 className='text-color my-md-3 my-sm-2'>Steelgrey Cleaning service</h2>
                            <p className='mb-4'> Your Trusted Cleaning Experts! We are dedicated to providing top-notch cleaning solutions for homes and businesses alike. Our services include residential cleaning, commercial cleaning, deep cleaning, and eco-friendly options. With a team of skilled and trained professionals, we ensurepo hygienic cleaning experience. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 ">
                        <div className="card-body shadow-lg p-4 mb-3">
                            <h1 className='text-color mb-md-2 my-sm-2'>2.</h1>
                            <h2 className='text-color mb-md-3 mb-sm-4'>Steelgrey Group Real estate</h2>
                            <p>Discover your dream home with the help of our comprehensive real estate listings. Whether you're looking to buy, sell, or rent, we've got you covered. Our expert team of real estate agents is dedicated to assisting you throughout your property journey, providing personalized solutions tailored to your unique needs</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                        <div className="card-body shadow-lg p-4">
                            <h1 className='text-color mb-md-2 my-sm-2'>3.</h1>
                            <h2 className='text-color mb-3'>Steegrey Consulting</h2>
                            <p>We are your trusted advisors, offering expert guidance in various domains. Our services include real estate consulting, cleaning service consulting, business strategy, and more. With a team of experienced consultants, we provide data-driven insights and tailor-made solutions to help you achieve your goals. Whether you're an individual, a business, or an organization, we are here to support you at every step.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="text-color d-flex justify-content-end my-4">
                    <h4 className='fw-normal'>Make an enquiry
                      <a href="/getStarted">
                        <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                        </a>
                      </h4>
                </div> */}
           </div>
        </div>

        <div className="text-center">
                <h1 className='text-color mt-5 fw-light fs-xxlarge'>Work with any of our <br className='d-none d-md-block'/> services group </h1>

                <button className="btn text-white bg-color fw-medium px-4 shadow-lg" type="submit">
                <a href="/getStarted">How can we help?</a>
              </button>
           </div>
    </div>

    {/* third session */}
    <div className="container p-md-5 mt-5" id='about'>
            <div className="row mb-5">
                <div className="col-md-6">
                     <div className="card border-0">
                         <img src="../../../../assets/clean7.jpg" alt="..." className=''/>
                    </div>
                </div>
                <div className="col-md-6 mb-md-4 mt-4 mt-md-0">
                    <div className=" mt-3 ">
                          <h1 className='fs-xxlarge line-height text-color mb-4'>About Steelgrey Group</h1>
                          <p className='pt-3 fs-normal text-black fs-large '>At Steelgrey, we strive for excellence in everything we do. Whether we are working with a domestic client or a large corporation, we are committed to providing the highest quality cleaning services. If you are an individual with cleaning experience, have a professional attitude and a dedication to doing the best job possible, you’ll love working at Steelgrey.</p>
                      </div>
                </div>
            </div>

            <div className="row mt-md-5">
                <div className="col-md-6 mt-md-3">
                    <div className=" mt-md-3 ">
                          <h1 className='fs-xxlarge line-height text-color mb-4'>Benefits of working with Steelgrey</h1>
                          <p className='pt-md-3 fs-normal text-black fs-large '>We have a range of positions available at competitive rates. There are progression opportunities for our team members to build a rewarding career with us at Steelgrey too. We currently have full-time, part-time and apprentice jobs open, so please contact us for more information.</p>
                          <p className='pt-3 fs-normal text-black fs-large '>We think Steelgrey is one of the best cleaning companies to work for. If you are looking for cleaning jobs in Lagos & Abuja and the surrounding areas, we would love to have you join our team.</p>
                      </div>
                </div>
                <div className="col-md-6">
                     <div className="card border-0">
                         <img src="../../../../assets/clean3.png" alt="..." className=''/>
                    </div>
                </div>

            </div>

        </div>

      <Footer />
      </main>

     
    </>
  )
}
