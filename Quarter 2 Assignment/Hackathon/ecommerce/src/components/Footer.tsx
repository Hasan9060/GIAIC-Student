import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="border-t-2 border-gray-300 p-5">
            <div className="flex flex-wrap justify-between gap-6">
                {/* Company Info */}
                <section className="w-[14rem]">
                    <h2 className="font-bold text-2xl">Funiro.</h2>
                    <p className="text-gray-700">
                        400 University Drive Suite 200 Coral Gables, FL 33134 USA
                    </p>
                </section>

                {/* Navigation */}
                <nav>
                    <h4 className="font-semibold text-lg">Navbar</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                {/* Help */}
                <nav>
                    <h4 className="font-semibold text-lg">Help</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Payment Option</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </nav>

                {/* Newsletter */}
                <section>
                    <h4 className="font-semibold text-lg">Newsletter</h4>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded p-2"
                            aria-label="Your Email"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white font-bold p-2 rounded"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </section>
            </div>

            {/* Footer Bottom */}
            <div className="mt-5 text-center">
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-600">2023 Funiro. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
