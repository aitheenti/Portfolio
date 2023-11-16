import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Navigation() {
    const menuLinks = [
        { page: 'About Me', route: '/about' },
        { page: 'UI/UX Design', route: '/design' },
        { page: 'Content Creation', route: '/content' },
        { page: 'Resume', route: '/resume' },
        { page: 'Contact', route: '/contact' },
    ]
    const [iconToggle, setIconToggle] = useState(false);

    function toggleMenu() {
        setIconToggle(!iconToggle)
    }

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <div class="py-4 flex justify-between p-5">
                    <div class="w-1/12">
                        <a href='/' > <img src="/NK.svg" /></a>
                    </div>
                    <div onClick={toggleMenu} class="flex flex-col justify-end items-end duration-200  ">
                        {iconToggle ? <><CloseIcon /> <div class="w-11/12 flex self-end justify-evenly flex-col w-auto ">
                            {menuLinks?.map(link => <Link className="self-end text-xl font-bold p-5"
                                href={link.route}>{link.page}</Link>)}
                        </div> </> :
                            <MenuIcon />
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}