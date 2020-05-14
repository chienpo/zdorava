import React from 'react';
import posed from 'react-pose';

import reactUdemyCourse from 'assets/images/sertificates/react-udemy-course.jpg';
import englishCourse from 'assets/images/sertificates/english-course-1.jpg';
import englishCourse2 from 'assets/images/sertificates/english-course-2.jpg';

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
            {key === 'sertificates' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '10px', padding: '10px' }}>
                <img style={{ width: '100%', border: '1px solid black', filter: 'grayscale(100%)' }} src={reactUdemyCourse} alt="udemy react course sertificate" />
                <img style={{ width: '100%', border: '1px solid black', filter: 'grayscale(100%)' }} src={englishCourse} alt="english course sertificate" />
                <img style={{ width: '100%', border: '1px solid black', filter: 'grayscale(100%)' }} src={englishCourse2} alt="english course sertificate" />
              </div>
            )}
          </RowContent>
        </PanelContent>
      </Row>
    ))}
  </div>
);
