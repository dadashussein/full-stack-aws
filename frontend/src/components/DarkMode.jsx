import { useEffect, useState } from "react";
import { Moon, Sun } from "../utils/icons";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <div className="flex dark:hidden">
        <button
          type="button"
          aria-label="Use Dark Mode"
          onClick={() => setTheme("dark")}
          className="active:scale-95 transition-transform 
          flex w-7 h-7 rounded-full items-center justify-center text-gray-600
            "
        >
          <Moon />
        </button>
      </div>
      <div className="hidden dark:flex">
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-label="Use Light Mode"
          className="active:scale-95 transition-transform 
          flex w-7 h-7 rounded-full items-center justify-center text-yellow-600
            "
        >
          <Sun />
        </button>
      </div>
    </div>
  );
};

export default DarkMode;
