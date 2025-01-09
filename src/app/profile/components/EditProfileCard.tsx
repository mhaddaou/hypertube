import { MdModeEditOutline } from "react-icons/md"

const ProfileFormInput = ({name, d}:{name:string, d:string}) => {
    return(
        <div className="flex flex-col my-6">
            <div className="flex items-center">
                <span className="border-1 border-color-dark-gray w-4"></span>
                <label className="text-color-dark-gray mx-2" htmlFor="">{name}</label>
                <span className="border-1 border-color-dark-gray w-full"></span>
            </div>
            <input className="h-12 w-full ml-2" type="text" defaultValue={d}  />
            {/* <span className="border-2 border-color-gray w-full"></span> */}
        </div>
    )
}

const EditProfilePic = ()=>{
    return(
        <div className="relative w-20 h-20">
            <img src="https://s3-alpha-sig.figma.com/img/86f6/5550/6002f38b868fe510e6b42849dd283513?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4ife4o2Sawdsi~kYS4wxeKK4iorNPw8O5doMQJHH9fV6aj34HyId6ak1RezaFw5SU5xUNLM02C4Qy3nLrr8jJtzzEbRVOrOdXKmcnr5JCLW-j5E4y6JfO2wkrBN5BhgghSWE~A~V17hQO5KsvHRagtn9J0~t8AbtGf5-S1AHx9E9flv-Gz0FDZBI74wmiC0CvWHIF9nvJBpT613KJ4Xg9lPPitaRDIiMa14dbr12SwoqzpUn-E8vP-py3YcddQi4II7Ct78ZtXVUyetfmm~VM53x8XDao5CdpZtJPX894jo9rsvjWtLWMlCelXvePqAN90uNJ7AOVm0UFOcYMVsSQ__" alt="" className="rounded-full"/>
            <div className="bg-color-white absolute rounded-full right-0 bottom-0 cursor-pointer p-1 shadow-md" >
                <MdModeEditOutline  />
            </div>
        </div>
    )
}

const ProfileCardInfo = () =>{
    return(
        <div className="flex gap-4 items-center mb-5">
            <EditProfilePic />
            <div>
                <h2 className="">malena Haddaoui</h2>
                <h3 className="text-color-dark-gray font-light">mhaddaou@gmail.com</h3>
            </div>
        </div>
    )
}

export const EditProfile = () => {
    return (
        <div className="fixed inset-0 w-full h-full flex flex-col justify-center items-center z-10 font-lemonada ">
            <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm"></div>
            <div className="bg-color-white p-12 rounded-xl z-10" >
                <ProfileCardInfo />
                <form action="" className=" opacity-100 bg-transparent relative w-larg ">
                    <ProfileFormInput name="Firstname" d="Malena" />
                    <ProfileFormInput name="Lastname" d="haddaou"/>
                    <ProfileFormInput name="Email" d="malena@gmail.com" />
                    <ProfileFormInput name="Username" d="mhaddaou" />
                </form>
                <button className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl"> Save Changes </button>
            </div>

        </div>
    );
}

