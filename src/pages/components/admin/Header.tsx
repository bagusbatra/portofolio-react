interface Props {
  activeTab: string;
  user: any;
}

const Header = ({ activeTab, user }: Props) => {
  return (
    <header className="h-20 bg-secondary/80 backdrop-blur-md border-b border-white/10 px-8 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-xl font-bold capitalize">{activeTab}</h1>

      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold">{user?.name}</p>
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            {user?.role}
          </p>
        </div>

        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
          {user?.name?.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default Header;