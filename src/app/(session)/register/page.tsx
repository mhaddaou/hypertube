"use client"
import Image from "next/image";
import { FormTitle, InputSection, PasswordInputSection, InputCheckBox, FormContainer } from "../components/InputUtils";
import { OauthLinks, OtherLink } from "../components/OauthUtils";
import { Dispatch, SetStateAction, createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/components/sub/AuthContext";
import dotenv from 'dotenv';

dotenv.config();

interface RegesterFromData {
  first_name:string,
  last_name:string,
  username:string,
  email:string,
  password:string,
  confirmPassword:string,
}

interface RegesterData {
  first_name:string,
  last_name:string,
  username:string,
  email:string,
  password:string,
}

export const RegesterFormContext = createContext<Dispatch<SetStateAction<RegesterFromData>> | null>(null);

export default function Register () {

  const [regesterFromData, setRegesterFromData] = useState<RegesterFromData>({
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const router = useRouter()

  
  const {authenticated, setAuthenticated} = useAuth();

  if (authenticated){
    router.push('/');
  }

  console.log("Regester form data: ", regesterFromData);

  const onFinish = (value: object) => {
    const formData = value as RegesterFromData;
    if (formData['password'] != formData["confirmPassword"]){
      alert("Password doesn't match");
      return;
    }

    fetch(`http://127.0.0.1:8000/users/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    })
    .then(response => {
      if (response.ok){
        return response.json
      }
      else{
        throw new Error("sing-up failed");
      }
    }
    )
    .then(data => {
      console.log("Response data: ", data);
      setAuthenticated(true);
      router.push('/');
    })
    .catch(error => {
      console.error("Error: ", error);
    });

    console.log("Regester Data Value: ", value);
    console.log("Regester Data: ", formData);
  };
    
    return(
        <>
          <FormTitle title="create account with us" />
          <FormContainer action="Create Account" onFinish={onFinish}>
            <RegesterFormContext.Provider value={setRegesterFromData} >

              <div className="flex gap-x-0.5">
                <InputSection name="first_name" type="text" />
                <InputSection name="last_name" type="text" />
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

