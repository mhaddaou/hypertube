const MovieCardSkeleton = ({ index }: { index: number }) => {
  return (
    <div className="flex flex-col gap-3 sm:block animate-pulse pb-4 sm:pb-0">
      <div className={`pt-4 pb-1 sm:pb-4 flex gap-3 sm:gap-5 w-full ${index && "border-t border-suva-grey"}`}>
        <div className="bg-gray-300 w-[200px] h-[200px] rounded-lg"></div>

        <div className="flex flex-col justify-center sm:justify-between w-full mt-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-[97%]">
            <div className="bg-gray-300 w-1/2 h-6 rounded-md self-center"></div>
            <div className="self-center flex items-center gap-1 pt-5 pb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="bg-gray-300 w-4 h-4 rounded-full"></div>
              ))}
            </div>
            <div className="sm:hidden flex flex-col gap-2 flex-wrap my-3 w-fit items-center self-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 w-16 h-5 rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap w-[98%] justify-center gap-3 sm:justify-between items-center pb-3">
            <div className="hidden sm:block w-[60%] h-28 bg-gray-300 rounded-md"></div>
            <div className="bg-gray-300 w-8 h-8 rounded-md cursor-pointer"></div>
            <div className="bg-color-primary px-4 py-2 rounded-md w-24 h-8"></div>
          </div>

          <div className="sm:flex gap-2 flex-wrap hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 w-16 h-5 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="sm:hidden w-full h-10 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default MovieCardSkeleton;
