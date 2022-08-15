import './SearchBar.scss';

const SearchBar = ({onInput}) => {

  return(
<>
<form className='SearchBar' action="">
  <input type="text" onInput={onInput} placeholder="enter task here..."/>
  <button>+</button>
  
</form>
</>
  )
}
export default SearchBar