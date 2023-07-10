import React from 'react'
import { motion } from "framer-motion"

const FeaturedCard = () => {
  return (
    <div className='w-full bg-black mx-auto mb-8     '>
         
         <motion.div
             initial={{opacity:0, Scale:0.8}}
             animate={{opacity:1, Scale:1}}
             className="w-full mx-auto h-[50%] "
             >
                <img src='b2.gif' alt='gif' className='w-full h-[50%] object-fill'/> 
                </motion.div>

          {/* <motion.div
             initial={{opacity:0, Scale:0.8}}
             animate={{opacity:1, Scale:1}}
             className="text-white"
             >

             <h1 className='text-4xl mt-12 text font-mono md:ml-[45%] ml-4'>All Posts</h1>

         </motion.div> */}
         
         

         
      
    </div>
  )
}

export default FeaturedCard
