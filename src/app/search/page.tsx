import Image from "next/image";

export default function Search (){
    return (
        <div className="w-screen h-screen bg-black pt-24">
            <div className="container w-full h-full text-white   ">
            <div className="text-white font-lexend-Deca font-medium text-xl">Filter Option</div>
            <div className="flex w-full pt-10 gap-7">
                <div className="w-[360px] h-full bg-black space-y-7">
                    {/* top div in left  */}
                    <div className="min-h-[386px] bg-search rounded-md py-5 ">
                        <div className="w-[90%] mx-auto">
                        <div className=" ">
                            <p className="font-lexend-Deca font-medium text-lg">Editor Picks</p>
                        </div>
                        <div className="w-[90%] border-[1.5px] rounded-md border-[#353535]  mx-auto  px-5 mt-4 flex   gap-4">
                            <input type="text" className="bg-inherit outline-none py-3 flex-1  text-sm placeholder:text-sm placeholder:text-[#353535] placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300" placeholder="Search Title" />
                            <Image src='/images/icons/search.svg' alt="icon" width={30} height={10} className="pt-1"/>
                        </div>

                        </div>

                    </div>
                    {/* second div in left */}
                    <div className="w-[360px] h-full bg-black">
                    <div className="min-h-[386px] bg-search rounded-md py-5 ">
                        <div className="w-[90%] mx-auto">
                        <div className=" ">
                            <p className="font-lexend-Deca font-medium text-lg">Editor Picks</p>
                        </div>
                        <div className="w-[90%] border-[1.5px] rounded-md border-[#353535]  mx-auto  px-5 mt-4 flex   gap-4">
                            <input type="text" className="bg-inherit outline-none py-3 flex-1  text-sm placeholder:text-sm placeholder:text-[#353535] placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300" placeholder="Search Title" />
                            <Image src='/images/icons/search.svg' alt="icon" width={30} height={10} className="pt-1"/>
                        </div>

                        </div>

                    </div>
                    
                </div>
                    
                </div>
                {/* the right div */}
                <div className="flex-1 bg-red-500 ">
                    lkdjs
                </div>

            </div>

            </div>
        </div>
    )

}