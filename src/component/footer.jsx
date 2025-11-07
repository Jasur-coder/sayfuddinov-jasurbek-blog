const Footer = () => {
  return <footer>
    <div className="w-full bg-gray-900">
      <div className="bg-gray-700 py-4">
        <p className="text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Sayfuddinov Jasurbek Blog Site. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
};
export default Footer;
