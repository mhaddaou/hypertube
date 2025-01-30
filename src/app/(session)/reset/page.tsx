"use client"
import { MdEmail } from "react-icons/md";
import { FormContainer, FormTitle, InputSection, InputWithIcons, PasswordInputSection } from "../components/InputUtils";
import { OtherLink, OtherLinkDicorated } from "../components/OauthUtils";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/components/sub/AuthContext";
import { useState } from "react";


interface ResetPasswordProps {
    email:string,
  }

export default function ResetPassword() {

    const [ResetPasswordData, setResetPasswordData] = useState<ResetPasswordProps>({email:""});

    const router = useRouter();

    const {authenticated} = useAuth();

    if (authenticated){
      router.push('/');
    }

    const onFinish = (value: object) => {
        const formData = value as ResetPasswordProps;
    
        fetch('http://127.0.0.1:8000/password/email', {
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
            throw new Error("reset password failed");
          }
        }
        )
        .then(data => {
          console.log("Response data: ", data);
          router.push('/verifyemail');
        })
        .catch(error => {
          console.error("Error: ", error);
        });

      };

      // const handleSubmit = async (event: React.FormEvent) => {
      //   event.preventDefault();
    
      //   const response = await fetch('http://127.0.0.1:8000/password/email', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ email }),
      //   });
    
      //   if (response.ok) {
      //     // Handle successful response
      //     console.log('Email sent successfully');
      //   } else {
      //     // Handle error response
      //     console.error('Error sending email');
      //   }
      // };


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
