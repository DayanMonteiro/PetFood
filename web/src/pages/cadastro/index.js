import Logo from '../../assets/logo-white.png'
import Illustration from '../../assets/illustration.png'

const Cadastro = () => {
        return (
            <div className="container-fluid h-100 bg-primary">
                <div className="col-12">
                    <img src={Logo} />
                </div>

                <div className="row">
                <div className="col-6">
                    <img src={Illustration} />
                </div>
                <div className="col-6">
                
                    <div className="box">
                        <h2>Falta pouco pra fazer o seu pet feliz.</h2>
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome completo"
                        />

                        <input type="text" className="form-control form-control-lg mb-3" placeholder="E-mail"
                        />

                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone"
                        />

                        <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF"
                        />

                        <input type="date" className="form-control form-control-lg mb-3" placeholder="Data de nascimento"
                        />
                    </div>
                </div>
                </div>

            </div>
        );
};

export default Cadastro;