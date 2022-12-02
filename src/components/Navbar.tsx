import { motion } from 'framer-motion'
import { TypingText, TypingTitle } from '../suport_components/CustomText'
import { driving, fadeIn, navVariants, zoomIn } from '../utils/motion'

const Navbar = () => {




  return (
    <div className='section p-2 justify-between flex flex-col sm:flex-row'>



      <motion.div variants={navVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="flex w-[28rem] max-w-[100%] flex-col">
        <div className='gradient-01 z-0 w-full h-[80px] sm:h-[100px]' />

        <TypingTitle text='Bem vindo a Sorveloteria' />

        <p className='text-white my-12 mx-2'>
          Esta é uma sorveteria especializada no atendimento online com entregas rapidas, possuimos +200 sabores diferentes de sorvete, e com um sistema unico de premiação.
        </p>

        <motion.button variants={zoomIn(0.5, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="request_button hover:border-8 border-pink-200">
          Fazer pedido
        </motion.button>
      </motion.div>

      <motion.div variants={driving}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="flex max-w-[100%] flex-col">

        <img src='/zyro-image.png'
          className='invert-position' />

        <div className='gradient-02 absolute z-0 bottom-0 right-0 w-full h-[80px] sm:h-[100px]' />
      </motion.div>
    </div>
  )
}

export default Navbar