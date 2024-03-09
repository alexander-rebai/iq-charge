import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src="/logo.jpeg"
      width="85"
      height="85"
      alt="iq-charge-logo"
      priority
      className=" cursor-pointer"
    />
  )
}
