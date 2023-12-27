import React from 'react'
import { Carousel } from 'flowbite-react';

const Home = () => {
    return (
        <>

            <section>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
                    <Carousel className='p-3'>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
            </section>

            


        </>
    )
}

export default Home