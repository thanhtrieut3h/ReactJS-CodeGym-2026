import { Toolbar } from "./components/Toolbar";

export default function EventComponent(){
    function handleClick(){
        alert('you clicked me !');
    }
    const myClick = () => {
        alert(" Hi you !");
    }
    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <button onClick={myClick}>Click me 2</button>
            <button onClick={function clickMe(){ alert('Good bye') }}>Click me 3</button>
            <button onClick={() => { alert('Hello world') }}>Click me 4</button>
            <br/><br/>
            <Toolbar
                onPlayMovie={() => alert('Playing!')}
                onUploadImage={() => alert('Uploading')}
            />
        </>
    )
}