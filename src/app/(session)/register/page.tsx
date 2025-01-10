"use client"
import Image from "next/image";
import { FormTitle, InputSection, PasswordInputSection, InputCheckBox, FormContainer } from "../components/InputUtils";
import { OauthLinks, OtherLink } from "../components/OauthUtils";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface RegesterFromData {
  firstname:string,
  lastname:string,
  username:string,
  email:string,
  password:string,
  confirmPassword:string,
}

export const RegesterFormContext = createContext<Dispatch<SetStateAction<RegesterFromData>> | null>(null);

export default function Register () {

  const [regesterFromData, setRegesterFromData] = useState<RegesterFromData>({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  console.log("Regester form data: ", regesterFromData);

    const onFinish = (value: object) => {
        console.log(value);
      };
    
    return(
        <>
          <FormTitle title="create account with us" />
          <FormContainer action="Create Account" onFinish={onFinish}>
            <RegesterFormContext.Provider value={setRegesterFromData} >

              <div className="flex gap-x-0.5">
                <InputSection name="firstname" type="text" />
                <InputSection name="lastname" type="text" />
              </div>

              <InputSection name="username" type="text" />
              <InputSection name="email" type="email" />
              <PasswordInputSection name="password" />
              <PasswordInputSection name="confirmPassword" />
            </RegesterFormContext.Provider>
              <InputCheckBox label="I accept the terms and privacy policy"/>
          </FormContainer>
          <h6 className="mb-10 mt-4 text-color-primary font-bold" >OR</h6>
          <OauthLinks />
          <OtherLink text="Already have an account ?" link_title="Sign In" href="http://google.com" />
        </>
    )
}