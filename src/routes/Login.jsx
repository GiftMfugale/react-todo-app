import { useNavigate } from 'react-router-dom';
import {useState}  from 'react';
import styles from '@/styles/Login.module.css';
import { useAuthContext } from '@/context/AuthContext';
import { useLocation } from 'react-router-dom';
import Header  from '@/components/Header'

const Login = () => {

    const [username, setUsername] = useState('');

    const {login} = useAuthContext();
    const navigate =  useNavigate();
    const location = useLocation();
    const from = location.state?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!username) return
        login(username)

        setUsername('')

        navigate(from, {replace: true}); //  you can numbers as arguments i.s -1 to go to a previously visited route
      
    }  ;
     



    return(
        <div>
            <Header>
            <h1>Login Page </h1>
            </Header>

        <div className={styles.loginPage}>
           
            <div className={styles.formWrappper}>
                <form className={styles.fomr} onSubmit={handleSubmit}>
                    <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <button>Login</button>
                </form>

            </div>
        </div>
        </div>
    )
}
 export default Login;