import { StaticImageData } from "next/image";

interface HeroFilms{
    id: number;
    image: StaticImageData;
    selected : boolean;
    title : string;
    rating : number;
    genres : string[];
    time : number;
    year : number;
    description : string;
    link : string;
}



export  type {HeroFilms};