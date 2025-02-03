'use client'
import Image from "next/image"
import { FormTitle } from "../components/InputUtils"
import { OtherLinkDicorated } from "../components/OauthUtils"
import { PrimaryActionButton } from "../components/Buttons"
import Link from "next/link"

export default function VerifyEmail() {
    return(
        <>
            <Image className="mt-14" src="/images/icons/verifyemail.svg" alt="" width={200} height={200} ></Image>
            <FormTitle title="Verify Your Email" />
            <h4 className="text-color-gray mb-8">Thank you, check your email for instructions to reset your password</h4>
            <Link className="w-full" href="/">
                <PrimaryActionButton message="Skip Now"/>
            </Link>
            {/* <button className="w-full bg-color-primary h-12 rounded-xl" type="submit"> skip now </button> */}
            <OtherLinkDicorated text="Didn’t receive an email? " href="/reset" link_title="Resend" />
        </>
    )
}
