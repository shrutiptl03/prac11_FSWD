import { useTheme } from '../context/ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  const styles = {
    background:
      theme === 'light'
        ? 'linear-gradient(135deg, #fdfbfb, #ebedee)'
        : 'linear-gradient(135deg, #232526, #414345)',
    color: theme === 'light' ? '#333' : '#f4f4f4',
  };

  return (
    <div className="content-container" style={styles}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <p>This is a designed theme switcher app using Context API.</p>
    </div>
  );
};

export default Content;
