import css from "./SearchBox.module.css";

const SearchBox = ({ toSearch }) => {
  const handleInput = ({ target: { value } }) => {
    toSearch(value);
  };

  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        name="query"
        onChange={handleInput}
      />
    </div>
  );
};
export default SearchBox;
