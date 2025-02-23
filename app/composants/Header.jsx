'use client';

export const Header = () => {
  return (
    <header className="flex justify-between items-center font-semibold text-[25px]">
      <div>Hazem.com</div>
      <div>
        <ul className="flex gap-5 text-base">
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>CV</li>
        </ul>
      </div>
    </header>
  )
}
