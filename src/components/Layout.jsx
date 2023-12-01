import { Outlet } from 'react-router-dom'
import  Header from "./Header"
import { StyledLayout } from '../styles/Layout.styled'
import Footer from "./Footer"

export default function Layout(){
    return (
        <StyledLayout>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </StyledLayout>
    )
}