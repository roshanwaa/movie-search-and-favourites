const SearchBox = ({ value, setSearchValue }) => {
  return (
    <>
      <div className="col col-md-4 col-sm-4 ">
        <input
          placeholder="What're you searching for?"
          aria-describedby="button-addon4"
          class="form-control  border-2"
          value={value}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
