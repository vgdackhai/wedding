export default function Video() {
  return (
    <div className="w-full items-start">
      <div>
        <div className="text-lg font-medium">Hướng dẫn gửi xe</div>
        <div className="py-2">
          <video
            className="w-full h-full"
            controls
            src="/videos/parking.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}
