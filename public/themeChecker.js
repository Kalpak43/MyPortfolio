function themeChecker() {
  const localTheme = localStorage.getItem("kp-theme");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const theme = localTheme ? localTheme : prefersDarkMode ? "dark" : "light";
  if(localTheme) document.body.setAttribute("data-theme", theme);
}

themeChecker();
