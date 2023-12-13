const Footer = () => {
  return (
    <div className="p-4 bg-lime-700">
      <div className="text-muted text-center text-white">
        {`Muslim App by `}
        <a href="https://github.com/demasarvin/" className="text-lime-300">
          {`demas arvin `}
        </a>
        {`made with ❤️ | `}
        <a href="https://react.dev/" className="text-sky-400">
          reactjs
        </a>
        {` + `}
        <a href="https://tailwindcss.com/" className="text-sky-300">
          tailwindcss
        </a>
        {` + `}
        <a
          href="https://github.com/Otang45/muslim-api"
          className="text-amber-500"
        >
          muslimapi
        </a>
      </div>
    </div>
  );
};
export default Footer;
