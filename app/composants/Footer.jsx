export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
      <div className="mb-4 ml-2 flex flex-col">
        <p className="text-md font-bold">Contact me</p>
        <a href="mailto:hazemgherissi@gmail.com">
          <p className="font-semi-bold">hazemgherissi@gmail.com</p>
        </a>
      </div>
      <div className="flex gap-2">
        <img className="h-7" alt="icone" src="/images/code-svgrepo-com.svg" />
        <p className="font-bold mb-2 mr-2">Built in React/Next.js</p>
      </div>
    </div>
  );
};
