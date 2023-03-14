import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
<button onClick={toggleTheme} className="themeButton">
Switch Colors
</button>
);
};

export default ThemeButton;