import HeaderComponent from "./components/Header";
import LayoutComponent from "./components/Layout";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";
import "./styles/app.css";
import ProviderContext from "./share/Provider";

export default function AppContext() {
  return (
    <ProviderContext>
      <LayoutComponent>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </LayoutComponent>
    </ProviderContext>
  );
}
