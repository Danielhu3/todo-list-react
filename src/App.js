import './App.css';
import BottomBar from './Components/BottomBar';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      {
        // top
      }
      <div className='top'>
        <div className='top-header'>
          <h1 className='title'>TODO</h1>
          <button className='dark-mode'></button>
        </div>
        
      </div>
     
      {
        // bottom
      }
      <div className='bottom'>
          <div className='bottom-list'>
            <div className='bottom-list-create'>
              <Input placeholder='Create a new todo...'/>
            </div>
            <div className='bottom-list-created'>
              <Input text='aaa'/>
              <Input text='bbb'/>
              <Input text='cc'/>
              <Input text='aaa'/>
              <Input text='bbb'/>
              <Input text='cc'/>
              <BottomBar />
            </div>  
          </div>

          <p className='bottom-description'>Drag and drop to reorder list</p>
      </div>

    </div>
  );
}

export default App;
