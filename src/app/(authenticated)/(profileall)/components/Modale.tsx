import { AiOutlineClose } from "react-icons/ai"

export const PopUpModal : React.FC<{children:React.ReactNode, closeFunction:()=>void}> = ({children, closeFunction}) =>{
    return(
    <div className="fixed inset-0 w-full h-full flex flex-col justify-center items-center z-10 font-lemonada ">
        <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm" onClick={closeFunction}></div>
        <div className="relative bg-color-white p-12 rounded-xl z-10" >
            <div className="absolute right-8 top-8 rounded-full bg-gray-100 p-1 cursor-pointer" onClick={closeFunction}>
                <AiOutlineClose />
            </div>
            {children}
        </div>
    </div>
    )
}