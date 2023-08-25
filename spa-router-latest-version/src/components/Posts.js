function Posts() {
    
    return (
        
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        <Outlet />
        <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}>
    Home
    </Link>
    <Link to="/posts" style={{ padding: 5 }}>
    Posts
    </Link>
    <Link to="/about" style={{ padding: 5 }}>
    About
    </Link>
</nav>
      </div>
    );

  }
  export default Posts;