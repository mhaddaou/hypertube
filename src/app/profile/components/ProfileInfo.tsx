import Image from "next/image"

interface ProfileInfoProps {
    name :string,
    username :string,
}

interface ButtonProps {
    type :string,
    message:string,
    onclick:()=>void
}

const ProfileActionButton: React.FC<ButtonProps> = (props)=>{
    if (props.type == "primary")
        return <button className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl">{props.message}</button>
    return <button className="h-12 min-w-40 bg-transparent border-2 border-color-primary text-color-white px-8 rounded-xl">{props.message}</button>
}

export default function ProfilInfo(props:ProfileInfoProps) {

    const onClickPrimary = ()=>{
        console.log("primary button clicked");
    }
    const onClickSecondary = ()=>{
        console.log("Secondary button clicked");
    }

    return(
        <div className="bg-profile-bg bg-cover bg-center w-full h-1/3 flex items-end font-lemonada">
            <div className="w-full relative">
                <div className="h-40 w-full"></div>
                <div className="bg-color-secondary h-40 w-full"></div>
                <div className="absolute w-full h-full top-0 flex items-end">
                    <div className="h-full w-1/5 flex justify-end items-center">
                        <img className="w-32 h-32 mr-4 rounded-full border-4 border-color-primary" src="https://st2.depositphotos.com/1023162/8272/i/450/depositphotos_82720548-Beautiful-mystic-woman-profile-with-long-hair-looking.-Black-and.jpg" alt="" />
                    </div>
                    <div className="h-40 w-4/5 flex justify-between items-center px-12">
                        <div className="font-medium	text-lg">
                            <h2 className="text-color-white">{props.name}</h2>
                            <h4 className="text-color-primary">{props.username}</h4>
                        </div>
                        <div className="flex gap-4 font-light">
                            <ProfileActionButton type="secondary" message="Edit Profile" onclick={onClickSecondary}/>
                            <ProfileActionButton type="primary" message="Delete account" onclick={onClickPrimary}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

