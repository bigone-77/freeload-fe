import Categories from './_components/Categories';
import Header from './_components/Header';
import SubMenu from './_components/SubMenu';

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <SubMenu />
      <Categories />
    </div>
  );
}
