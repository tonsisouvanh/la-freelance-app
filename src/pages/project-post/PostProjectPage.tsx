import PostProjectForm from "./PostProjectForm";

const PostProject = () => {
  return (
    <>
      <div className="_container max-sm:p-2 max-sm:pb-28">
        <div className="flex flex-col divide-y-2 p-2">
          <div className="pb-4">
            <h1 className="text-3xl font-bold text-color-1">ບ໋ອດປະກາດຫາວຽກ</h1>
            <p className="mt-2">
              ຜູ້ຈ້າງໂພສດງານທີ່ຕ້ອງການເພື່ອຫາຄົນທີ່ເໝາະກັບງານ <br />{" "}
              ຟີຮແລຮນເລືອກງານທີ່ສົນໃຈ
            </p>
          </div>
          <div className="pt-4">
            <PostProjectForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostProject;
