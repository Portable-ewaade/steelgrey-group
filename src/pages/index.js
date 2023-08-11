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
                    <p className='pt-3 fs-normal'>Steelgrey group offers you a varying range of services aimed at providing you with the ease & flexibility needed to achieve your lifestyle goals. </p>

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
        <div className="container mt-md-5">
            <hr />
           <div className="text-center">
                <h1 className='text-color my-5 fw-light fs-xxxlarge'>We Are A Home & Office Away!</h1>
           </div>
           <div className="row ">
                <div className="col-md-6 border-0">
                    <div className="card border-0 ">
                        <a href="https://steelgrey-cleaning.netlify.app/">
                        <div className="card-body shadow-lg p-4 mb-3">
                            <h1 className='text-color  mb-md-2'>1.</h1>
                            <h2 className='text-color my-md-3 my-sm-2'>Steelgrey Cleaning service</h2>
                            <p className='mb-4 '> Steelgrey Cleaning serviceWe've got the perfect clean-up team for you! Steel Grey is committed to ensuring your home or business cleaning needs are excellently catered for. We offer expert and top-notch cleaning solutions so you can expect a thorough and detailed process from start to finish. Choose any of our wide range of services;  residential cleaning, commercial cleaning, deep cleaning, and eco-friendly options, and our team of skilled and trained professionals will be there to give you the best cleaning experience.</p>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-0 ">
                        <a href="/">
                        <div className="card-body shadow-lg p-4 mb-3">
                            <h1 className='text-color mb-md-2 my-sm-2'>2.</h1>
                            <h2 className='text-color mb-md-3 mb-sm-4'>Steelgrey Group Real estate</h2>
                            <p className='pb-5'>Steelgrey Group Real estate Dream homes do exist in our world and our comprehensive real estate listings have been specifically designed to achieve this. Whether you're looking to buy, sell, or rent, we've got the perfect deal for you! We have a team of real estate agents dedicated to assisting you throughout your property journey, providing personalized solutions tailored to your unique needs.</p>
                        </div>
                        </a>
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
                          <p className='pt-3 fs-normal text-black fs-large '>At Steelgrey, excellence is our core value. We often tell our clients to expect perfection in the execution of our cleaning services so quality delivery is non-negotiable. If you are an individual with optimum cleaning experience, and you have the professionalism and dedication needed for flawless execution, you’ll love working at Steelgrey.
</p>
                      </div>
                </div>
            </div>

            <div className="row mt-md-5">
                <div className="col-md-6 mt-md-3">
                    <div className=" mt-md-3 ">
                          <h1 className='fs-xxlarge line-height text-color mb-4'>Why Should You Work With Steel Grey?</h1>
                          <p className='pt-md-3 fs-normal text-black fs-large '>Steel Grey offers varying work positions at competitive rates. Team members can explore the career-friendly opportunities we provide to upscale their careers, making it the ideal work environment for a growing professional. You can also choose from our full-time, part-time, and apprentice job options, so please contact us for more information. Steel Grey is one of the best cleaning companies to work for. If you are looking for cleaning jobs in Lagos & Abuja and the surrounding areas, we think you would fit greatly into our team.</p>

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
