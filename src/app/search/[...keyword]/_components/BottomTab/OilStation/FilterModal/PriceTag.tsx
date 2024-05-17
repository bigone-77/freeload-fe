interface IPriceTagProps {
  name: string;
}

export default function PriceTag({ name }: IPriceTagProps) {
  return (
    <div className="flex flex-col gap-3">
      <p>{name}</p>
      <select
        // value={profile.gender}
        // onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
        className="border border-gray-300 rounded-lg w-48 h-12 appearance-none text-sm pl-8 pr-4 focus:outline-none"
      >
        <option value="">선택</option>
        <option value="pricy">가격 높은순</option>
        <option value="no-pricy">가격 낮은순</option>
      </select>
    </div>
  );
}
