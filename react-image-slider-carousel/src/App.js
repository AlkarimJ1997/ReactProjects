import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/ImageSlider/Data';
import './App.css';

function App() {
    return (
        <>
            <ImageSlider slides={SliderData}/>
        </>
    );
}

export default App;
