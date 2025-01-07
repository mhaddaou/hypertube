"use client"
import { FormTitle, InputSection, PasswordInputSection } from "../components/InputUtils";

export default function ResetPassword() {

    const onFinish = (value: object) => {
        console.log(value);
    };

    return(
        <>
            <FormTitle title="Reset Your Password" />
            <h4 className="text-color-gray mb-12">Enter the email address associated with your account and we will send you a link to reset your password.</h4>
            <form className='flex flex-col max-w-md w-full' onSubmit={onFinish}>
                <InputSection name="Email" type="email" />
                <button className="w-full bg-color-primary h-12 rounded-xl mt-4" type="submit"> Continue </button>
            </form>
        </>
    )
}