// "use client"
// import { useEffect, useState } from "react";
// import ListMovies from "./components/MoviesList";
// import ProfileInfo from "./components/ProfileInfo";
// import { useRouter } from "next/navigation";



// export default function Profile(){

//     const router = useRouter()

//     useEffect(() => {
//       fetch('http://127.0.0.1:8000/users/check_session', {
//         method: 'GET',
//         credentials: 'include',
//       })
//         .then(response => response.json())
//         .then(data => {
//           if (!data.authenticated) {
//             router.push('/register');
//           }
//         })
//         .catch(error => {
//           console.error("Error checking session: ", error);
//         });
//     }, []);


//     return(
//         <div className="w-full flex flex-col items-center bg-color-secondary">
//             <ProfileInfo name="malena Haddaoui" username="@mhaddaou" />
//             <ListMovies/>
//         </div>
//     )
// }

"use client"
import { useRouter } from "next/navigation";
import ListMovies from "../../components/MoviesList";
import { GetProfileInfo } from "../../components/ProfileInfo";
import { useAuth } from "@/app/components/sub/AuthContext";

export default function ProfileId({params:{id}}:{params:{id:string}}) {
  // const [loading, setLoading] = useState(true);
  // const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  console.log("ID::> ", id);

  // useEffect(() => {


  // if (!useAuth().authenticated) {
  //   // setAuthenticated()
  //   router.push('/register');
  // }

  //   fetch('http://127.0.0.1:8000/users/check_session', {
  //     method: 'GET',
  //     credentials: 'include',
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.authenticated) {
  //         setAuthenticated(true);
  //         setLoading(false);
  //       } else {
  //         router.push('/register');
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error checking session: ", error);
  //     })
  //     .finally(() => {
  //       // setLoading(false);
  //     });
  // }, []);

  const {authenticated, loading} = useAuth();


  if (loading) {
    return <div className="fixed inset-0 flex z-50 justify-center items-center bg-color-secondary text-color-primary text-2xl"> Loading... </div>;
  }

  if (!authenticated){
    router.push('/register');
  }

  // if(authenticated){
    return (
      <div className="w-full flex flex-col items-center bg-color-secondary h-screen">
        <GetProfileInfo id={id} />
        <ListMovies />
      </div>
    );
  // }
}