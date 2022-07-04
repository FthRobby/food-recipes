export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="py-4 px-5 bg-dark-800 text-white font-semibold text-center ">
        <div className="capitalize">
          Ayo Masak @ 2022
          {/* <div>
            <a
              className="underline"
              href="https://github.com/tomorisakura/unofficial-masakapahariini-api"
            >
              Api from Unofficial-masakapahariini
            </a>
          </div> */}
          <div className="capitalize text-sm">
            made with <i className="fa fa-coffee text-browen-800"></i> and some{" "}
            <i className="fa fa-cookie-bite text-browen-800"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
