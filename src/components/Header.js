const Header = () => {
  return (
    <>
      <div className="sticky top-0 flex grow w-screen bg-slate-900 text-white">
        <ul className="flex flex-none w-1/4 font-medium	">
          <li className="m-5 ml-16">Home</li>
          <li className="m-5">About</li>
          <li className="m-5">Contact</li>
        </ul>
        <h1 className="text-5xl grow mt-1 text-center font-bold	">Movies Universe</h1>
      <p className="w-1/4"></p>
      </div>
    </>
  );
};

export default Header;
