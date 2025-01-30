import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchComments, addComment } from "@/lib/features/Comments/Comments";
import Image from "next/image";

const CommentSkeleton = ({ page }: { page: number }) => {
  return (
    <div className={`flex flex-col gap-8 bg-black ${page === 0 && "px-10 py-5"}`}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
        </div>
        <div className="w-full h-3 bg-gray-600 rounded animate-pulse"></div>
        <div className="w-3/4 h-3 bg-gray-600 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

function Comments({ movieId }: { movieId: number; }) {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [comment, setComment] = useState("");
  const comments = useAppSelector((state) => state.comments.comments);
  const hasMore = useAppSelector((state) => state.comments.hasMore);
  const status = useAppSelector((state) => state.comments.status);

  useEffect(() => {
    dispatch(fetchComments({ id: movieId, page: page }));
  }, [dispatch, page]);

  return (
    <div className="bg-black">
      <p className="text-white font-lemonada font-bold text-2xl bg-black px-10 py-5 underline underline-offset-4 decoration-color-primary">Discussion</p>
      <div className="flex flex-col gap-4 bg-black px-10 py-5 border border-white rounded-lg w-[90%] mx-auto">
        <div className="bg-black flex justify-center">
          <textarea
            id="comment"
            name="comment"
            rows={8}
            className="bg-black w-full rounded-lg pt-2 text-white custom-scrollbar text-xs font-albayan focus:outline-none"
            placeholder="Type your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)} />
        </div>
        <button className="text-white font-lemonada text-xs bg-color-primary px-5 py-3 w-fit rounded-lg self-end"
          onClick={() => {
            if (comment.trim()) {
              dispatch(addComment({ movie_id: movieId, comment, source: "YTS" }));
              setComment("");
            }
          }}
        >
          Comment
        </button>
      </div>
      {status === "loading" && page === 0 ?
        Array.from({ length: 4 }).map((_, index) => <CommentSkeleton key={index} page={page} />) :
        <div className={`flex flex-col gap-8 bg-black py-5 px-10`}>
          {comments && comments.length > 0 && comments.map((comment, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={comment.user_info.profile_picture || '/images/images/defaultprofile.jpg'}
                  alt="user profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/defaultprofile.jpg';
                  }} />
                <p className="text-white font-lemonada text-sm">{comment.user_info.username}</p>
              </div>
              <p className="text-white font-albayan text-xs">{comment.comment_info.comment}</p>
            </div>
          ))}
          {status === "loading" && hasMore && Array.from({ length: 4 }).map((_, index) => <CommentSkeleton key={index} page={page} />)}
          <button className={`text-white font-lemonada text-xs bg-black px-5 py-3 w-fit border border-white rounded-lg self-center ${!hasMore && "hidden"}`}
            onClick={() => setPage((prev) => (prev + 1))}>
            show more
          </button>
        </div>}
    </div>
  );
}

export default Comments;
