import "./styles.css";
import { useRef } from "react";
import { ChildComponent } from "./ChildComponent";
export default function App() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focusInput();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>useRef and forwardRef</h2>
      <ChildComponent ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
