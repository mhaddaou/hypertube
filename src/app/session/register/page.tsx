"use client"
import Image from "next/image";
import { FormTitle, InputSection, PasswordInputSection, InputCheckBox } from "../components/InputUtils";
import { OauthLinks, OtherLink } from "../components/OauthUtils";
export default function Register () {

    const onFinish = (value: object) => {
        console.log(value);
      };
    

    return(
        <>
        <FormTitle title="create account with us" />
          <form className='flex flex-col max-w-md' onSubmit={onFinish}>
            <div className="flex gap-x-0.5">
              <InputSection name="First Name" type="text" />
              <InputSection name="Last Name" type="text" />
            </div>

            <InputSection name="Username" type="text" />
            <InputSection name="Email" type="email" />
            <PasswordInputSection name="Password" />
            <PasswordInputSection name="Confirm Password" />
            <InputCheckBox label="I accept the terms and privacy policy"/>
            <button className="w-full bg-color-primary h-12 rounded-xl" type="submit"> Create Account </button>
        </form>
        <h6 className="my-12 text-color-primary font-bold" >OR</h6>
        <OauthLinks />
        <OtherLink text="Already have an account ?" link_title="Sign In" href="http://google.com" />
        </>
    )
}