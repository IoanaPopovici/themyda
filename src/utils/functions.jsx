export const handleThemeChange = (changeTheme, theme) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
};