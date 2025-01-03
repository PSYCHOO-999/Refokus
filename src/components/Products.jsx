import { useState } from "react";
import Product from "./Product"
import { motion } from "motion/react"

const Products = () => {
    var products = [
        {title: "arquitel", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officia ducimus libero dolorem nisi eum, commodi illo?", live: true, case: false },
        {title: "TTR", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officia ducimus libero dolorem nisi eum, commodi illo?", live: true, case: false },
        {title: "YIR 2022", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officia ducimus libero dolorem nisi eum, commodi illo?", live: true, case: true },
        {title: "Yahoo", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officia ducimus libero dolorem nisi eum, commodi illo?", live: true, case: true },
    ]

    const [pos, setPos] = useState(0);
    const mover = (val) => {
      setPos(val*23);
    }

  return (
    <div className="mt-32 relative">
        {products.map((val, index) => (
            <Product key={index} val={val} mover={mover} count={index} />
        ))}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <motion.div initial={{y:pos, x:"-50%"}} animate={{y:pos+`rem`}} className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] -translate-x-[50%] overflow-hidden">
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-700"></motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-green-600"></motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-pink-500"></motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-blue-400"></motion.div>
          </motion.div>
        </div>
    </div>
  )
} 

export default Products