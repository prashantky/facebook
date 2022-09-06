// export const RadioButton = (props) => {
//     const { changed, id, isSelected, label, value } = props;
//     return (
//       <div className="RadioButton">
//         <input
//           id={id}
//           onChange={changed}
//           value={value}
//           type="radio"
//           checked={isSelected}
//         />
//         <label htmlFor={id}>{label}</label>
//       </div>
//     );
//   };
import InputFieldError from "./../Error/InputFieldError";
import React, { useEffect } from "react";

const RadioWithLevel = ({
  width = "lg:w-12/12",
  fieldClass = [],
  bodyClass = [],
  levelClass = [],
  children,
  isFocused,
  id,
  radioHandle,
  list,
  errors
}) => {
  console.log("hello", list);
  const inputRef = React.useRef();
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div className="">
      <div className="text-left !important">
        <span className="gender"> {children}</span>
        <div className="d-flex ">
          {list &&
            list.map((item) => (
              <label key={item.key} className="">
                <input
                  onClick={radioHandle}
                  id={id}
                  name={id}
                  value={item.value}
                  type="radio"
                  className="radion-option-register mb-2"
                />
                <span>{item.value}</span>
              </label>
            ))}
        </div>
        <InputFieldError error={errors && errors} />
      </div>
    </div>
  );
};
export default RadioWithLevel;
