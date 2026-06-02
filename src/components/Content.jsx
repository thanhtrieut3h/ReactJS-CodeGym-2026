import HeroImg from '../assets/hero.png';
import "../assets/css/content.css";


export function Content() {
    const style = {color: "red", fontSize: "50px", fontStyle: "italic"};
    return (
        <main>
            <section>
                <h3 style={style}> This is a section</h3>
                <input className="input" type="text" />
                <br/>
                <img src={HeroImg} width={170} height={170} />
            </section>
            <article>
                <h3> This is an article</h3>
            </article>
        </main>
    );
}