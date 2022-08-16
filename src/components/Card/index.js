import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss'
import AppContext from '../../context';

function Card({
    id,
    title,
    imageURL,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
}) {
    
     const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageURL, price };

    const onClickPlus = () => {
        onPlus(obj);
    };
     const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader 
    speed={1}
    width={220}
    height={250}
    viewBox="0 0 220 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#d9dffd"
  >
    <rect x="0" y="135" rx="10" ry="10" width="150" height="15" /> 
    <rect x="0" y="160" rx="10" ry="10" width="80" height="15" /> 
    <rect x="0" y="0" rx="10" ry="10" width="150" height="120" /> 
    <rect x="120" y="217" rx="10" ry="10" width="32" height="32" /> 
    <rect x="0" y="220" rx="10" ry="10" width="80" height="25" />
  </ContentLoader>

                    :
                    <>
                        { onFavorite && <div className={styles.favorite} onClick={onClickFavorite} >
                            <img src={isFavorite ? '/img/heart-checked.svg' : '/img/heart-unchecked.png'} alt="heart" />
                        </div>}
                        <img width={155} height={120} src={imageURL} alt="Product" />
                        <h5>{title}</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Ціна:</span>
                                <b> {price} грн.</b>
                            </div>
                            {onPlus && <img className={styles.plus}
                                onClick={onClickPlus}
                                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-unchecked.svg'}
                                alt="Plus" />}
                        </div>
                    </>
            }
             </div>
    );
}

export default Card;