import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme} type="button">
        toggle
      </button>

      <Link to="/">Главная</Link>
      <Link to="/about">О Сайте</Link>

      <AppRouter />
    </div>
  );
};

export default App;
