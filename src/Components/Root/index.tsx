import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
