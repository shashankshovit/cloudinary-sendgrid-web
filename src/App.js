import Header from './Header.jsx';
import Feedback from './Feedback.jsx';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

import {BrowserRouter, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route path='/' exact component={Home} />
    <Route path='/about' exact component={About} />
    <Route path='/feedback' exact component={Feedback} />
  </BrowserRouter>
);

// let App = () => {
//   return (
//     <div>
//       <Header/>
//       <Feedback/>
//       <Layout/>
//     </div>
//   )
// };

export default App;
