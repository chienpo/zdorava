import React, { createElement, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import './styles.css';

const AccordionView: React.FC<Props> = ({
  expanded,
  setExpanded,
  accordionIds,
}) => {
  return (
    <div>
      {accordionIds.map(i => (
        <div>
          <motion.header
            initial={false}
            animate={{
              backgroundColor: i === expanded ? '#FF0088' : '#0055FF',
            }}
            onClick={() => setExpanded(i === expanded ? false : i)}
          >
            header-content
          </motion.header>
          <AnimatePresence initial={false}>
            {i === expanded && (
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
        </div>
      ))}
    </div>
  );
};

const accordionIds: number[] = [0, 1, 2, 3, 5, 6];

export const Accordion = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return createElement(AccordionView, {
    expanded,
    setExpanded,
    accordionIds,
  });
};

interface Props {
  expanded: false | number;
  setExpanded: (a: false | number) => void;
  accordionIds: number[];
}
