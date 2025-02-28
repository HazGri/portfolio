export const Card = ({ classDiv, img, title,classNameImg, text }) => {
  return (
    <div className={`p-2 ${classDiv} border-2 border-gray-950/[.1] rounded-xl gap-2 flex flex-col`}>
      <img
        className={`self-center ${classNameImg}`}
        src={img}
      />
      <h2 className="font-bold">{title}</h2>
      <p className="text-gray-300">
        {text}
      </p>
    </div>
  );
};
