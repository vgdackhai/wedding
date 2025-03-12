
export default function Album() {
  const files = [
    {
      title: "IMG_4985.HEIC",
      size: "3.9 MB",
      source: "/home.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 h-full">
      {files.map((file) => (
        <div key={file.title} className="relative w-full h-auto">
          <img src={file.source} alt={file.title} />
        </div>
      ))}
    </div>
  );
}
