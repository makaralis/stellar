import './App.css';
import {Header, Block, NavBar, IntroBlock, FirstSectionBlock, SecondSectionBlock, GetStartedBlock} from './components'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-block-wrapper">
        <div className="main-block">
          <NavBar/>
          <Block>
            <IntroBlock/>
          </Block>
          <Block>
            <FirstSectionBlock/>
          </Block>
          <Block>
            <SecondSectionBlock/>
          </Block>
          <Block>
            <GetStartedBlock/>
          </Block>
        </div>
      </div>
    </div>
  );
}

export default App;
