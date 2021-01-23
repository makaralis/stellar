import './App.css';
import {Header, Block, NavBar, IntroBlock, FirstSectionBlock, SecondSectionBlock, GetStartedBlock, LearnMoreBtn} from './components'

function App() {
  const icons = [{src:'/twitter.png'}, {src:'/github.png'}, {src:'/fb.png'}, {src:'/camera.png'}, {src:'/ball.png'}]

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
      <footer>
        <div className="left-section">
          <h3>Aliquam sed mauris</h3>
          <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, 
            nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
          <LearnMoreBtn/>  
        </div>
        <div className="right-section">
          <h3>Etiam feugiat</h3>
          <dl>
            <dt>Address</dt>
            <dd>1234 Somewhere Road • Nashville, TN 00000 • USA</dd>
            <dt>Phone</dt>
            <dd>(000) 000-0000 x 0000</dd>
            <dt>Email</dt>
            <dd>
              <a className="email" href="#">information@untitled.tld</a>
            </dd>
          </dl>
          <ul className="icons">
            { icons.map((icon,index) => {
              return (
                <li className={'icon' + (!index ?  ' first-icon' : '')}>
                  <a>
                    <img
                      src={process.env.PUBLIC_URL + '/social' + icon.src}
                      alt={icon.alt}
                      className={'icon-img' + (!index ?  ' first-icon-img' : '')}>
                    </img>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="copyright">
            © Untitled. Design: 
            <a href="https://html5up.net">
               HTML5 UP
            </a>
            .  Demo Images: 
            <a href="https://unsplash.com">
               Unsplash
            </a>
            .
          </p>
      </footer>
    </div>
  );
}

export default App;
