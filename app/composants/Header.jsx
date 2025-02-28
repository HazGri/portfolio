"use client";

export const Header = () => {
  return (
    <header
      style={{ backgroundColor: "#0F2027" }}
      className="flex bg-gray-900 h-1 fixed top-0 left-0 right-0 justify-between items-center font-semibold text-[25px] z-10 p-5 shadow-md"
    >
      <button
        className="outline-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Hazem
      </button>
      <div>
        <ul className="flex gap-5 text-base">
          <a href="https://www.linkedin.com/in/hazem-g-884824304/">
            <li>Linkedin</li>
          </a>
          <a href="https://github.com/HazGri">
            <li>GitHub</li>
          </a>
          <li>CV</li>
        </ul>
      </div>
    </header>
  );
};
