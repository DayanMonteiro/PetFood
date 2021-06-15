import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <div>
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqbCOtwCz7nYn6Goy_RJF9PS9n0TrKxpzLhkb__xgrJ4BWzq1xx40dQNhOhC8nBNFC38jQAwY2MA&usqp=CAc" className="img-fluid align-center" />
                <button className="btn btn-primary rounded-circle" >+</button>
                <h4>
                    <label className="badge badge-primary">R$ 48,00</label>
                </h4>
                <small>
                    <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
                </small>
            </div>
        </div>
    );
};

export default Product;