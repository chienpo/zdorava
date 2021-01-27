import * as React from 'react';
import { I18n, Trans } from '@lingui/react';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'router5';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItemModel } from '~/models/portfolio-item.model';

import { PORTFOLIO_IMAGES_PATH, SITE_URL } from '~/constants/site';
import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '~/constants/portfolio';
import { LazyImage } from '~/ui/lazy-image';
import Header from '~/core/components/header';
import { ProjectForm } from '~/features/project/components';
import {
  AnimatedDescriptionStyled,
  AnimatedFigureStyled,
  AnimatedSectionStyled,
  Category,
  Description,
  StyledLink,
  StyledRealProjectLink,
  Title,
  DescriptionList,
  EditProjectLink,
} from './styled';

interface Props {
  data: PortfolioItemModel;
  portfolioSelectedCategory: string;
  isEditState: boolean;
  router: Router;
}

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const descriptionVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const ProjectView: React.FC<Props> = ({
  data,
  portfolioSelectedCategory,
  isEditState,
  router,
}) => (
  <>
    <Header mobileByDefault />
    <main>
      <AnimatedSectionStyled initial="exit" animate="enter" exit="exit">
        {data && (
          <AnimatePresence>
            <AnimatedFigureStyled variants={imageVariants} initial="exit">
              <LazyImage
                alt={data.imageName}
                src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${data.category}/${data.imageSrc}`}
                srcSet={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${data.category}-thumbnail/${data.thumbnailSrc}`}
                style={{ maxWidth: '70vw' }}
              />
            </AnimatedFigureStyled>
          </AnimatePresence>
        )}
        <AnimatePresence>
          <AnimatedDescriptionStyled
            variants={descriptionVariants}
            initial="exit"
          >
            {data && (
              <>
                {isEditState ? (
                  <StyledLink
                    routeName="project"
                    routeParams={{ id: data.imageName }}
                    routeOptions={{ reload: true }}
                    router={router}
                  >
                    ← &nbsp;
                    <Trans>To project</Trans>
                  </StyledLink>
                ) : (
                  <StyledLink
                    routeName={ROUTE_NAME_PORTFOLIO}
                    routeParams={{ category: portfolioSelectedCategory }}
                    routeOptions={{ reload: true }}
                    router={router}
                  >
                    ← &nbsp;
                    <Trans>Back</Trans>
                  </StyledLink>
                )}
              </>
            )}
            {isEditState && data && (
              <>
                <Title>
                  <Trans>Edit</Trans>
                </Title>
                <ProjectForm data={data} inEditState={isEditState} />
              </>
            )}
            {data && !isEditState && (
              <I18n>
                {({ i18n }) => (
                  <>
                    <Title>
                      {data && !isEditState && (
                        <EditProjectLink
                          routeName="project.edit"
                          routeParams={{
                            id: data.imageName,
                            category: data.category,
                          }}
                          routeOptions={{ reload: true }}
                          router={router}
                        >
                          <FontAwesomeIcon icon={faEdit} size="sm" />
                        </EditProjectLink>
                      )}
                      {data.title[i18n.language]}
                    </Title>
                    <Description>
                      <div>{data.description[i18n.language]}</div>
                      {data.descriptionList && (
                        <DescriptionList>
                          {data.descriptionList[i18n.language]
                            .split('.')
                            .filter((it) => it !== '')
                            .map((item: string) => (
                              <li key={item}>
                                <b>&bull;</b>
                                &nbsp;
                                {item}
                              </li>
                            ))}
                        </DescriptionList>
                      )}
                      <br />
                      {data.projectUrl && (
                        <>
                          <Trans>With a great pleasure I suggest you</Trans>
                          &nbsp;
                          <StyledRealProjectLink
                            href={data.projectUrl[i18n.language]}
                            target="_blank"
                            rel="noopener"
                          >
                            <Trans>watch real project</Trans>
                          </StyledRealProjectLink>
                        </>
                      )}
                    </Description>
                    <Category>
                      {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[data.category])}
                    </Category>
                  </>
                )}
              </I18n>
            )}
          </AnimatedDescriptionStyled>
        </AnimatePresence>
      </AnimatedSectionStyled>
    </main>
  </>
);
