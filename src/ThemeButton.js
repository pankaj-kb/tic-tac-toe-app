import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () => {
const {toggleTheme } = useContext(ThemeContext);

return (
<button onClick={toggleTheme} className="themeButton">
Switch Theme
</button>
);
};

export default ThemeButton;