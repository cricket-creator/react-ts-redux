import * as React from 'react';

import HamburgerIcon from '../HamburgerIcon';
import SideBar from '../SideMenu';
import CloseIcon from '../CloseIcon';

function Navigation({ hidden, onClick }: INavigationProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark pt-3 pb-3 position-static">
        <div className="container d-flex justify-content-start gap-3">
          <button
            type="button" className="btn btn-primary" onClick={onClick}>
            {hidden ? <HamburgerIcon /> : <CloseIcon />}
          </button>
        </div>
      </nav>
      {!hidden && <SideBar hidden={hidden}/>}
    </>
  );
}

export default Navigation;

interface INavigationProps {
  hidden: boolean;
  onClick: () => void;
}