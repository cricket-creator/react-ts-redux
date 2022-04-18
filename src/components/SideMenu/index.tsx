import * as React from 'react';
import { Link } from 'react-router-dom';

import style from './sidemenu.module.scss';

function SideBar({ hidden }: ISideBarProps) {
  return (
    <div className={style.menu + ' bg-dark gap-3 p-3 ' + (!hidden ? style.open : '')}>
      <Link to="/">
        <button type="button" className="btn btn-primary">Gallery</button>
      </Link>
      <Link to="/about">
        <button type="button" className="btn btn-primary">About</button>
      </Link>
    </div>
  );
}

export default SideBar;

interface ISideBarProps {
  hidden: boolean;
}