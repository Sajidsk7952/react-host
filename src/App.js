import logo from './logo.svg';
import './App.css';
const RemoteA = React.lazy(()=>{import("remoteA/remoteAremoteEntry")})
function App() {
  return (
    <div>
      <RemoteA />
    </div>
  );
}

export default App;
