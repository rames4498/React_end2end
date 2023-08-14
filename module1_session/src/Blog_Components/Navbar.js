const Navbar = () => {

    return (
      <nav className="navbar">
        <h2>My Experiments with life</h2>
        <div className="links">
        <a href={'/'}>Home</a>
        <a href={'/create'}>New Story</a>
        <a href={'/contact'}>Where to find me</a>
        </div>
      </nav>
      );
}
 
export default Navbar;