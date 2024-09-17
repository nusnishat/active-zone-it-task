import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='lato' style={{ position: "relative" , width:'1920px'}}>
      {/* Sidebar*/}
      <Sidebar />

      {/* Main content */}
      <div style={{ marginLeft: "60px" }}> {/* Adjust for sidebar width */}
        <Header />
        <Main>
        </Main>
      </div>
    </div>
  );
}

export default App;
