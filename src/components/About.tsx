import React from 'react'
import { TypingText, TypingTitle } from '../suport_components/CustomText'
import { motion } from 'framer-motion'
import { zoomIn } from '../utils/motion'

const About = () => {
  return (
    <section className='section pb-12 flex flex-col gap-[40px]'>

      <div className='px-4'>
        <TypingTitle text='Sobre a sorveloteria' styleText='mx-auto mt-[60px] mb-12' />

        <TypingText text='Em 2004 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' />
      </div>

      <motion.div className='flex flex-col sm:flex-row gap-12 px-4'
        variants={zoomIn(0.25, 1)}
        initial="hidden"
        whileInView={"show"}>

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkm3nlVtlK4Dk-JgqDb7hE48tioqhcb0klYw&usqp=CAU'
          className='rounded-lg w-full sm:w-[12rem] h-[12rem]' />

        <TypingText text='Em 2008 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' styleText='px-4' />

      </motion.div>

      <motion.div className='flex flex-col sm:flex-row gap-12 px-4'
        variants={zoomIn(0.25, 1)}
        initial="hidden"
        whileInView={"show"}>

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqqHFZ_oHWtSt96FXE5Q3us9qB8uEaujUjw&usqp=CAU'
          className='rounded-lg w-full sm:w-[12rem] h-[12rem]' />

        <TypingText text='Em 2014 But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of ' styleText='px-4' />
      </motion.div>


    </section>
  )
}

export default About