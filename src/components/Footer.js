function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 dark:bg-gray-800 w-full py-8">
                <div className="max-w-screen-xl px-4 mx-auto">
                    <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
                        <li className="my-2">
                            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/faq">
                                FAQ
                            </a>
                        </li>
                        <li className="my-2">
                            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/config">
                                Configuration
                            </a>
                        </li>
                        <li className="my-2">
                            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/github">
                                Github
                            </a>
                        </li>
                        <li className="my-2">
                            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/linkedin">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer;