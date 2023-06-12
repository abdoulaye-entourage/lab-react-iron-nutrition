import { useState } from 'react';

function HideShowButton({ handleForm }) {
  console.log(handleForm);
  const [isOpened, setIsOpened] = useState(false);
  function handleClick() {
    setIsOpened(!isOpened);
    handleForm();
  }
  return (
    <button className="addAndHideButton" onClick={handleClick}>
      {isOpened ? 'Hide Form' : 'Add food'}
    </button>
  );
}
export default HideShowButton;
