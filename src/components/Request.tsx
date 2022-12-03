import { motion } from 'framer-motion'
import { TypingText, TypingTitle } from '../suport_components/CustomText'
import { fadeIn, slideIn, zoomIn } from '../utils/motion'


const Request = () => {
  return (
    <section className='section p-4 justify-between flex flex-col sm:flex-row'>

      <motion.div variants={zoomIn(0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[400px]">
        <img src='https://media.discordapp.net/attachments/989268383751106560/1047997297042137128/MatheusCardosoc_an_ice_cream_cone_with_chocolate_vanilla_and_st_6f581dba-971b-4abd-98c6-a51d7497ffeb.png?width=491&height=491'
          className='w-[10rem] h-[10rem] mx-auto mb-12 sm:w-[20rem] sm:h-[20rem] rounded-[60px] shadow-[2px_14px_12px_rgba(230,230,230)]' />
      </motion.div>

      <motion.div className='text-start flex flex-col justify-start sm:w-1/2 gap-8'
        variants={slideIn('left', 'spring', 0.25, 1)}
        initial="hidden"
        whileInView={"show"}>

        <TypingTitle text='Faça seu pedido' />

        <TypingText text='Faça a escolha de nossos +200 sabores, a cada 4L de sorvete comprados você receberá um acesso a um bilhete digital de loteria em nosso aplicativo para concorrer a nossas Loterias mensais e ganhar prêmios unicos.' />

        <li className='flex sm:flex-row flex-col text-lg text-white gap-1'>
          <ul><a className='text-pink-500 hover:text-yellow-400 cursor-pointer'>#Prêmios</a></ul>/
          <ul><a className='text-pink-500 hover:text-yellow-400 cursor-pointer'>#Sobre a sorveloteria</a></ul>/
          <ul><a className='text-pink-500 hover:text-yellow-400 cursor-pointer'>#Contato</a></ul>
        </li>

      </motion.div>
    </section>
  )
}

export default Request