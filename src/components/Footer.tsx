export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-900 font-bold text-lg">AryanDev.</p>
          <p className="text-gray-500 text-sm mt-1">Building digital experiences that matter.</p>
        </div>
        
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Aryan Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
