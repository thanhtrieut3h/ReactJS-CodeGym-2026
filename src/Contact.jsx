import Header from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';
import Sidebar from './components/Sidebar';

export default function Contact(){
    return (
        <>
        <Header
            isShowNav={false}
        />
        <Sidebar
            title="This is a Sidebar"
            isLoading={true}
        >
            <ul>
                <li>
                    <a href='#'> Home</a>
                </li>
                <li>
                    <a href='#'> Contact</a>
                </li>
            </ul>
        </Sidebar>
        <Content/>
        <Footer/>
        </>
    );
}