import Header from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import Users from "./components/UsersList";
import dataUser from "./fake_data/Users";

const HomePage = () => {
  return (
    <>
      <Header
        title="This is a header website"
        id="10"
        name="Nguyen Thanh Trieu"
      />
      <Content />
      <Users data={dataUser} />
      <Footer message="Copyright CodeGym 2026" />
    </>
  );
};
export default HomePage;
