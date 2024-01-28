function Card(){
    return (
        <div className="card">
            <img
              width={133}
              height={112}
              src="/img/image_2.png"
              alt="sneakers 2"
            />
            <h5>Man's sneakers Puma X Aka Boku Future Rider </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>1200$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
    )
}

export default Card;