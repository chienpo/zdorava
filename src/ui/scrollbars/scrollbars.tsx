import React from 'react';
import ScrollbarsComponent from 'react-custom-scrollbars';
import './styles.css';

const trackV: React.FC<{ style: any }> = ({ style, ...props }) => (
  <div className="track track-vertical" style={style} {...props} />
);
const thumbV: React.FC<{ style: any }> = ({ style, ...props }) => (
  <div className="thumb thumb-vertical" style={{ ...style }} {...props} />
);
const trackH: React.FC<{ style: any }> = ({ style, ...props }) => (
  <div className="track track-horizontal" style={style} {...props} />
);
const thumbH: React.FC<{ style: any }> = ({ style, ...props }) => (
  <div className="thumb thumb-horizontal" style={style} {...props} />
);

export const Scrollbars: React.FC<{ children: {} }> = ({ children }) => (
  <ScrollbarsComponent
    autoHeight
    autoHeightMin="100vh"
    autoHide={false}
    autoHideTimeout={500}
    autoHideDuration={200}
    renderTrackHorizontal={trackH}
    renderThumbHorizontal={thumbH}
    renderThumbVertical={thumbV}
    renderTrackVertical={trackV}
    thumbSize={50}
    thumbMinSize={50}
  >
    {children}
  </ScrollbarsComponent>
);
