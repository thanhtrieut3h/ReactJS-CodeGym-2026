
const FooterComponent = ({ message = "Copyright CodeGym 2026" }) => {
    return (
        <footer>
            <p>{message} -  This is a footer web</p>
        </footer>
    );
}
// khai bao gia tri mac dinh cho props
// phien ban react JS cu tu 18 tro xuong
FooterComponent.defaultProps = {
    message : "Copyright CodeGym 2026"
}
export default FooterComponent;