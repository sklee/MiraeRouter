import './App.css';
import RootRoutes from './common/routes/index';
import { BrowserRouter } from 'react-router-dom'

function App() {
  // const location = useLocation()
  // const navigate = useNavigate()

  return (
    // <BrowserRouter basename="nrv_svc/web/smn/nrv">
    <BrowserRouter>
    <RootRoutes />
    </BrowserRouter>
  );
}

export default App;
