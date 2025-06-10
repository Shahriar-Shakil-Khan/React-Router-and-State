import React from 'react';
import Link from './Link';

const navigationData=[
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About Us', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 5, name: 'Contact', path: '/contact' }
];


const Navbar = () => {
    return (
        <nav>

            {
               navigationData.map(route=><Link key={route.id} route={route}></Link>) 
            }

        {/* <ul className='flex'>
            {
              navigationData.map(route=><li className='mr-2'><a href={route.path}>{route.name}</a></li>)  
            }
        </ul> */}



             {/* <ul className='flex'>
                <li className='mr-2'><a href="">Home</a></li>
                <li className='mr-2'><a href="">About</a></li>
                <li className='mr-2'><a href="">Blog</a></li>
             </ul> */}
        </nav>
    );
};

export default Navbar;