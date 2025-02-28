export const Card = ({ width,height, img, title,className, text }) => {
  return (
    <div className={`p-2 border-2 border-gray-950/[.1] rounded-xl gap-2 ${height} ${width} flex flex-col`}>
      <img
        className={`self-center ${className}`}
        src={img}
      />
      <h2 className="font-bold">{title}</h2>
      <p className="text-gray-300">
        {text}
      </p>
    </div>
  );
};
