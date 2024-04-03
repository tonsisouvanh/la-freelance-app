const ClientProjectBoard = () => {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 4 }, (__, index) => (
        <div key={index} className="bg-primary/10 rounded-md p-4">
          <div className="space-y-2">
            <h4 className="text-primary text-lg">
              ຂ້ອຍຢາກໄດ້ Dev ມາເຣັດໂປຣເຈັກ ຣ້ານອາຫານ
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>ຈຳນວນເງິນ</p>
                <p>24.000.000ກີບ</p>
              </div>
              <div>
                <p>ໜວດໜູ່</p>
                <p>ຂຽນໂປຣແກຣມ</p>
              </div>
              <div>
                <p>ວັນທີ່ສ້າງ</p>
                <p>14/03/2024</p>
              </div>
              <div>
                <p>ວັນທີ່ສົ່ງມອບ</p>
                <p>2430/08/2024</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientProjectBoard;
