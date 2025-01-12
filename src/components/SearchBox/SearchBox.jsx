import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    dispatch(changeFilter(value));
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
