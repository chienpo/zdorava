import React, { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { I18n } from '@lingui/react';

import { BLACK, RED, RED_70 } from 'app/constants/colors';
import { Panel } from './styled';

interface Props {
  expanded: false | string;
  setExpanded: (a: false | string) => void;
  data: AccordionData;
}

interface AccordionData {
  [key: string]: {
    panelTitle: string;
    content: () => any;
  };
}

export const AccordionView: React.FC<Props> = ({
  expanded,
  setExpanded,
  data,
}) => (
  <div>
    {Object.entries(data).map(([key, { panelTitle, content: Component }]) => {
      const isOpen: boolean = key === expanded;

      return (
        <Fragment key={key}>
          <motion.header
            initial={false}
            animate={{
              backgroundColor: isOpen ? BLACK : 'transparent',
            }}
            whileHover={{ backgroundColor: RED }}
            whileTap={{ backgroundColor: RED_70 }}
            onClick={() => setExpanded(isOpen ? false : key)}
            style={{ transition: 'background 0.4s' }}
          >
            <Panel active={isOpen}>
              <I18n>{({ i18n }) => i18n._(panelTitle)}</I18n>
            </Panel>
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
                style={{ overflow: 'hidden' }}
              >
                <motion.div
                  variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                  transition={{ duration: 0.8 }}
                  className="content-placeholder"
                  style={{ transformOrigin: 'top center' }}
                >
                  <div className="paragraph">
                    <Component />
                  </div>
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>
        </Fragment>
      );
    })}
  </div>
);
