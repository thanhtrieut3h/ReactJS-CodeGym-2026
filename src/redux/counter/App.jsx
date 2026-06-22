
import CounterApp from "./pages/CounterApp";
import { Provider } from "react-redux";
import store from "./store";

export default function App(){
    return (
        <Provider store={store}>
            <CounterApp/>
        </Provider>
        
    )
}