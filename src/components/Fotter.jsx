const Footer = () => {
    return (
      <>
        <footer className="w-full bg-opacity-10 backdrop-filter backdrop-blur-lg text-gray-400 text-center py-4 shadow-4xl ">
          <p className="mb-2 font-medium">
            Thank you for visiting my portfolio. Let's stay connected!
          </p>
          <p className="mb-2 text-gray-600">Based in Noida, India</p>
          <p className="text-gray-600 font-semibold text-sm">
            © {new Date().getFullYear()} Nitin Saini. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            You've reached the end! Hope you enjoyed the scroll. 🚀
          </p>
        </footer>
      </>
    );
  };
  
  export default Footer;
  