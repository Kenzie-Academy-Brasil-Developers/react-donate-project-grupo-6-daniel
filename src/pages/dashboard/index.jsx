import AsideMenu from "../../components/AsideMenu";
import Header from "../../components/Header/Header";
import DashboardHeader from "./components/DashboardHeader";
import { StyledDashboard } from "./style";

const DashBoard = () => {
    return (<StyledDashboard>
        <AsideMenu />
        <Header />
        <DashboardHeader />
    </StyledDashboard>);
};

export default DashBoard;
