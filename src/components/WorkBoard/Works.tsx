import WorkCard from "../card/WorkCard";


const data = ["1", "2", "3", "4", "5", "6"];

const Works = () => {
  return (
    <>
      <div className="">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-2 md:mb-12">ທົ່ວໄປ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {data.map((_, index) => (
            <div key={index}>
              <WorkCard classname="border" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
