import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}/>
        </footer>
    );
}
