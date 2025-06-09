export default function Video() {
  return (
    <div className="w-full items-start">
      <div className="py-2">
        <video
          className="w-full h-full animate-fade-up"
          controls
          src="/videos/parking.mp4"
        ></video>
      </div>
    </div>
  );
}
