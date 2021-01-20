import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';
import { useStore } from 'effector-react';

import {
  FIELD_ALT,
  FIELD_CATEGORY,
  FIELD_DESCRIPTION,
  FIELD_DETAILS,
  FIELD_IMAGE_SRC,
  FIELD_THUMBNAIL_SRC,
  FIELD_TITLE,
  FIELD_PROJECT_URL_LABEL,
  FIELD_PROJECT_URL_HREF,
  FIELD_PROJECT_URL,
} from './constants';
import { CATEGORIES_DATA } from '~/constants/portfolio';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import { FieldError, InputField, SelectField } from '~/form-builder';
import { required } from '~/form-builder/validators';
import { LanguageSelect } from '~/ui/select';
import {
  FormWrapper,
  StyledButton,
  LangSelectBox,
  FieldGroup,
  FieldsRow,
} from './styled';

import { $authStore } from '~/store/auth-store';
import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { defaultLang } from '~/store/language-store';

interface Props {
  onSubmitSuccess: (values: PortfolioItemModel) => void;
  data: PortfolioItemModel;
  inEditState?: boolean;
}

interface ProjectEditFormValues extends PortfolioItemModel {
  projectUrlHref?: string;
  projectUrlLabel?: string;
}

export const ProjectForm: FC<Props> = ({
  data,
  inEditState = true,
  onSubmitSuccess,
}) => {
  const { loading: requestLoading } = useStore($authStore);

  const onSubmit = (values: ProjectEditFormValues) => {
    const {
      title,
      projectUrlLabel,
      projectUrlHref,
      projectLinks,
      alt,
      details,
      description,
      ...restValues
    } = values;

    // TODO: Prepare form values depends on language and check submittingValues
    // alt: string;
    // title: { [key: string]: string };
    // description: { [key: string]: string };
    // descriptionList?: { [key: string]: string[] };

    const submittingValues: PortfolioItemModel = {
      ...restValues,
      alt: '',
      title: { en: 'en title', ru: 'ru title' },
      description: { en: 'en description', ru: 'ru description' },
    };

    if (projectLinks && projectUrlHref && projectUrlLabel) {
      submittingValues[FIELD_PROJECT_URL] = [
        { href: projectUrlHref, label: projectUrlLabel },
      ];
    }

    onSubmitSuccess(submittingValues);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const getInitialValues = (value: PortfolioItemModel, lang: string) => {
    const title = value[FIELD_TITLE][lang];
    const description = value[FIELD_DESCRIPTION][lang];
    let projectLinksHref;
    let projectLinksLabel;

    if (value.projectLinks) {
      projectLinksHref = value.projectLinks[0].href;
      projectLinksLabel = value.projectLinks[0].label;
    }

    return {
      ...value,
      [FIELD_TITLE]: title,
      [FIELD_DESCRIPTION]: description,
      [FIELD_PROJECT_URL_HREF]: projectLinksHref,
      [FIELD_PROJECT_URL_LABEL]: projectLinksLabel,
    };
  };

  const [formLanguage, setFormLanguage] = useState<string>(defaultLang);
  const initialValues = getInitialValues(data, formLanguage);

  return (
    <FormWrapper>
      <LangSelectBox>
        <LanguageSelect
          selectedLanguage={formLanguage}
          onToggleLanguage={setFormLanguage}
        />
      </LangSelectBox>
      <I18n>
        {({ i18n }) => (
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, submitError }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  name={FIELD_TITLE}
                  type="text"
                  placeholder={i18n._(i18nMark('Title'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Title:</Trans>
                </InputField>
                <InputField
                  name={FIELD_DESCRIPTION}
                  type="textarea"
                  placeholder={i18n._(i18nMark('Description'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Description</Trans>
                </InputField>
                <InputField
                  name={FIELD_ALT}
                  type="text"
                  placeholder={i18n._(i18nMark('Alt'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Alt</Trans>
                </InputField>
                <SelectField
                  name={FIELD_CATEGORY}
                  options={CATEGORIES_DATA.map(({ label, value }) => ({
                    value,
                    label: i18n._(label),
                  }))}
                >
                  <Trans>Category</Trans>
                </SelectField>
                <InputField
                  name={FIELD_DETAILS}
                  type="text"
                  placeholder={i18n._(i18nMark('Details'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Details</Trans>
                </InputField>
                {data[FIELD_PROJECT_URL] && (
                  <FieldsRow>
                    <InputField
                      name={FIELD_PROJECT_URL_HREF}
                      type="text"
                      placeholder={i18n._(i18nMark('Project url'))}
                      validate={required}
                      disabled={requestLoading}
                    >
                      <Trans>Project url</Trans>
                    </InputField>
                    <InputField
                      name={FIELD_PROJECT_URL_LABEL}
                      type="text"
                      placeholder={i18n._(i18nMark('Project url'))}
                      validate={required}
                      disabled={requestLoading}
                    >
                      <Trans>Project url label</Trans>
                    </InputField>
                  </FieldsRow>
                )}
                <FieldGroup>
                  <InputField
                    name={FIELD_IMAGE_SRC}
                    type="text"
                    placeholder={i18n._(i18nMark('Image src'))}
                    validate={required}
                    disabled={requestLoading}
                  >
                    <Trans>Image src</Trans>
                  </InputField>
                  <InputField
                    name={FIELD_THUMBNAIL_SRC}
                    type="text"
                    placeholder={i18n._(i18nMark('Preview src'))}
                    validate={required}
                    disabled={requestLoading}
                  >
                    <Trans>Thumbnail src</Trans>
                  </InputField>
                </FieldGroup>

                <StyledButton
                  type="submit"
                  plain
                  width="100%"
                  disabled={requestLoading}
                >
                  {requestLoading && (
                    <MoreLoader size="30px" style={{ marginRight: '10px' }} />
                  )}
                  {inEditState ? (
                    <Trans>Update project</Trans>
                  ) : (
                    <Trans>Add project</Trans>
                  )}
                </StyledButton>
                <FieldError meta={submitError} />
              </form>
            )}
          />
        )}
      </I18n>
    </FormWrapper>
  );
};
