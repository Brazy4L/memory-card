const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div className="grid text-2xl font-bold">Apex Legends Memory Card</div>
      <div className="grid text-2xl lg:justify-center">
        Try to Click Each Card Once
      </div>
      <div className="grid font-semibold lg:justify-center">
        <div>Best Score:</div>
        <div>Score:</div>
      </div>
    </div>
  );
};

export default Header;
