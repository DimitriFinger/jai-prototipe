import React, { useState } from 'react';
import './styles.css';

const ResultCarousel = ({ similarList, closeModal, idList }) => {

    const [resultIterator, setResultIterator] = useState(0);

    const searchId = (imageNumber) => {
        return idList.indexOf(parseInt(imageNumber))
    }

    const loadResult = () => {
        var url = `https://myceliademo.blob.core.windows.net/fashion-imgs/images/${similarList[resultIterator].id}.jpg`;

        var imageNumber = similarList[resultIterator].id;
        var imagePosition = searchId(imageNumber);
        return (
            <div>
                <div className="carousel-item active">
                    <div class="form-group details-container">
                        <label for="staticValue" class="col-sm-1 col-form-label">ID</label>
                        <div class="col-sm-3 " id="show-value-input">
                            {similarList[resultIterator].id}
                        </div>
                        <label for="staticValue" class="col-sm-2 col-form-label">NUMBER</label>
                        <div class="col-sm-3 " id="show-value-input">
                            {imagePosition}
                        </div>
                    </div>
                    <img className="d-block w-100" src={url} alt=" " />
                </div>
            </div>

        )
    }

    const nextImage = () => {
        if (resultIterator < similarList.length - 1) {
            setResultIterator(resultIterator + 1);
        }
    }

    const prevImage = () => {
        if (resultIterator > 0) {
            setResultIterator(resultIterator - 1);
        }
    }

    return (

        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Similar images</h5>

                    <button type="button" class="close" aria-label="Close" onClick={closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="card-body" >
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                loadResult()
                            }
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" onClick={prevImage} data-slide="prev" >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onClick={nextImage} data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default ResultCarousel