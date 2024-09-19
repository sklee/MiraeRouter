import './App.css';
import Layout from './Layout/Layout';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
  // const location = useLocation()
  // const navigate = useNavigate()

  return (

    <Layout>

      <Outlet/>
    </Layout>
  );
}

export default App;
