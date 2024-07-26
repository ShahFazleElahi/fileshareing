import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';



function App() {

  const [file, setFile] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file){
        const data = new FormData();
        data.append("name", file.name); 
        data.append("file", file); 
        let response = await uploadFile(data);
      }
    }
  },[file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  } 

  console.log(file);

  return (
    <div className='cont ainer'>
      <div className='wrapper'>
        <h1>
          File Shareing!
          <p>
            Uplode and share the downlode link.
          </p>
          <button onClick={() => onUploadClick()}>
            Uplode
          </button>
          <input type="file"
          ref={fileInputRef}
          style={{display: 'none'}}
          onChange={(e) => setFile(e.target.files[e])}
          />
        </h1>
      </div>
    </div>
  );
}

export default App;
