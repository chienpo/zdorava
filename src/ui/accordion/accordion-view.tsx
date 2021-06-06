import React, { Fragment, ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { i18n, MessageDescriptor } from '@lingui/core';

import { BLACK, RED, RED_70, WHITE } from '~/constants/colors';
import {
  AnimatedDiv,
  AnimatedHeader,
  AnimatedSection,
} from '~/animations/animated';
import { Panel } from './styled';

export interface AccordionData {
  [key: string]: {
    panelTitle: string | MessageDescriptor;
    content: () => ReactElement;
  };
}

interface Props {
  expanded: false | string;
  setExpanded: (a: false | string) => void;
  data: AccordionData;
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
          <AnimatedHeader
            initial={false}
            animate={{
              backgroundColor: isOpen ? BLACK : WHITE,
            }}
            whileHover={{ backgroundColor: RED }}
            whileTap={{ backgroundColor: RED_70 }}
            onClick={() => setExpanded(isOpen ? false : key)}
            style={{ transition: 'background0color 0.4s' }}
          >
            <Panel active={isOpen}>{i18n._(panelTitle)}</Panel>
          </AnimatedHeader>
          <AnimatePresence initial={false}>
            {isOpen && (
              <AnimatedSection
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
                <AnimatedDiv
                  variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                  transition={{ duration: 0.8 }}
                  className="content-placeholder"
                  style={{ transformOrigin: 'top center' }}
                >
                  <Component />
                </AnimatedDiv>
              </AnimatedSection>
            )}
          </AnimatePresence>
        </Fragment>
      );
    })}
  </div>
);
