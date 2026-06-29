import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./managers/store";

const ProductApp = () => {
    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
        
    )
}
export default ProductApp;