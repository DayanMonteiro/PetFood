
import './style.css';
   
const Product = () => {
    
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ94WTeEGmH3pssuq4ccVaG8sASpd2_ymtgglMD8LtOcLWuCDZBSYhh_KvPCaP2bo4kORawtf8g-jg&usqp=CAc" className="img-fluid" />
                </div>
            <div className="col-6">
                <h6>
                    <label className="badge badge-primary">
                        R$ 30,00
                    </label>
                </h6>
                <small>
                    <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
                </small>
            </div>
            <div className="col-3">
                <button className="btn btn-secondary rounded-circle">
                    -
                </button>
            </div>
        </div> 
    </div> 
    );
};

export default Product;