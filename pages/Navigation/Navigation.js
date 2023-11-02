import Link from 'next/link'

export default function Navigation() {
    const menuLinks = [
        { page: 'About Me', route: '/about' },
        { page: 'UI/UX Design', route: '/design' },
        { page: 'Content Creation', route: '/content' },
        { page: 'Resume', route: '/resume' },
        { page: 'Contact', route: '/contact' },
    ]

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <div class="py-4 flex items-center p-10">
                    <div class="w-1/12">
                        <a href='/' > <img src="/NK.svg" /></a>
                    </div>
                    <div class="w-11/12 flex justify-evenly">
                        {menuLinks?.map(link => <Link className="text-xl font-bold"
                            href={link.route}>{link.page}</Link>)}
                    </div>
                </div>
            </div>
        </header>
    )
}