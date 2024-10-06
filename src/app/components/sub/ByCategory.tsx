
const categories = [
  "Action", "Comedy", "Drama", "Horror", "Romance", "SciFi", "Thriller", "RealityTV",
  "Anime", "Documentary", "Sport", "Western", "Biography", "Adventure", "War",
  "Mystery", "Crime", "Fantasy", "Animation", "History", "Family", "Musical",
  "Music", "FilmNoir", "News", "GameShow", "TalkShow"
];

interface ByCategoryProps {
  checkedIndex: number | null,
  handleCheckboxChange: (index: number | null, category: string) => void
}

const ByCategory: React.FC<ByCategoryProps> = ({
  checkedIndex,
  handleCheckboxChange
}) => {
  return (
    <div className="sm:w-full w-[80%] mx-auto bg-seal-brown rounded-md pt-4 md:max-h-[300px] md:overflow-y-auto overflow-y-visible lg:max-h-[500px] lg:overflow-y-visible">
      <div className="bg-seal-brown rounded-md">
        <div className="w-[90%] mx-auto">
          <h2 className="font-lexend-Deca font-medium">By Category</h2>
          <div className="mt-4 flex flex-wrap">
            {categories.map((category, index) => (

              <label
                key={category}
                className={"text-xs w-1/2 font-lexend-Deca font-light flex items-center pb-3"}
              >
                <input
                  type="checkbox"
                  className="appearance-none h-4 w-4 border-[1.5px] border-night-rider bg-seal-brown rounded-sm mr-2 pb-2 checked:bg-seal-brown checked:border-color-primary checked:ring-1 checked:ring-color-primary checked:after:content-['✔'] checked:after:text-color-primary checked:after:block checked:after:text-center checked:after:text-[10px]"
                  checked={checkedIndex === index}
                  onChange={() => handleCheckboxChange(index, category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ByCategory;
