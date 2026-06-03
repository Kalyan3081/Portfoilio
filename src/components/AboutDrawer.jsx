import PropTypes from "prop-types";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const AboutDrawer = ({ isOpen, onClose, children }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-slate-900 border-l border-slate-800 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          onClick={onClose}
          aria-label="Close Drawer"
        >
          <IoClose size={24} />
        </button>

        <div className="h-full overflow-y-auto p-8 custom-scrollbar">
          {children}
        </div>
      </div>
    </>
  );
};

AboutDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AboutDrawer;