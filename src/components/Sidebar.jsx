
const SidebarComponent = ({ children, title = "This is a Sidebar", isLoading = false }) => {
    if(isLoading){
        return (
            <h2> Loading ....</h2>
        )
    }
    
    return (
        <>
            <h3>{title}</h3>
            {children}
        </>
    );
}
export default SidebarComponent;