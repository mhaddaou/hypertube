"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { useUserInfo } from "@/app/components/sub/UserInfoContext"

enum MoviesList {
    FAVORITE = "favorite",
    HISTORY = "history"
}



const MoviesTypeButton: React.FC<{isPrimary:boolean, message:string, onClick:()=>void}> = ({isPrimary, message, onClick}) => {
    if (isPrimary){
        return (
            <button className="min-w-32 w-64 bg-color-white h-12 rounded-xl" onClick={onClick}>{message}</button>
        )
    }
    return <button className="min-w-32 w-64 h-12 rounded-xl " onClick={onClick}>{message}</button>
}

const ListTypeMenu = ({listType, setListType}:{listType:MoviesList, setListType:Dispatch<SetStateAction<MoviesList>>}) => {
    const handleFavoriteClick = () => {
        console.log("MOVIES TYPE : ", listType);
        setListType(MoviesList.FAVORITE);
    }
    const handleHistoryClick = () => {
        console.log("MOVIES TYPE : ", listType);
        setListType(MoviesList.HISTORY);
    }

    return(
        <div className="w-full p-4 bg-color-primary flex items-center justify-center gap-2 font-lemonada font-light mb-12">
            <MoviesTypeButton isPrimary={listType == MoviesList.FAVORITE} message="Favorite" onClick={handleFavoriteClick}/>
            <MoviesTypeButton isPrimary={listType == MoviesList.HISTORY} message="History" onClick={handleHistoryClick}/>
        </div>
    )

}

interface Movie {
    created_at: string;
    movie_id: string;
    movie_imdb_code: string;
    movie_source: string;
    poster_src: string;
    title: string;
}

export function ListMovies() {
    const [listType, setListType] = useState(MoviesList.FAVORITE);
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const {userInfo} = useUserInfo();

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/movies/${listType}`, {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Favorite :", data);
                    setMovieList(data);
                } else {
                    console.error('Error fetching favorite movies:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching favorite movies:', error);
            }
        };

        fetchFavoriteMovies();
    }, [listType]);

    return(
    <div className="flex flex-col justify-center items-center w-full mb-12">
        <ListTypeMenu listType={listType} setListType={setListType}/>
        {/* <div className="flex flex-wrap w-full px-12">  */}
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8 mx-4"> 
        {
                movieList.map((movie)=>{
                    console.log(movie);
                    return <MovieCard name={movie.title} image={movie.poster_src}/>
                })
            }
        </div>
    </div>

    )
}

interface ProfileInfoProps {
    id:string;
}

export function ListUserMovies(props : ProfileInfoProps) {
    const [listType, setListType] = useState(MoviesList.FAVORITE);
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const {userInfo} = useUserInfo();

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/movies/${listType}/${props.id}`, {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Favorite :", data);
                    setMovieList(data);
                } else {
                    console.error('Error fetching favorite movies:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching favorite movies:', error);
            }
        };

        fetchFavoriteMovies();
    }, [listType]);

    return(
    <div className="flex flex-col justify-center items-center w-full mb-12">
        <ListTypeMenu listType={listType} setListType={setListType}/>
        {/* <div className="flex flex-wrap w-full px-12">  */}
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8 mx-4"> 
        {
                movieList.map((movie)=>{
                    console.log(movie);
                    return <MovieCard name={movie.title} image={movie.poster_src}/>
                })
            }
        </div>
    </div>

    )
}