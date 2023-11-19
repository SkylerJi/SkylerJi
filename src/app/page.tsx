import Image from 'next/image'

export default function Home() {
  return (
    <div>
      I'm Skyler Ji, yo.
      <Image src = "/assets/images/Eyebrows.png"
                  width={200}
                  height={200}
                  alt="Yo"/>
    </div>
  )
}
