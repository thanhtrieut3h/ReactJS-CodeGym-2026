import TodoApp from './pages/Index';
import store from './store';
import { Provider } from 'react-redux';

const AppTodo = () => {
    return (
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    )
}
export default AppTodo;