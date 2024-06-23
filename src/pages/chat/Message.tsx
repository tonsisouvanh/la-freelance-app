type Props = {
  messageType: string;
};

const Message = ({ messageType }: Props) => {
  return (
    <>
      {messageType === "incoming" ? (
        <div className="flex items-start mb-4">
          <div className="min-w-8 min-h-8 rounded-full flex items-center justify-center mr-2">
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex border max-w-96 bg-white rounded-lg p-3 gap-3">
            <p className="text-gray-700">Lorem ipsum dolor!</p>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-end mb-4">
          <div className="flex max-w-96 bg-color-1 text-white rounded-lg p-3 gap-3">
            <p>Absolutely! Can't wait for our pizza date. 🍕</p>
          </div>
          <div className="min-w-8 min-h-8 rounded-full flex items-center justify-center ml-2">
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
