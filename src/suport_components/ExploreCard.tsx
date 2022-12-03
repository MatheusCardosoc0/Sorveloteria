import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion'

interface ExploreCardProps {
  index: number
  award: {
    id: string
    imgUrl: string
    title: string
  }
  active: string
  setActive: React.Dispatch<React.SetStateAction<string>>
}

const ExploreCard = ({ active, award, index,setActive }: ExploreCardProps) => {
  return (
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === award.id ? 'lg:flex-[3.5] flex-[12]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[400px] sm:h-[700px] transition-[flex] duration-[0.7s] ease-in cursor-pointer w-full`}
      onClick={() => setActive(award.id)}>

      <img src={award.imgUrl}
        alt={award.title}
        className="absolute w-full h-full object-cover rounded-[24px]" />

      {active !== award.id ? (
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 rotate-[-20deg] lg:origin-[0,0]'>
          {award.title}
        </h3>
      ) : (
        <div className='bottom-0 absolute p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.52)] rounded-b-[24px]'>
          <p className='font-normal text-[16px] sm:text-[20px] text-white uppercase'>
            prêmio de {index + 4} acertos
          </p>

          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white uppercase'>
            {award.title}
          </h2>
        </div>
      )}
    </motion.div>
  )
}

export default ExploreCard