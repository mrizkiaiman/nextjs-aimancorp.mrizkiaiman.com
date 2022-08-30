import { TRUSTED_BY } from '../../_config'

export const TrustedBy = () => {
  return (
    <div className="bg-white w-full h-full py-12 md:py-32 flex flex-col justify-center items-center">
      <div className="py-12 md:py-20">
        <p className="text-3xl md:text-6xl text-center font-bold tracking-tighter">Trusted by</p>
        {/* <div className="h-2 bg-gray-500 w-40 md:w-56 rounded-md mt-4" /> */}
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        {TRUSTED_BY.map((item, index) => (
          <img key={item.name} alt={item.name} className={`mx-3 md:mx-14 my-4 md:my-12 h-24 w-24 md:h-44 md:w-44`} src={item.img} />
        ))}
      </div>
      <p className="text-center italic font-semibold text-gray-400 text-2xl md:text-3xl w-full px-4 md:px-0 md:w-2/4 pt-20">
        We believe in good communication and a fully transparent development process.
      </p>
    </div>
  )
}
