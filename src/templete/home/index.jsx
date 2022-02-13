import { List } from '../../components/list';
import { HomeContext } from '../../contexts/homeContext';
import Navbar from '../../components/navbar';
import Register from '../../components/register/form';

import './styles.css';

function Home() {
  return (
    <HomeContext>
      <Navbar />
      <div className="container">
        <Register />
        <List />
      </div>
    </HomeContext>
  );
}

export default Home;
