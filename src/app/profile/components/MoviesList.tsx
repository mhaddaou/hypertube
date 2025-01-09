"use client"
import { Dispatch, SetStateAction, useState } from "react"
import MovieCard from "./MovieCard"

enum MoviesList {
    FAVORITE,
    HISTORY
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
        setListType(MoviesList.FAVORITE);
    }
    const handleHistoryClick = () => {
        setListType(MoviesList.HISTORY);
    }

    return(
        <div className="w-full p-4 bg-color-primary flex items-center justify-center gap-2 font-lemonada font-light mb-12">
            <MoviesTypeButton isPrimary={listType == MoviesList.FAVORITE} message="Favorite" onClick={handleFavoriteClick}/>
            <MoviesTypeButton isPrimary={listType == MoviesList.HISTORY} message="History" onClick={handleHistoryClick}/>
        </div>
    )

}

export default function ListMovies() {
    const [listType, setListType] = useState(MoviesList.FAVORITE);
    const data = [
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
        {name:"Rebel Moon - Part One: A Child of Fire", image: "https://s3-alpha-sig.figma.com/img/b032/9ff5/699458f34148fa9aeba762efd3823f89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=msJUxUfeigG9bA5eVye7gT07T5Y1LG70gHQm1xBjoUnfjsqxtpl34xMW7CH3UKg8UBI8c1LX3f8gt1VFH9jJcV0oqi6e0421Mqlds8-ixFxFWEYBEM0bTTPMn-rIVCJt1aejjwMwUBjHI4uv76sYhO1JeVtWEzUeZVav9pGPWBnhNeEiMeAU67eSRKNJ94W9F5GVxkJCf-2qeiySFtZibeobe4G6EF~FOsevR6os6An0f-Ol7ot7cWQjYk9bfmhqDb-76rmjxmfVbjCJkiJyaRTtgxwKhtOdfyPxDPUDevakdxUt6fTBbhKj-t8DFpL-b8lFiuii5Z9UNaWFrb-TdA__"},
    ]

    return(
    <div className="flex flex-col justify-center items-center w-full mb-12">
        <ListTypeMenu listType={listType} setListType={setListType}/>
        {/* <div className="flex flex-wrap w-full px-12">  */}
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8 mx-4"> 
        {
                data.map((movie)=>{
                    console.log(movie);
                    return <MovieCard name={movie.name} image={movie.image}/>
                })
            }
        </div>
    </div>

    )
}