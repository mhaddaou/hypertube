import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const OauthLinks = () => {
  const SuportedOAuths = [
    "http://google.com",
    "http://discord.com",
    "http://github.com",
    "http://youtube.com",
  ];

  // const [authUrl, setAuthUrl] = useState('');

  // useEffect(() => {
  //   const fetchAuthUrl = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/oauth/google');
  //       const data = await response.json();
  //       setAuthUrl(data.url);
  //     } catch (error) {
  //       console.error('Error fetching auth URL:', error);
  //     }
  //   };

  //   fetchAuthUrl();
  // }, []);


  return (
    <div className="flex justify-between items-center w-full">
      <Link href='http://127.0.0.1:8000/oauth/google'>
        <Image src="/images/icons/google.svg" width={48} height={48} alt=""/>
      </Link>
      <Link href='http://127.0.0.1:8000/oauth/discord'>
        <Image src="/images/icons/discord.svg" width={48} height={48} alt=""/>
      </Link>
      <Link href='http://127.0.0.1:8000/oauth/github'>
        <Image src="/images/icons/github.svg" width={48} height={48} alt=""/>
      </Link>
      <Link href="http://127.0.0.1:8000/oauth/42">
        <Image src="/images/icons/42.svg" width={48} height={48} alt=""/>
      </Link>
    </div>
  )
}

export const OtherLink = ({text, link_title, href}:{text:string, link_title:string, href:string}) => {
  return (
    <div className="flex justify-around items-center w-full mt-14">
      <h6 className="text-color-white">{text}</h6>
      <Link className="text-color-primary" href={href}>{link_title}</Link>
    </div>
  )
}

export const OtherLinkDicorated = ({text, link_title, href}:{text?:string, link_title:string, href:string}) => {
  return (

  <div className="flex justify-between items-center w-full font-bold my-14">
    <div className="flex justify-between gap-4">
      {text != "" ? <h6 className="text-color-white">{text}</h6> : <></>}
      <Link className="text-color-primary" href={href}>{link_title}</Link>
    </div>

    <div className="border-t-2 w-1/3 border-color-white"></div>
  </div>
  )
}