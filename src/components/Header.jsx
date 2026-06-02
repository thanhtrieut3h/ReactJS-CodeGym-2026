
const HeaderComponent = ({ title = "Header page", id = 10, name = "Thanh Trieu" }) => {
    // noi xu ly logic cua ham bang js
    // console.log(props.title);

    // hien thi giao hien bang JSX
    // khong phai la HTML (giong HTML)
    return (
        <>
           <header>
               <h1>{title} - {id}</h1>
           </header>
           <nav>
               <h2> This is a navigation - {name}</h2>
           </nav>
        </>
    );
}
// sau nay cac file khac se goi va su dung duoc HeaderComponent nay
export default HeaderComponent;