export default function Footer() {
  return (
    <footer className="bg-white  text-black py-10">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* العمود الأول */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
          </p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
