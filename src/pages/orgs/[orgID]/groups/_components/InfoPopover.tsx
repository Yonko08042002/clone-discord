export default function InfoPopover() {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative bg-slate-400 h-16 rounded-t-md">
        <img
          src=" https://logico.com.vn/upload_images/images/2022/12/06/Discord%201.jpg"
          alt=""
          className="absolute top-2 left-2 w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="w-full h-full p-4">
        <div className="w-full h-24 bg-black rounded-sm"></div>
      </div>
    </div>
  );
}
