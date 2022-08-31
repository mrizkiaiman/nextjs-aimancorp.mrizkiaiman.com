import Image from 'next/image'

interface MemberProps {
  image: string
  name: string
  username: string
}

export const Member: React.FC<MemberProps> = ({ image, name, username }) => {
  return (
    <div className="w-52 md:w-11/12">
      <Image src={image} width={500} height={500} priority />
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-lg">{name}</p>
        <p>{username}</p>
      </div>
    </div>
  )
}

export default Member
