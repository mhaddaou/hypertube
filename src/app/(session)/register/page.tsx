"use client"
import Image from "next/image";
import { FormTitle, InputSection, PasswordInputSection, InputCheckBox, FormContainer } from "../components/InputUtils";
import { OauthLinks, OtherLink } from "../components/OauthUtils";
export default function Register () {

    const onFinish = (value: object) => {
        console.log(value);
      };
    

    return(
        <>
          <FormTitle title="create account with us" />
          <FormContainer action="Create Account" onFinish={onFinish}>
            {/* <form className='flex flex-col max-w-md' onSubmit={onFinish}> */}
              <div className="flex gap-x-0.5">
                <InputSection name="First Name" type="text" />
                <InputSection name="Last Name" type="text" />
              </div>

              <InputSection name="Username" type="text" />
              <InputSection name="Email" type="email" />
              <PasswordInputSection name="Password" />
              <PasswordInputSection name="Confirm Password" />
              <InputCheckBox label="I accept the terms and privacy policy"/>
          </FormContainer>
          <h6 className="mb-10 mt-4 text-color-primary font-bold" >OR</h6>
          <OauthLinks />
          <OtherLink text="Already have an account ?" link_title="Sign In" href="http://google.com" />
        </>
    )
}