import { Input } from "@/components/ui/input";
import { User } from "@/lib/type";

interface Props {
  member: User;
}

export default function InfoPopover({ member }: Props) {
  return (
    <div className="flex flex-col gap-12 bg-gray-900 rounded-md">
      <div className="relative  bg-blue-900 h-16 rounded-t-md">
        <div className=" absolute top-3 left-3 bg-gray-900 p-2 w-24 h-24 rounded-full">
          <img
            src={member.avatar}
            alt={member.name}
            className=" w-20 h-20 rounded-full object-cover "
          />
        </div>
      </div>
      <div className="w-full h-full p-4">
        <div className="w-full h-full bg-primary-foreground/10 rounded-sm p-2">
          <p className="text-xl font-bold">{member.name}</p>
          <p className="text-l">{member.name}</p>
          <hr className="bg-black my-3 border w-full" />
          <p className="text-sm font-bold uppercase">Gia nhập từ</p>
          <div className="flex gap-2">
            <p className="flex items-center text-sm gap-1">
              <img className="w-6 h-6 " src="/src/imgs/Discord.svg" alt="" />
              05/02/2020
            </p>
            <p className="flex items-center text-sm gap-1">
              <p className="bg-primary-foreground/20 text-xs px-1 rounded-full">
                D
              </p>
              05/11/2023
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm font-bold uppercase">Vai trò</p>
            <div className="flex gap-2">
              <div className="flex items-center gap-x-1 bg-primary-foreground/20 px-1 rounded-sm">
                <div className="bg-white h-3 w-3 rounded-full"></div>
                <p className="flex items-center text-m">học viên</p>
              </div>
              <div className="flex items-center gap-x-1 bg-primary-foreground/20 px-1 rounded-sm">
                <div className="bg-green-600 h-3 w-3 rounded-full"></div>
                <p className="flex items-center text-m">học viên</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-sm font-bold uppercase">Ghi chú</p>
            <Input
              className=" bg-transparent"
              placeholder="Nhập để xem ghi chú"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
