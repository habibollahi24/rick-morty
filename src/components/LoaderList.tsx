type Props = {
  number?: number;
};

function LoaderList({ number = 5 }: Props) {
  return (
    <div>
      {[...new Array(number)].fill(1).map((_, index) => {
        return (
          <div
            key={index}
            className="h-24 mx-auto border-2 border-gray-300/30 rounded-md w-full mb-6"
          >
            <div className="flex flex-row items-center  h-full space-x-5 animate-pulse p-2">
              <div className="w-16 h-16  bg-gray-300 rounded-2xl "></div>
              <div className="flex flex-col space-y-3">
                <div className="h-6 bg-gray-300 rounded-md w-36 "></div>
                <div className="w-32 h-6 bg-gray-300 rounded-md "></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LoaderList;

export function LoaderCart() {
  return (
    <div className="h-52 mx-auto border-2  border-gray-300/30 rounded-md w-full mb-2">
      <div className="flex flex-row items-center  h-full space-x-5 animate-pulse ">
        <div className="w-52 h-52  bg-gray-300  "></div>
        <div className="flex flex-col space-y-3">
          <div className="h-6 bg-gray-300 rounded-md w-44 "></div>
          <div className="w-32 h-6 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-6 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-6 bg-gray-300 rounded-md "></div>
        </div>
      </div>
    </div>
  );
}
export function LoaderEpisode() {
  return (
    <div className="h-72 mx-auto border-2  border-gray-300/30 rounded-md w-full mb-2 p-4">
      <div className="flex justify-between flex-row items-center  h-full space-x-5 animate-pulse ">
        <div className="flex flex-col space-y-3">
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-56 h-4 bg-gray-300 rounded-md "></div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
          <div className="w-32 h-4 bg-gray-300 rounded-md "></div>
        </div>
      </div>
    </div>
  );
}
