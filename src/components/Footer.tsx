import { motion } from "framer-motion"
import { TypingText, TypingTitle } from "../suport_components/CustomText"
import { AiFillGithub, AiFillLinkedin, AiOutlineUser } from 'react-icons/ai'
import { fadeIn, slideIn } from "../utils/motion"

const Footer = () => {
  return (
    <section className='section'
    id="footer">

      <motion.div className="flex justify-between p-4 bg-gradient-to-tr from-yellow-500 via-green-500/0 to-pink-600/70 rounded-t-xl flex-col sm:flex-row"
        variants={slideIn('right', 'tween', 0.25, 1)}
        initial="hidden"
        whileInView={"show"}>

        <div>
          <TypingText text="feito por" />
          <TypingTitle text="Matheus Cardoso" />
        </div>

        <motion.span className="flex items-center gap-8 text-4xl text-white"
          variants={fadeIn('right', 'spring', 0.25, 1)}
          initial="hidden"
          whileInView={"show"}>

          <a className="cursor-pointer"
            href="https://github.com/MatheusCardosoc0"
            target={"_blank"}>
            <AiFillGithub />
          </a>

          <a className="cursor-pointer"
            href="https://www.linkedin.com/in/matheus-cardoso-026488244/"
            target={"_blank"}>
            <AiFillLinkedin />
          </a>

          <a className="cursor-pointer"
            href="https://matheuscardosoc-portifolio.netlify.app"
            target={"_blank"}>
            <AiOutlineUser />
          </a>
        </motion.span>
      </motion.div>


    </section>
  )
}

export default Footer