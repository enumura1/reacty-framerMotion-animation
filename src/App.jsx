import { motion } from 'framer-motion';

// 外部ファイルのインポート
import './App.css'

function App() {

  const containerVariants = {
    hidden: { opacity: 0, rotate: -180, scale: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <main>
        <div className='top-container'>
          <section>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
              <div className="figure1">1</div>
            </motion.div>
          </section>

          <section>
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 2 }}>
              <div className="figure1">2</div>
            </motion.div>
          </section>

          <section>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
              <div className="figure2">3</div>
            </motion.div>
          </section>
        </div>
        <div className='middle-container'>
          <section>
            <motion.div
              className="figure2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}>
              4
            </motion.div>
          </section>

          <section>
            {/* 拡大アニメーション */}
            <motion.div
              className="figure2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}>
              5
            </motion.div>
          </section>

          <section>
            <motion.div
              className="figure2"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1 }}>
              6
            </motion.div>
          </section>

        </div>
        <div className='btm-container'>
          <section>
            {/* 四角形移動アニメーション */}
            <motion.div
              className="figure2"
              initial={{ x: -200 }}
              animate={{ x: 200 }}
              transition={{ duration: 1 }}>
              7
            </motion.div>
          </section>

          <section>
            {/* おしゃれなフェード・回転・バウンスアニメーション */}
            <motion.div
              className="figure2"
              variants={containerVariants}
              initial="hidden"
              animate="visible">
              8
            </motion.div>
          </section>

          <section>
            <motion.div
              className="figure3"
              initial={{ scale: 0, backgroundColor: '#3498db' }}
              animate={{ scale: 1, backgroundColor: '#e74c3c' }}
              transition={{ duration: 2 }}>
              9
            </motion.div>
          </section>

          <section>
            <motion.div
              className="figure2"
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, duration: 1 }}>
              10
            </motion.div>
          </section>
        </div>
      </main >
    </>
  )
}


export default App