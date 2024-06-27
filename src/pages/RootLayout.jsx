import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>Feico com React Router DOM</p>
            </footer>
        </>
    )
}