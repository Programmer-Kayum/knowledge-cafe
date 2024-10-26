import profile from "../../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between bg-slate-200 lg:p-2 rounded-xl mb-5">
      <div>
        <h2 className="lg:text-2xl lg:font-bold font-semibold lg:pt-0 pl-3 pt-2 lg:pt-3 lg:pl-3">
          Knowledge Cafe
        </h2>
      </div>
      <div>
        <img className="h-10" src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
