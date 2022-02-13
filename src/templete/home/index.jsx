import { HomeContext } from '../../contexts/HomeContext';
import { List } from '../../components/list';

import Navbar from '../../components/navbar';
import Register from '../../components/register';

import './styles.css';

function Home() {
  return (
    <HomeContext>
      <Navbar />
      <Register />
      <List />
    </HomeContext>
  );
}

export default Home;
