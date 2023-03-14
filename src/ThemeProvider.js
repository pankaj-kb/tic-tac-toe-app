import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = (props) => {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
setTheme(theme === 'light' ? 'dark' : 'light');
};

useEffect(() => {
const app = document.querySelector('body');
app.classList.remove('light', 'dark');
app.classList.add(theme);
}, [theme]);

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{props.children}
</ThemeContext.Provider>
);
};

export default ThemeProvider;