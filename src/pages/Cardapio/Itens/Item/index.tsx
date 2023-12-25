import styles from './Item.module.scss'; 
import TagsPrato from 'components/Tags';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Item(prato: Prato) {
    const { id, title, description, photo } = prato;
    const naviagte = useNavigate();
    
    return (
        <div className={styles.item} onClick={() => naviagte(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
            </div>
            <TagsPrato { ...prato } />
        </div>
    );
}
