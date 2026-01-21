// ServiceSearch.js
const ServiceSearch = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  const clearFilter = () => {
    dispatch(setSearchFilter(''));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск услуг..."
        onChange={handleSearchChange}
      />
      <button onClick={clearFilter}>Очистить фильтр</button>
    </div>
  );
};
