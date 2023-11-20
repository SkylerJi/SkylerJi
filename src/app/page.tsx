import Image from 'next/image'

export default function Home() {
  return (
    <div>
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
        My husband is Your Mom's Wide, yo.
      </div>

      <div>
        ...
      </div>

      <div>
      
      <span className="mx-1">
        And just so you know, my brother-in-real is a&nbsp;
        <span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
          DEA agent
        </span>&nbsp;loser
      </span>

    </div>


    <div>
     <Image src = "/assets/images/Loser.png"
                  width={200}
                  height={200}
                  alt="Yo"/>

     </div>

    


    </div>
  )
}
