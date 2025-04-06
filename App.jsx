import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import Content from './components/Content';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <Content />
    </ThemeProvider>
  );
}

export default App;
