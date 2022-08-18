export const Landing = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/videos/matrix-like.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col justify-between items-center h-screen z-10 pb-8 pt-4">
        <img alt="sp-logo" src="./logo.webp" width={100} height={100} />
        <div>
          <p className="text-white font-bold text-5xl text-center tracking-tighter drop-shadow-xl">ShonenPlays</p>
          <p className="text-white font-bold text-3xl text-center pt-3 tracking-tight drop-shadow-xl">App development, done right.</p>
        </div>
        <p className="font-bold text-white text-2xl tracking-tight drop-shadow-md">www.mrizkiaiman.com</p>
      </div>
    </div>
  )
}

export default Landing
