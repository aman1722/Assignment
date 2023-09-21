import "./App.css";
import { AccordionComponent, sections } from "./components/AccordianComponent";
import Authentication from "./components/Authentication";
import ColorPicker from "./components/ColorPicker";
import Conditional from "./components/Conditional";
import Counter from "./components/Counter";
import DragAndDropList from "./components/DragAndDropList";
import DynamicRouting from "./components/DynamicRouting";
import { Fetch, myItems } from "./components/Fetch";
import FormHandler from "./components/FormHandler";
import ImageGallery from "./components/ImageGallery";
import SearchFilter from "./components/SearchFilter";
import Slider from "./components/Slider";
import Timer from "./components/Timer";
import TodoWrapper from "./components/TodoWrapper";
import ToogleContent from "./components/ToogleContent";

function App() {
  return (
    <div className="App">
      <h1>FrontEnd Assigments</h1>
      <ColorPicker />
      <ImageGallery />
      <AccordionComponent sections={sections} />
      <DynamicRouting />
      <FormHandler />
      <ToogleContent
        defaultVisibility={false} // Set to true to initially show content
        buttonLabel="Toggle Content"
        content={<p>This is the hidden content you can toggle.</p>}
      />
      <Timer />
      <Counter />
      <Authentication />
      <DragAndDropList />
      <Slider />
      <Conditional />
      <SearchFilter items={myItems} />
      <Fetch />
      <TodoWrapper />
    </div>
  );
}

export default App;
