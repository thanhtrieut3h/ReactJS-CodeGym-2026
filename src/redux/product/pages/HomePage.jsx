import { Layout, Typography, Divider } from "antd";
import ProductList from '../components/ProductList';

const { Header, Content } = Layout;
const { Title } = Typography;

const HomePage = () => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{background: '#fff', padding: '0 24px'}}>
                <Title level={2} style={{margin: '16px 0'}}>
                    Danh sach san pham !
                </Title>
            </Header>
            <Content style={{padding: '24px 48px'}}>
                <Divider/>
                <ProductList/>
            </Content>
        </Layout>
    )
}
export default HomePage;