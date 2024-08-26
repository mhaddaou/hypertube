import Image from "next/image";

export default function PopularMovies() {
    return (
        <section id="PopularMovie" className="w-screen h-screen relative ">
            <div >
                <Image src="/images/images/backgroundPopular.jpg" alt="img" 
                fill
                style={{objectFit: 'cover'}}
                />
                <div className="w-full h-full bg-black/75 absolute z-10 ">
                    <div className="relative w-full h-full text-white pt-20 container">
                        <div className="w-full flex justify-between items-center">
                        <div className="w-fit">
                        <h1 className="font-lemonada font-bold text-[40px] capitalize">
                        Popular Movies
                        </h1>
                        <div className="w-[52%] h-1 bg-color-primary rounded-full">

                        </div>
                        </div>
                        <div >
                            <button className="bg-color-primary flex items-center gap-4 px-4 py-1.5 rounded-md font-poppins text-black">View More 
                                <Image src='images/icons/arrowLeftCircle.svg' alt="icon" width={25} height={10}/>
                            </button>
                        </div>
                        </div>
                        <div className="w-full pt-16">
                            <div className="flex gap-5">
                            <div className="w-[68%] h-[395px] border border-color-primary rounded-md relative">
                                <Image src='/images/images/backgroundPopular.jpg'  alt="img" fill  style={{objectFit: 'cover'}} className="rounded-md"/>

                            </div>
                            <div className="w-[33%] h-[395px] border border-color-primary relative rounded-md">
                                <Image src='/images/images/1917.jpg'  alt="img" fill   className="rounded-md"/>

                            </div>

                            </div>
                            <div className="w-full  flex gap-6 pt-5">
                                <div className="w-[33%] h-[395px] border border-color-primary rounded-md relative">
                                    <Image src='/images/images/spiderman.jpg' alt="back" fill className="rounded-md"/>
                                </div>
                                <div className="w-[33%] h-[395px] border border-color-primary rounded-md relative">
                                <Image src='/images/images/batman.jpg' alt="back" fill className="rounded-md"/>

                                </div>
                                <div className="w-[33%] h-[395px] border border-color-primary rounded-md relative">
                                    <Image src='/images/images/spiderman.jpg' alt="back" fill className="rounded-md"/>

                                </div>

                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}