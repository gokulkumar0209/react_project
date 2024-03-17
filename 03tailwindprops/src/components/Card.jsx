import React from 'react'

function Card({source="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?w=900&t=st=1710660452~exp=1710661052~hmac=0dfd5994e2dc27873d57d6205d16df4a44bbb9b9e2b387cdfd8720825b379699",username="Car"}) {
  return (
    <div>
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={source} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400" >
      {username} 
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Beauty
      </div>
    </figcaption>
  </div>
</figure>
</div>
    
  )
}

export default Card