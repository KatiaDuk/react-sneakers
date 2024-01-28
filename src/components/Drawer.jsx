function Drawer(){
    return(
        <div style={{display: 'none'}} className="overlay"> 
            <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Cart <img
                    className="btn_remove cu-p"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                /></h2>

            <div className="items">

                <div className="cartItem d-flex align-center mb-20">
                <div
                    className="cartItemImg"
                    style={{ backgroundImage: "url(/img/image_1.jpg)" }}
                ></div>

                <div className="mr-20 flex">
                    <p className="mb-5">Man's sneakers Nike Air Max 270</p>
                    <b>1200$</b>
                </div>
                <img
                    className="btn_remove"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                />
                </div>

                <div className="cartItem d-flex align-center">
                <div
                    className="cartItemImg"
                    style={{ backgroundImage: "url(/img/image_4.jpg)" }}
                ></div>

                <div className="mr-20 flex">
                    <p className="mb-5">Man's sneakers Puma X Aka Boku Future Rider </p>
                    <b>1200$</b>
                </div>
                <img
                    className="btn_remove"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                />
                </div>

            </div>

            <div className="cartTotalBlock">
                <ul>
                <li>
                    <span>Total:</span>
                    <div></div>
                    <b>2520$</b>
                </li>
                <li>
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>120$</b>
                </li>
                </ul>

                <button className="greenButton">Make an order <img src="/img/arrow.svg" alt="Arrow" /></button>
            </div>
            </div>
        </div>
    )
}

export default Drawer;