import './App.css';
import { MyName } from './MyName/MyName';
import { Welcome } from './Welcome/Welcome';
import { Image } from './Image/Image';
import { FavoriteSite } from './FavoriteSite/FavoriteSite';
import { PlusNumbers } from './PlusNumbers/PlusNumbers';
import { List } from './Colors/ColorsList';

function App() {
  return (
    <div className="App">
      <MyName />
      <Welcome />
      <Image />
      <FavoriteSite />
      <PlusNumbers />
      <List />
    </div>
  );
}

export default App;