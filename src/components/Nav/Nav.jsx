import './Nav.scss';


const Nav = ({handleReset}) => {
  return(
<>
<nav className='Nav'>
<h1>My ToDos</h1>
<button className='Nav__button'onClick={handleReset}>Reset</button>
</nav>
</>
  )
}

export default Nav