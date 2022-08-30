import { Member } from './components/Member'
import { TEAM_MEMBERS } from '../../_config'

export const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl md:text-4xl text-left md:text-justify mx-6 lg:mx-48 mt-12 md:mt-24 ">
          <span className="font-bold">We help you to create a web page that will stand out from the competition.</span> The tools we use are
          the best on the business. Best website experience, fast and trustworthy.
        </p>
        <div className="mt-20">
          <p className="text-3xl font-bold text-center">Our team</p>
          <p className="text-2xl text-center pt-2">the main fighters</p>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6 mt-8 mb-20">
            {TEAM_MEMBERS.map((item, index) => (
              <Member {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
