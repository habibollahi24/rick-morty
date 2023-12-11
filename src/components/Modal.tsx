type ModalProps = {
  children?: React.ReactNode;
  onOpen?: (bol: boolean) => void;
};

function Modal({ children, onOpen }: ModalProps) {
  return (
    <>
      <div
        onClick={() => onOpen?.(false)}
        className="w-full h-full bg-gray-600/40 fixed top-0 left-0 z-10 transition-all"
      ></div>
      <div className="bg-gray-100 max-h-96 overflow-auto fixed z-20 w-96 left-1/2 -translate-x-1/2 mx-auto top-12 rounded-md p-10 shadow-lg">
        {children}
        <button
          className="absolute top-3 right-3"
          onClick={() => onOpen?.(false)}
        >
          ✖
        </button>
      </div>
    </>
  );
}

export default Modal;
