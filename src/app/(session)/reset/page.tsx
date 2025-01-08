"use client"
import { MdEmail } from "react-icons/md";
import { FormContainer, FormTitle, InputSection, InputWithIcons, PasswordInputSection } from "../components/InputUtils";
import { OtherLink, OtherLinkDicorated } from "../components/OauthUtils";

export default function ResetPassword() {

    const onFinish = (value: object) => {
        console.log(value);
    };

    return(
        <>
            <FormTitle title="Reset Your Password" />
            <h4 className="text-color-gray mb-12">Enter the email address associated with your account and we will send you a link to reset your password.</h4>
            <FormContainer onFinish={onFinish} action="Continue">
                <InputWithIcons type="email" name="email">
                    <MdEmail className="text-color-gray" size={24}/>
                </InputWithIcons>
            </FormContainer>
            <OtherLinkDicorated link_title="Back to Sign In" href="http://google.com"/>
            <OtherLink text="Don't have an account?" link_title="Register" href="http://google.com" />
        </>
    )
}
