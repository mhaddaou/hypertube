"use client"

import { FormTitle, InputSection, PasswordInputSection, InputCheckBox } from "../components/InputUtils";
import { OauthLinks, OtherLink } from "../components/OauthUtils";
export default function Register () {

    const onFinish = (value: object) => {
        console.log(value);
    };

    return(
        <>
        <FormTitle title="Login To Your Account" />
          <form className='flex flex-col max-w-md w-full' onSubmit={onFinish}>
            <InputSection name="Username Or Email" type="text" />
            <PasswordInputSection name="Password" />
            <button className="w-full bg-color-primary h-12 rounded-xl" type="submit"> Sign In </button>
        </form>
        <h6 className="my-12 text-color-primary font-bold" >OR</h6>
        <OauthLinks />
        <OtherLink text="You don't have an account ?" link_title="Register" href="http://google.com" />
        </>
    )
}