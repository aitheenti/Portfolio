
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Navneel Kuppili</p>
                <div className="mt-2">
                    <a className="text-blue-400 hover:text-blue-600 mx-2" href="/about">
                        About Me
                    </a>
                    <a className="text-blue-400 hover:text-blue-600 mx-2" href="/design">
                        Design
                    </a>
                    <a className="text-blue-400 hover:text-blue-600 mx-2" href="/contentcreation">
                        Content Creation
                    </a>
                    <a className="text-blue-400 hover:text-blue-600 mx-2" href="/resume">
                        Resume
                    </a>
                    <a className="text-blue-400 hover:text-blue-600 mx-2" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;