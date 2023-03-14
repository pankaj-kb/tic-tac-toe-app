import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = (props) => {
const [theme, setTheme] = useState('theme1');

const toggleTheme = () => {
setTheme(theme === 'theme1' ? 'theme2' : 'theme1');
};

useEffect(() => {
const app = document.querySelector('body')
app.classList.remove('theme1', 'theme2')
app.classList.add(theme)
}, [theme]);

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{props.children}
</ThemeContext.Provider>
);
};

export default ThemeProvider;