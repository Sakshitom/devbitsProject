

import React from 'react';






function Home() {
    return (
        <div>
            <div className='md:flex row '>


                <div className='w-4/5 h-fit   text-black px-20'>
                    <div className=' p-4 flex flex-col justify-left w-full h-full text-sm font-light mx-auto'>
                        <div className='pb-4'>
                            <h2 className='inline font-bold text-4xl border-b-4 border-yellow-600 text-yellow-500'>About Us</h2>
                        </div>
                        <div className='pb-2  font-medium text-xl'>
                            We pioneered the discount broking model in India.
                            Now, we are breaking ground with our technology.
                        </div>
                        <p className='mt-3'>
                            We are a team of experienced professionals dedicated to providing top-quality brokerage services to our clients. With years of industry experience and a deep understanding of the markets, we are committed to helping our clients achieve their financial goals.<br></br>
                            Our company is built on a foundation of integrity, transparency, and trust. We believe in putting our clients first and providing them with personalized solutions that meet their unique needs. We take the time to listen to our clients, understand their goals and concerns, and work with them to develop customized investment strategies that align with their objectives.<br></br>
                            At our brokerage company, we offer a wide range of services, including investment management, retirement planning, tax planning, and more. Our team is highly skilled and dedicated to staying up-to-date with the latest industry trends and market developments. We use a variety of tools and resources to analyze market trends, identify opportunities, and manage risk.<br></br>
                            We pride ourselves on our commitment to exceptional customer service. We understand that our clients trust us with their financial futures, and we take that responsibility seriously. Our team is available to answer questions, provide guidance, and offer support whenever our clients need us.<br></br>
                            Thank you for considering our brokerage company. We look forward to working with you to help you achieve your financial goals.







                        </p>
                    </div>

                </div>
                <div className='w-1/5 mr-6 mt-10  '>
                    <img
                        src="https://www.logogarden.com/wp-content/uploads/2020/09/mortgage-broker-logo-2.png"
                        alt="logo"
                        className='cursor-pointer'
                    />
                </div>

            </div>



            

        </div>

    );
}

export default Home;