export const PrimaryActionButton = ({message}:{message:string}) => {
    return(
        <button className="w-full my-6 bg-color-primary h-12 rounded-xl" type="submit"> {message} </button>
    )
}