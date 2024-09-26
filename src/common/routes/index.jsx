import { Routes, Route, useLocation} from 'react-router-dom'
import NRVCOMNM00 from '../../pages/nrv/comn/NRVCOMNM00'

const RootRoutes = () => {
  const location = useLocation()

  return (
    <>
      <Routes location={location}>
        <Route path="comn/NRVCOMNM00" element={<NRVCOMNM00 />} />
      </Routes>
    </>
  )
}

export default RootRoutes