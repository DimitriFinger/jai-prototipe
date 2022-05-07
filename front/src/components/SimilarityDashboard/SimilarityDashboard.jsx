import React, { useState, useEffect } from 'react'
import { getIdList } from '../../services/api';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './styles.css';

const SimilarityDashboard = () => {

    const [idList, setIdList] = useState([]);
    const [imageIterator, setImageIterator] = useState(0);
    const [searchIdValue, setSearchIdValue] = useState(0)
    const [searchNumberValue, setSearchNumberValue] = useState(0)
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const loadIds = async () => {
        try {
            const response = await getIdList();
            setIdList(response.data);
            console.log(idList.data);
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
            setImageIterator(idList.indexOf(parseInt(searchIdValue)))
        }
        else {
            alert("Invalid image ID!");
        }
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
                                    <div className="card-body mx-auto" >
                                        <div>
                                            <div>
                                                <button type="submit" class="btn btn-secondary ">Find similars</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    )
}

export default SimilarityDashboard