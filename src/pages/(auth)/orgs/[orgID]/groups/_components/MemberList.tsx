import PopoverMember from "./PopoverMember";

const CATEGORIES = [
  {
    id: 1,
    name: "Đà Nẵng",
    members: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://logico.com.vn/upload_images/images/2022/12/06/Discord%201.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Online",
    members: [
      {
        id: 1,
        name: "Chelsea",
        avatar:
          "https://logico.com.vn/upload_images/images/2022/12/06/Discord%201.jpg",
      },
      {
        id: 2,
        name: "EPL",
        avatar:
          "https://logico.com.vn/upload_images/images/2022/12/06/Discord%201.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Offline",
    members: [
      {
        id: 1,
        name: "Siuuu",
        avatar:
          "https://logico.com.vn/upload_images/images/2022/12/06/Discord%201.jpg",
      },
    ],
  },
];
export default function MemberList() {
  return (
    <div className="flex flex-col gap-8">
      {CATEGORIES.map((category) => (
        <div key={category.id} className="flex flex-col gap-4">
          <p className="font-bold ">
            {category.name} - {category.members.length}
          </p>
          <div className="flex flex-col gap-4">
            {category.members.map((member) => (
              <PopoverMember member={member} key={member.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
