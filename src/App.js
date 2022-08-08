// import Rooter from './routes'
import PostList from './component/postlist/postlist';
import Example from './component/hook/Ex1'
import HomePage from './component/onepirate/Home'
import { Routes, Route } from 'react-router-dom';
// import { Button, ButtonGroup } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home'
import AppAppBar from './component/onepirate/modules/views/AppAppBar';
import NotFound from "./component/Page404";
import './App.scss'

function App() {
  return (
    <div>
      <AppAppBar />
      <ButtonGroup variant='contained'>
        <Button
          startIcon={<HomeIcon />}
          color="primary"
        ><Link to="/petrus-app/" >HomePage </Link></Button>
        <Button
          color="success"
        ><Link to="/petrus-app/Example" >Example </Link></Button>
        <Button
          color="success"
        ><NavLink to="/petrus-app/Postlist" >PostList </NavLink></Button>
      </ButtonGroup>

      <Routes>
        <Route path='/petrus-app' element={<HomePage />} />
        <Route path='/petrus-app/Example' element={<Example />} />
        <Route path='/petrus-app/Postlist' element={<PostList />} />
        <Route path= "/404" element= {<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
