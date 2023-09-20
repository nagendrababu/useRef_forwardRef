import { forwardRef, useRef, useImperativeHandle } from "react";
export const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
});
