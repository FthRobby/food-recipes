import ImageHero from "../assets/images/hero-chef.svg";

export default function Hero({ refRecipes }) {
  const showRef = () => {
    window.scrollTo({
      top: refRecipes.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-5">
      <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row lg:justify-between ">
        <div className="text-3xl lg:text-5xl text-gray-800 text-center lg:text-left font-bold capitalize">
          <p>memasak tidaklah sulit, </p>
          <p className="mb-4">
            Setiap orang punya selera meski tidak menyadarinya.
          </p>
          <p className="mb-4 text-lg font-normal text-browen-800 lg:w-3/4">
            ketika anda menikmati makanan yang anda buat sendiri, kebahagian itu
            tak ternilai harganya.
          </p>
          <button
            onClick={() => showRef()}
            className="px-3 py-2 font-bold text-lg rounded bg-browen-800 text-white inline"
          >
            Ayo Masak!!
          </button>
        </div>
        <div className="hidden lg:block">
          <img src={ImageHero} alt="Ayo masak chef" className="h-100" />
        </div>
      </div>
    </div>
  );
}
