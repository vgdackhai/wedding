import {
  MapPinIcon
} from "@heroicons/react/24/outline";

export default function Event() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="min-w-[600px] w-0 p-8 bg-white text-black space-y-4 animate-fade-up">
        <div className="relative w-full">
          <img src="/event.jpg" className="w-full h-full object-cover" />
        </div>
        <a
          target="_blank"
          href="https://maps.app.goo.gl/8nZ4UQgT68hWDGEX6"
          className="flex items-center justify-center text-indigo-500 hover:text-indigo-700 hover:underline"
        >
          <div>
            <MapPinIcon className="w-6 h-6" />
          </div>
        </a>
      </div>
    </div>
  );
}
