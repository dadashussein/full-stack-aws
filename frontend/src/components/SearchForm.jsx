import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      return;
    }
    navigate(`/allproduct/${query}`);
    setQuery("");
  };

  return (
    <div className=" mt-8 mb-4 flex items-center justify-start relative">
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[6rem] h-[2rem] md:h-[2rem] text-[13px] p-1 sm:w-[7rem] shadow-inner-md
         bg-transparent s md:w-[12rem] text-black dark:text-white  border rounded-lg placeholder:text-[12px]"
          type="text"
          placeholder="Axtar..."
        />
        <button
          type="submit"
          className="absolute text-[#222] dark:text-[#aaa] right-32 md:right-8 top-2 md:border-l text-[20px] md:text-[20px]"
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
