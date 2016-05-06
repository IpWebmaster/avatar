import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div>
    Страница не найдена. Вернуться на <Link to="/">главную</Link>?
  </div>
);

export default NotFound;
