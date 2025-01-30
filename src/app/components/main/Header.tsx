"use client";

import { useEffect, useState } from "react";
import LoggedInHeader from "./LoggedInHeader";
import GuestHeader from "./GuestHeader";
import React from "react";
import { useAuth } from "../sub/AuthContext";




function Headerr() {

    const {authenticated} = useAuth();
    // const [loading, setLoading] = useState(true);
    // const [authenticated, setAuthenticated] = useState(false);
    // const router = useRouter();
  
    // useEffect(() => {
    //   fetch('http://127.0.0.1:8000/users/check_session', {
    //     method: 'GET',
    //     credentials: 'include',
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.authenticated) {
    //         console.log("USER IS AUTHENTICATED");
    //         // alert();
    //         setAuthenticated(true);
    //         setLoading(false);
    //       } else {
    //         // router.push('/register');
    //       }
    //     })
    //     .catch(error => {
    //       console.error("Error checking session: ", error);
    //     })
    //     .finally(() => {
    //       // setLoading(false);
    //     });
    // }, []);
  

  return (
    <>
        {authenticated ? <LoggedInHeader/> : <GuestHeader />}
        {/* {authenticated ? <GuestHeader /> : <LoggedInHeader/>} */}
    </>
  );
}

export default React.memo(Headerr);