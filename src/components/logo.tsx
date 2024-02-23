import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo-no-background.svg"
        alt="DevScribeAi"
        width={140}
        height={140}
      />
    </div>
  )
}

export default Logo
