import { FOOTER } from '../../_config'

export const Footer = () => {
  return (
    <footer className="min-h-full md:h-40 bg-black w-full bottom-0 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 py-8">
      <img src="/logo.webp" className="w-24 h-20" alt="aiman-corp-logo" />
      {FOOTER.map((item, index) => (
        <a key={item.url} target={'_blank'} rel="noreferrer" href={item.url}>
          <p className="text-white font-bold text-xl hover:text-orange-300 ease-in-out duration-200">{item.name}</p>
        </a>
      ))}

      <p className="text-white text-center md:text-start py-8 md:py-0">
        Copyright ⓒ 2022 <span className="font-bold">mrizkiaiman.com</span>
      </p>
    </footer>
  )
}
