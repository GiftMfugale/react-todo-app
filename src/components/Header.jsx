import styles from "@/styles/Header.module.css"
const Header = (props) => {

    const headerStyle = {
        
            padding:'20px, 0',
            lineHeight: '1.5em',
            color: '#aeadad',
            textAlign:'center'
         
    }
    return (
        <header style={headerStyle} className={styles.header}>
            {/* <h1>Todos</h1>
            <p>Items will persisit in the browser local storage</p> */}
            {props.children}
        </header>
    );
};

export default Header;
