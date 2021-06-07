import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllCourses />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
