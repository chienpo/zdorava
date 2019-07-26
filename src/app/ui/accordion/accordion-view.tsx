import React from 'react';
import posed from 'react-pose';

import { PanelsProps } from './accordion';
import { Panel, RowContent, Row } from './styled';

const PanelContent = posed.div({
  closed: { height: 0, transition: { duration: 100 } },
  open: { height: 'auto', transition: { duration: 100 } },
});

export const AccordionView: React.FC<PanelsProps> = ({
  data,
  currentTab,
  onTogglePanel,
}) => (
  <div>
    {Object.entries(data).map(([key, { title, content }]) => (
      <Row key={key} onClick={() => onTogglePanel(key)}>
        <Panel active={currentTab === key}>
          {title}
          &nbsp;-
        </Panel>
        <PanelContent pose={currentTab === key ? 'open' : 'closed'}>
          <RowContent active={currentTab === key}>
            <ul>
              {content.map(({ label, text }, index) => (
                <li key={index}>
                  {label.length === 0 ? (
                    <strong>&bull;</strong>
                  ) : (
                    <strong>{label}</strong>
                  )}
                  {text}
                </li>
              ))}
            </ul>
          </RowContent>
        </PanelContent>
      </Row>
    ))}
  </div>
);
