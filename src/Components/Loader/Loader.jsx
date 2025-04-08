const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-white rounded-full inline-block relative box-border animate-spin">
        {/* Top-left dot */}
        <div className="absolute left-0 top-0 bg-[#FF3D00] w-1.5 h-1.5 rounded-full transform translate-x-[150%] translate-y-[150%]" />
        {/* Bottom-right dot */}
        <div className="absolute right-0 bottom-0 bg-[#FF3D00] w-1.5 h-1.5 rounded-full transform translate-x-[-150%] translate-y-[-150%]" />
      </div>
    </div>
  );
};

export default Loader;
