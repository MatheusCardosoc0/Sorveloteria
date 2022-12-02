import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion'

interface CustomTextProps {
  text: string
  styleText?: string
}

export const TypingTitle = ({ styleText, text }: CustomTextProps) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView={"show"}
    className={`text-lg sm:text-4xl text-gray-200 font-bold ${styleText}`}>
    {Array.from(text).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u80A4' : letter}
      </motion.span>
    ))}
  </motion.p>
)


export const TypingText = ({ text, styleText }: CustomTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView={"show"}
    className={`font-normal text-base  md:text-lg text-gray-50 ${styleText}`}>
    {Array.from(text).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u80A4' : letter}
      </motion.span>
    ))}
  </motion.h2>
)