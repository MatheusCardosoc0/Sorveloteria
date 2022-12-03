import React, { useState } from 'react'
import { TypingText, TypingTitle } from '../suport_components/CustomText'
import { motion } from 'framer-motion'
import ExploreCard from '../suport_components/ExploreCard'
import { awards } from '../constants/constants'
import { fadeIn } from '../utils/motion'

const Awards = () => {

  const [awardSelected, setAwardSelected] = useState<string>('img-1')

  return (
    <section className='section flex flex-col'
    id='awards'>

      <TypingTitle text='Prêmios' styleText='text-center pt-[64px]' />

      <TypingText text={`O bilhete contém 40 números e são sorteados 6, os prêmios são dados a partir do acerto de 4 números.\n
      Ao ganhar uma chave de acesso a um bilhete você deve ir em nosso aplicativo, em bilhetes, e inserir a chave de acesso, marcar os números que você escolher e nos enviar.`} styleText="px-12 py-8" />

      <motion.div className='h-[700px] sm:h-[1000px] mx-8 flex flex-col sm:flex-row  items-center gap-6 pb-12'
      variants={fadeIn('right', 'tween', 0.25, 1)}
      initial="hidden"
      whileInView={"show"}>

        {awards.map((award, index) => (
          <ExploreCard key={award.id}
           award={award} active={awardSelected} index={index} setActive={setAwardSelected} />
        ))}

      </motion.div>
    </section>
  )
}

export default Awards