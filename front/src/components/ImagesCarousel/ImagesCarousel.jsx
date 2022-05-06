import React from 'react'

const ImagesCarousel = ({ idList, imageIterator, setImageIterator }) => {

    const loadImage = () => {
        var url = `https://myceliademo.blob.core.windows.net/fashion-imgs/images/${idList[imageIterator]}.jpg`;
        return (
            <div>
                <div className="carousel-item active">
                    <img className="d-block w-100" src={url} />
                </div>
            </div>

        )
    }

    const nextImage = () => {
        if (imageIterator < idList.length) {
            console.log('typing here', typeof (imageIterator));
            setImageIterator(parseInt(imageIterator) + 1);
        }
    }

    const prevImage = () => {
        if (imageIterator > 0) {

            console.log('typing here', typeof (imageIterator));
            setImageIterator(parseInt(imageIterator) - 1);
        }
    }

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        loadImage()
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" onClick={prevImage} data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onClick={nextImage} data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
    )
}

export default ImagesCarousel