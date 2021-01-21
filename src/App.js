import './App.css';
import {Header, Block, TopBar, IntroBlock} from './components'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-block-wrapper">
        <div className="main-block">
          <TopBar/>
          <Block>
            <IntroBlock/>
          </Block>
          <Block>

          </Block>
          <Block>

          </Block>
          <Block>

          </Block>
        </div>
      </div>
    </div>
  );
}

export default App;
