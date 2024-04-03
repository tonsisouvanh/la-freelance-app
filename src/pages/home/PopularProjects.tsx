const PopularProjects = () => {
  return (
    <div className="p-1">
      <h1 className="text-primary text-2xl md:text-4xl font-bold mb-4">
        ງານຍອດນິຍົມ
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {Array.from({ length: 6 }, (__, index) => (
          <div
            key={index}
            className="group cursor-pointer p-1 h-fit py-6 flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm border duration-200 "
          >
            <p className="max-sm:text-xs">ແປພາສາຈີນ</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default PopularProjects;
