import React from 'react';
import posed from 'react-pose';

import { PanelsProps } from './accordion';
import { Panel, Row } from './styled';

const PanelContent = posed.div({
  closed: {
    height: 0,
    overflow: 'hidden',
    opacity: 0,
    transition: { duration: 200 },
  },
  open: {
    height: 'auto',
    overflow: 'hidden',
    opacity: 1,
    transition: { duration: 400 },
  },
});

export const AccordionView: React.FC<PanelsProps> = ({
  data,
  activePanel,
  onTogglePanel,
}) => (
  <div>
    {Object.entries(data).map(([key, { panelTitle, content: Component }]) => (
      <Row key={key} onClick={() => onTogglePanel(key)}>
        <Panel active={activePanel === key}>
          {panelTitle}
          &nbsp;-
        </Panel>
        <PanelContent pose={activePanel === key ? 'open' : 'closed'}>
          <Component />
        </PanelContent>
      </Row>
    ))}
  </div>
);
