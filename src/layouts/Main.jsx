import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import NavBar from "../components/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;