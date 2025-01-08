'use client'
import Image from "next/image"
import { FormTitle } from "../components/InputUtils"
import { OtherLinkDicorated } from "../components/OauthUtils"
import { PrimaryActionButton } from "../components/Buttons"

export default function VerifyEmail() {
    return(
        <>
            <Image className="mt-14" src="/images/icons/verifyemail.svg" alt="" width={200} height={200} ></Image>
            <FormTitle title="Verify Your Email" />
            <h4 className="text-color-gray mb-8">Thank you, check your email for instructions to reset your password</h4>
            <PrimaryActionButton message="Skip Now"/>
            {/* <button className="w-full bg-color-primary h-12 rounded-xl" type="submit"> skip now </button> */}
            <OtherLinkDicorated text="Didn’t receive an email? " href="http://google.com" link_title="Resend" />
        </>
    )
}
