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

      <div className = "flex flex-row">
      And just so you know my
      brother-in-real is a 
      <div className = " mx-1" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
       DEA agent
        </div>
        loser 
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
