import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './styles.css';

interface Props {
  i: number;
  expanded: false | number;
  setExpanded: (a: false | number) => void;
}

const AccordionPanelGroup: React.FC<Props> = ({ i, expanded, setExpanded }) => {
  const isOpen: boolean = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        header-content
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
              className="content-placeholder"
            >
              <div className="paragraph">PanelContent</div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const accordionIds: number[] = [0, 1, 2, 3];

export const Accordion = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div>
      {accordionIds.map(i => (
        <AccordionPanelGroup
          key={i}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
};
