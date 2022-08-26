import { React, useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return <>{props.children}</>;
};

export default ScrollToTop;
