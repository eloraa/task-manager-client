import { Header } from '../shared/Header';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
