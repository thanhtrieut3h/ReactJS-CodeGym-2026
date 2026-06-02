import Header from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';

const HomePage = () => {
    return (
        <>
            <Header
                title="This is a header website"
                id="10"
                name="Nguyen Thanh Trieu"
            />
            <Content/>
            <Footer
                message="Copyright CodeGym 2026"
            />
        </>
    )
}
export default HomePage;