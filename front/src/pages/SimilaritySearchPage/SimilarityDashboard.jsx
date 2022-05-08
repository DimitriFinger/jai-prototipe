import React, { useState, useEffect } from 'react'
import { getIdList } from '../../services/apiCollection';
import { findSimilars } from '../../services/apiSimilaritySearch';
import ImagesCarousel from '../../components/ImagesCarousel/ImagesCarousel';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResultCarousel from '../../components/ResultCarousel/ResultCarousel';
import './styles.css';
import ResultsModal from '../../components/ResultsModal/ResultsModal';

const SimilarityDashboard = () => {

    const [idList, setIdList] = useState([]);
    const [similarList, setSimilarList] = useState({});
    const [imageIterator, setImageIterator] = useState(0);
    const [similarNumberValue, setSimilarNumberValue] = useState(5);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [searchIdValue, setSearchIdValue] = useState(0);
    const [searchNumberValue, setSearchNumberValue] = useState(0);

    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const loadIds = async () => {
        try {
            const response = await getIdList();
            setIdList(response.data);
            setLoading(false);
        } catch (err) {
            setLoadingError(true);
            console.log(err);
        }
    }

    const searchNumber = (e) => {
        e.preventDefault();
        console.log('NUMBER', searchNumberValue)
        if (idList[searchNumberValue]) {

            console.log('entrou no if')
            setImageIterator(searchNumberValue)
            console.log(imageIterator)
            console.log('typing here', typeof (imageIterator));
        } else {
            alert("Invalid image number!");
        }
    }


    const searchId = (e) => {
        e.preventDefault();
        if (idList.indexOf(parseInt(searchIdValue)) !== -1) {
            console.log(imageIterator)
            setImageIterator(idList.indexOf(parseInt(searchIdValue)))
            console.log(imageIterator)
        }
        else {
            alert("Invalid image ID!");
        }
    }

    const searchSimilars = async (e) => {
        e.preventDefault();
        try {
            const response = await findSimilars(idList[imageIterator], similarNumberValue);
            console.log(response.data.similarity[0].results);
            setSimilarList(response.data.similarity[0].results);
            setIsModalVisible(true);
            console.log(similarList);
        } catch (err) {
            console.log(err);
        }
    }

    const showModal = () => {
        return (
            setIsModalVisible(!isModalVisible)
        )
    }

    useEffect(() => {
        (async () => await loadIds())();
    }, []);

    if (loadingError) {
        return (
            <h1>Erro ao carregar os dados.</h1>
        )
    }

    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Similarity search</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Similarity</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4 ">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Search by picture</h5>
                                    </div>
                                    <div className="card-body" >
                                        {loading ? <LoadingSpinner /> : <ImagesCarousel idList={idList} imageIterator={imageIterator} setImageIterator={setImageIterator} />}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Image details</h4>
                                    </div>
                                    <div className="card-body" >
                                        <form>
                                            <div class="form-group row">
                                                <label for="staticValue" class="col-sm-3 col-form-label">Number</label>
                                                <div class="col-sm-3 " id="show-value-input">
                                                    {imageIterator}
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">ID</label>
                                                <div class="col-sm-3" id="show-value-input" >
                                                    {idList[imageIterator]}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Search by ID</h4>
                                    </div>
                                    <div className="card-body" >
                                        <form>
                                            <div class="form-group row">
                                                <label for="staticValue" class="col-sm-5 col-form-label">Insert image ID</label>
                                                <div class="col-sm-3">
                                                    <input class="form-control-plaintext" id="staticNumber" value={searchIdValue} onChange={((e) => setSearchIdValue(e.target.value))} />
                                                </div>
                                                <div class="col-sm-3">
                                                    <button class="btn btn-primary mb-2" onClick={searchId}>Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Search by Number</h4>
                                    </div>
                                    <div className="card-body" >
                                        <form >
                                            <div class="form-group row">
                                                <label for="staticValue" class="col-sm-5 col-form-label">Insert image number</label>
                                                <div class="col-sm-3">
                                                    <input class="form-control-plaintext" id="staticNumber" value={searchNumberValue} onChange={((e) => setSearchNumberValue(e.target.value))} />
                                                </div>
                                                <div class="col-sm-3">
                                                    <button class="btn btn-primary mb-2" onClick={searchNumber}>Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Insert number of similar images</h4>
                                    </div>
                                    <div className="card-body" >
                                        <form>
                                            <div class="form-group row">
                                                <label for="staticValue" class="col-sm-5 col-form-label">topK value</label>
                                                <div class="col-sm-3">
                                                    <input class="form-control-plaintext" id="staticNumber" value={similarNumberValue} onChange={((e) => setSimilarNumberValue(e.target.value))} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body mx-auto" >
                                        <div>
                                            <div>
                                                <button type="submit" class="btn btn-secondary" onClick={searchSimilars}>Find similars</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* {showResult ? <ResultCarousel similarList={similarList} /> : null} */}
                        <ResultsModal isModalVisible={isModalVisible} onBackdropClick={showModal}> <ResultCarousel similarList={similarList} /> </ResultsModal>
                    </div>
                </section>
            </div >
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div >
    )
}

export default SimilarityDashboard