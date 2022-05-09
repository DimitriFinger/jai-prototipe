import React, { useState, useEffect } from 'react'
import { getIdList } from '../../services/apiCollection';
import { findSimilars } from '../../services/apiSimilaritySearch';
import ImagesCarousel from '../../components/ImagesCarousel/ImagesCarousel';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResultCarousel from '../../components/ResultCarousel/ResultCarousel';
import './styles.css';
import ResultsModal from '../../components/ResultsModal/ResultsModal';
import AlertModal from '../../components/AlertModal/AlertModal';


const SimilarityDashboard = () => {

    const [idList, setIdList] = useState([]);
    const [similarList, setSimilarList] = useState({});
    const [imageIterator, setImageIterator] = useState(0);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [similarNumberValue, setSimilarNumberValue] = useState();
    const [searchIdValue, setSearchIdValue] = useState();
    const [searchNumberValue, setSearchNumberValue] = useState();

    const [loading, setLoading] = useState(true);
    const [loadingResults, setLoadingResults] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')


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

    const searchSimilars = async (e) => {
        e.preventDefault();
        try {
            setIsModalVisible(true);
            const response = await findSimilars(idList[imageIterator], similarNumberValue);
            setSimilarList(response.data.similarity[0].results);
            setLoadingResults(false);
        } catch (err) {
            console.log(err);
        }
    }
    const searchNumber = (e) => {
        e.preventDefault();
        if (idList[searchNumberValue]) {
            setImageIterator(searchNumberValue)
        } else {
            setIsAlertVisible(true);
            setErrorMessage("Invalid number! Please, try again.")

        }
    }


    const searchId = (e) => {
        e.preventDefault();
        if (idList.indexOf(parseInt(searchIdValue)) !== -1) {
            setImageIterator(idList.indexOf(parseInt(searchIdValue)))
        }
        else {
            setIsAlertVisible(true);
            setErrorMessage("Invalid ID! Please, try again.");
        }
    }


    const showModal = () => {
        setIsModalVisible(!isModalVisible)
        setLoadingResults(true)
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
                                    <div className="card-header details-title">
                                        <h4 className="card-title">Image details</h4>
                                    </div>

                                    <div className="card-body" >
                                        <form>
                                            <div class="form-group details-container">
                                                <label for="staticValue" class="col-sm-3 col-form-label">NUMBER</label>
                                                <div class="col-sm-3 " id="show-value-input">
                                                    {imageIterator}
                                                </div>
                                                <label for="staticValue" class="col-sm-2 col-form-label">ID</label>
                                                <div class="col-sm-3 " id="show-value-input">
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
                                                    <input class="form-control-plaintext" type="number" id="staticNumber" placeholder='#####' value={searchIdValue} onChange={((e) => setSearchIdValue(e.target.value))} />
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
                                                    <input class="form-control-plaintext" id="staticNumber" type="number" value={searchNumberValue} placeholder='#####' onChange={((e) => setSearchNumberValue(e.target.value))} />
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
                                                    <input class="form-control-plaintext" id="staticNumber" value={similarNumberValue} placeholder='#####' onChange={((e) => setSimilarNumberValue(e.target.value))} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body mx-auto" >

                                        <button type="submit" class="btn btn-secondary" onClick={searchSimilars}>Find similars</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {loadingResults ?
                            <ResultsModal
                                isModalVisible={isModalVisible}
                            >
                                <LoadingSpinner />
                            </ResultsModal>
                            :
                            <ResultsModal
                                isModalVisible={isModalVisible}
                                onBackdropClick={showModal}
                                loadingResults={loadingResults}
                            >
                                <ResultCarousel
                                    similarList={similarList}
                                    closeModal={showModal}
                                    idList={idList}
                                />
                            </ResultsModal>}

                        {isAlertVisible ? <AlertModal setIsAlertVisible={setIsAlertVisible} isAlertVisible={isAlertVisible}>{errorMessage}</AlertModal> : null}
                    </div>
                </section>
            </div >
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div >
    )
}

export default SimilarityDashboard