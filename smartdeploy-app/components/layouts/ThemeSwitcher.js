import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme);
      return !prev;
    });
  };

  useEffect(() => {
    const html = document.querySelector("Html");
    const theme = window.localStorage.getItem("theme") || "light";

    setDarkMode(theme === "dark");

    return () => {
      html.classList.remove("uk-dark", "uk-light-demo");
    };
  }, []);

  useEffect(() => {
    const html = document.querySelector("Html");

    if (darkMode) {
      html.classList.add("uk-dark");
      html.classList.remove("uk-light-demo");
    } else {
      html.classList.add("uk-light-demo");
      html.classList.remove("uk-dark");
    }
  }, [darkMode]);

  return (
    <div className="my_switcher">
      <div className="wrap uk-overflow-hidden">
        <div
          className="darkmode-trigger uk-position-bottom-right uk-position-small uk-position-fixed uk-box-shadow-large uk-radius-circle"
          data-darkmode-toggle=""
        >
          <label className="switch">
            <span className="sr-only">Dark mode toggle</span>
            <input
              data-theme="light"
              className={`setColor light ${darkMode ? "" : "active"}`}
              onClick={() => toggleTheme()}
              type="checkbox"
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
