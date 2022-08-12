import React from 'react';
import styles from './Card.module.scss'

function Card({id, title, imageURL, price, onFavorite, onPlus, favorited=false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, imageURL, price});
        setIsAdded(!isAdded);
    };
     const onClickFavorite = () => {
        onFavorite({id, title, imageURL, price});
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite} >
                <img src={ isFavorite ? '/img/heart-checked.svg'  : '/img/heart-unchecked.png'} alt="heart" />
            </div>
            <img width={155} height={112} src={imageURL} alt="Product" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b> {price} грн.</b>
                </div>
                <img className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-unchecked.svg'}
                    alt="Plus" />
                </div>
            </div>
    );
}

export default Card;