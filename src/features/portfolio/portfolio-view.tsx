import React, { useEffect } from 'react';
import { Trans } from '@lingui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAnimation } from 'framer-motion';

import { Props } from './types';

import { BLACK_100, WHITE_100 } from '~/constants/colors';
import { ROUTE_NAME_PROJECTS_ADD } from '~/router/routes';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { Layout } from '~/core/components';
import { LinkAdd } from '~/ui/link-add';
import { AnimatedDiv } from '~/animations/animated';
import { PortfolioGrid, PortfolioTabList } from './components';
import {
  AnimatedSectionStyled,
  ItemsLoadingSpinnerBox,
  ItemsLoadingStateDescriptionAnimated,
} from './styled';

export const PortfolioView: React.FC<Props> = ({
  activeCategory,
  onCategoryClick,
  data,
  getNextDataChunk,
  hasMore,
  isAuthenticated,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const promise = controls.start('visible');

    promise.then((result) => result);
  }, [controls]);

  return (
    <Layout>
      <AnimatedSectionStyled
        variants={{
          enter: {
            backgroundColor: BLACK_100,
            transition: {
              duration: 1,
            },
          },
          exit: {
            backgroundColor: WHITE_100,
            transition: { duration: 0.4 },
          },
        }}
        initial="enter"
        animate="enter"
        exit="exit"
      >
        {isAuthenticated && <LinkAdd routeName={ROUTE_NAME_PROJECTS_ADD} />}
        <PortfolioTabList
          activeCategory={activeCategory}
          onCategoryClick={onCategoryClick}
        />
        <AnimatedDiv initial="hidden" animate={controls} variants={{}}>
          <InfiniteScroll
            style={{ overflow: 'hidden' }}
            dataLength={data.length}
            next={getNextDataChunk}
            hasMore={hasMore}
            loader={
              <ItemsLoadingSpinnerBox>
                <MoreLoader />
              </ItemsLoadingSpinnerBox>
            }
            endMessage={
              <ItemsLoadingStateDescriptionAnimated
                variants={{
                  enter: {
                    opacity: 1,
                    transition: { duration: 0.4 },
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <Trans>Coming soon ...</Trans>
              </ItemsLoadingStateDescriptionAnimated>
            }
          >
            <PortfolioGrid data={data} activeCategory={activeCategory} />
          </InfiniteScroll>
        </AnimatedDiv>
      </AnimatedSectionStyled>
    </Layout>
  );
};
