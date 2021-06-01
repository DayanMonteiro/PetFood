import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/global.css';
import Home from './pages/home';
import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';

const Routes = () => {
    return (
        <>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/petshop/:id" exact component={Petshop} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/cadastro" exact component={Cadastro} />
        </Router>
        <Sidebar />
        </>
    )
};

export default Routes;