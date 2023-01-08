import { useState } from "react";

/* Componente de formulario para buscar gif */
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // Aplicar cambios cuando se escribe
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  // Realizar cambios al hacer un submit en el formulario
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
