function Card() { 
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heartunliked.jpg" alt="heart-unliked" />
            </div>
            <img width={155} height={112} src="/img/products/001.jpg" alt="" />
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b> 1....1 грн.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.png" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;