import { TESTIMONIALS } from '../../_config'

export const Testimonials = () => {
  return (
    <div className="bg-white w-full h-full pb-52 flex flex-col justify-center items-center">
      <div className="py-20 flex flex-col justify-center items-center">
        <p className="text-5xl font-bold text-gray-500 ">Clients</p>
        <div className="h-2 bg-gray-500 w-52 rounded-md mt-4" />
      </div>
      <div className="flex justify-center items-center">
        {TESTIMONIALS.map((item, index) => (
          <div key={item.company} className="flex flex-col justify-center items-center">
            <img src={item.img} alt={item.name} className={`${index === 1 ? 'h-96 w-96' : 'h-52 w-52'}`} />
            <p className="text-2xl font-bold pt-8 text-orange-300">{item.name}</p>
            <p className="text-xl font-semibold pb-8 text-gray-500 underline">{item.company}</p>
            <p className="italic text-gray-500 text-center w-3/4">{item.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
