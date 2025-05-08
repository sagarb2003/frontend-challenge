import Accordian from "./components/Accordian/Accordian";
import Counter from "./components/Counter";
import ImageGallery from "./components/ImageGallery";
import StarRating from "./components/StarRating";
import { useTheme } from "./context/ThemeContext";


function App() {
  const {theme}= useTheme();
  return (
    <div className={` min-h-screen ${theme==='light' ? 'bg-white' : 'bg-gray-800'}`}>
     {/* <Counter/> */}
     {/* <ImageGallery/> */}
     {/* <Accordian/> */}
     <StarRating/>
    </div>
  );
}

export default App;
