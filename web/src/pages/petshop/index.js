import './styles.css';
import Header from '../../components/header';
import Product from '../../components/product/card';

const Petshop = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" className="img-fluid petshop-image" />
                        <b>PetLove</b>
                        <div className="petshop-infos">
                        <span class="mdi mdi-star"></span>
                            <text>
                                <b>2,8</b>
                            </text>
                            <span class="mdi mdi-cash-usd-outline"></span>
                            <text>$$$</text>
                            <span class="mdi mdi-crosshairs-gps"></span>
                            <text>2,9km</text>
                            <label className="badge badge-primary">Frete Grátis</label>
                        </div>
                    </div>
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div>
                            <div className="row">
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => ( <Product /> ))};
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Petshop;