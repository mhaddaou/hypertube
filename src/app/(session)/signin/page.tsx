"use client"

import { useRouter } from "next/navigation";
import { FormTitle, InputSection, PasswordInputSection, InputCheckBox, FormContainer } from "../components/InputUtils";
import { OauthLinks, OtherLink } from "../components/OauthUtils";
import { useAuth } from "@/app/components/sub/AuthContext";

interface SingInData {
    email:string,
    password:string,
}

export default function SingIn () {

    const router = useRouter()

    
    const {authenticated, setAuthenticated} = useAuth();

    if (authenticated){
      router.push('/');
    }

    const onFinish = (value: object) => {

        const formData = value as SingInData;

        fetch('http://127.0.0.1:8000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        })
        .then(response => {
          if (response.ok){
            setAuthenticated(true);
            return response.json
          }
          else{
            throw new Error("sing-up failed");
          }
        }
        )
        .then(data => {
          console.log("Response data: ", data);
        })
        .catch(error => {
          console.error("Error: ", error);
        });
    
        console.log("Regester Data Value: ", value);
        console.log("Regester Data: ", formData);
      };

    return(
        <>
        <FormTitle title="Login To Your Account" />
        <FormContainer action="Sign In" onFinish={onFinish}>
          {/* <form className='flex flex-col max-w-md w-full' onSubmit={onFinish}> */}
            <InputSection name="email" type="text" />
            <PasswordInputSection name="password" />
            {/* <button className="w-full bg-color-primary h-12 rounded-xl" type="submit"> Sign In </button> */}
        </FormContainer>
        <h6 className="mb-10 mt-4 text-color-primary font-bold" >OR</h6>
        <OauthLinks />
        <OtherLink text="You don't have an account ?" link_title="Register" href="http://google.com" />
        </>
    )
}