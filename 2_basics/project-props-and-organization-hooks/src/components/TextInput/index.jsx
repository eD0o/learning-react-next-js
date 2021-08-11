import "./styles.css";
export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <>
      <input
        className="text-input"
        placeholder="Type your search..."
        onChange={handleChange}
        value={searchValue}
        type="search"
      />
    </>
  );
};
