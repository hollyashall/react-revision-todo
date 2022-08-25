import './SearchBar.scss';

const SearchBar = ({onInput, handleSubmit}) => {

  return(
<>
<form className='SearchBar' action="">
  <input className='SearchBar__input' type="text" onInput={onInput} placeholder="enter task here..."/>
  <button className='searchBar__button' onClick={handleSubmit}>+</button>
  
</form>
</>
  )
}
export default SearchBar