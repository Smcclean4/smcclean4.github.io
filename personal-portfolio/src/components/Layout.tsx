import { ReactNode } from 'react'
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex items-center justify-center flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  )
}