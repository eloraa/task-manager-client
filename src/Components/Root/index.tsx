import { ReactNode } from 'react';
import { Header } from '../shared/Header';

export const Root = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
