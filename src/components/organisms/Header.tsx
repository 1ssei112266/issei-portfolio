import { NavLink } from '../molecules/NavLink'

export const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm border-b border-base-200">
      <div className="container mx-auto">
        <div className="navbar-start">
          <NavLink href="/" className="btn btn-ghost text-xl font-bold">
            Issei Suzuki
          </NavLink>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <NavLink href="/" className="btn btn-ghost">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/works" className="btn btn-ghost">
                Works
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" className="btn btn-ghost">
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="/blog" className="btn btn-ghost">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/works">Works</NavLink></li>
              <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/blog">Blog</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}