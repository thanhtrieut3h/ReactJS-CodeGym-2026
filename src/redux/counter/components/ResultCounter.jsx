import { useSelector } from "react-redux";

const ResultCounter = () => {
    const count = useSelector(state => state.counter.count);
    return (
        <h1>{count}</h1>
    )
}
export default ResultCounter;