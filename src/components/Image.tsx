// import { useState, FC } from "react";
// interface ImageProps {
//   image: string;
//   className?: string;
//   skeletonClassName?: string;
// }

// const Image: FC<ImageProps> = ({ image, className, skeletonClassName }) => {
//   const [loading, setLoading] = useState<boolean>(true);

//   const imageLoaded = () => {
//     setLoading(false);
//   };

//   return (
//     <>
//       {loading && (
//         <div
//           className={`flex items-center justify-center w-full h-full bg-gray-300 rounded animate-pulse ${skeletonClassName}`}
//         >
//           <svg
//             className="w-10 h-10 text-gray-200 dark:text-gray-600"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 18"
//           >
//             <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
//           </svg>
//         </div>
//       )}
//       <img
//         style={{ display: loading ? "none" : "block" }}
//         src={image}
//         onLoad={imageLoaded}
//         alt="Logo"
//         className={className}
//       />
//     </>
//   );
// };

// export default Image;

import { FC, useState } from "react";
import { FaImage } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface ImageProps {
  image: string;
  altText?: string;
  className?: string;
  width?: string;
  height?: string;
  skeletonClassName?: string;
}

const Image: FC<ImageProps> = ({
  image,
  altText = "Image",
  className,
  width,
  height,
  skeletonClassName = "bg-gray-300",
}) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  const skeletonClasses = twMerge(
    "flex animate-pulse items-center justify-center rounded-lg",
    skeletonClassName
  );

  const skeleton = (
    <div className={skeletonClasses}>
      <FaImage className="text-5xl text-gray-200" />
    </div>
  );

  return (
    <>
      {loading && skeleton}
      <img
        style={{ display: loading ? "none" : "block" }}
        src={image}
        onLoad={imageLoaded}
        alt={altText}
        className={className}
        width={width}
        height={height}
      />
    </>
  );
};

export default Image;
