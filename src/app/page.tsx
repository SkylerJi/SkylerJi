import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className = "text-5xl text-red-500">
        Disclaimer: This site is ugly on purpose

      </div>
      <div>
        My name is Skyler Ji, yo.

      </div>
     <div>
     <Image src = "/assets/images/Eyebrows.png"
                  width={200}
                  height={200}
                  alt="Yo"/>

     </div>
    

      <div>
        My husband is Yo Momma, yo.
      </div>

      <div>
        ...
      </div>

      <div>
      
      <span className="mx-1">
        And just so you know, my brother-in-blood is a&nbsp;
        <span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
          DEA agent
        </span>&nbsp;loser
      </span>

    </div>


    <div>
     <Image src = "/assets/images/Loser.png"
                  width={200}
                  height={200}
                  alt="brotha"/>

     </div>

     <div className = "mt-8">
      Click me:
     </div>

     <div>
          <Link href="https://halckers.com" target="_blank" rel="noopener noreferrer" className = "bg-red-500 text-white">
              Hackers website
          </Link>
      </div>
      <div>
          <Link href="https://aipeiron.com" target="_blank" rel="noopener noreferrer" className = "bg-red-500 text-white">
              Aipeiron
          </Link>
    </div>

    


    </div>
  )
}
