import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';
import { useStore } from 'effector-react';
import axios from 'axios';

import { Props, ProjectEditFormValues } from './types';
import { $authStore } from '~/store/auth-store';
import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { defaultLang } from '~/store/language-store';
import { FIREBASE_DATABASE_URL, FIREBASE_DATABASE_REF } from '~/constants/api';

import {
  FIELD_CATEGORY,
  FIELD_DESCRIPTION,
  FIELD_DESCRIPTION_LIST,
  FIELD_IMAGE_SRC,
  FIELD_THUMBNAIL_SRC,
  FIELD_TITLE,
  FIELD_PROJECT_URL_LABEL,
  FIELD_PROJECT_URL_HREF,
  FIELD_PROJECT_URL,
  FIELD_IMAGE_NAME,
} from './constants';
import { CATEGORIES_DATA } from '~/constants/portfolio';
import { MoreLoader } from '~/ui/more-loader/more-loader';
import {
  FieldError,
  InputField,
  SelectField,
  InputUpload,
} from '~/form-builder';
import { required } from '~/form-builder/validators';
import { LanguageSelect } from '~/ui/select';
import {
  FormWrapper,
  StyledButton,
  LangSelectBox,
  FieldGroup,
  FieldsRow,
} from './styled';

const prepareSubmitValues = (
  values: ProjectEditFormValues,
  inEditState: boolean
) => {
  const { projectUrlLabel, projectUrlHref, projectUrl, ...restValues } = values;

  const submittingValues: PortfolioItemModel = {
    ...restValues,
  };

  if (projectUrl && projectUrlHref && projectUrlLabel && inEditState) {
    submittingValues[FIELD_PROJECT_URL] = {
      href: projectUrlHref,
      label: projectUrlLabel,
    };
  }

  return submittingValues;
};

export const ProjectForm: FC<Props> = ({
  data,
  inEditState = false,
  initialValues = {},
}) => {
  const { loading: requestLoading } = useStore($authStore);

  const onSubmitProjectFormHandler = async (values: ProjectEditFormValues) => {
    const submitValues = prepareSubmitValues(values, inEditState);

    try {
      const token = localStorage.getItem('token');
      const authQuery = `?auth=${token}`;

      if (inEditState) {
        await axios.put(
          `${FIREBASE_DATABASE_URL}/${FIREBASE_DATABASE_REF}/${data?.uniqueId}.json${authQuery}`,
          submitValues
        );
      } else {
        await axios.post(
          `${FIREBASE_DATABASE_URL}/${FIREBASE_DATABASE_REF}.json${authQuery}`,
          submitValues
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const [formLanguage, setFormLanguage] = useState<string>(defaultLang);

  // TODO: Use with MERN
  const showUpload = false;

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
            onSubmit={onSubmitProjectFormHandler}
            initialValues={data || initialValues}
            render={({ handleSubmit, submitError }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  name={`${FIELD_TITLE}.${formLanguage}`}
                  type="text"
                  placeholder={i18n._(i18nMark('Title'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Title</Trans>
                </InputField>
                <InputField
                  name={FIELD_IMAGE_NAME}
                  type="text"
                  placeholder={i18n._(i18nMark('Image name'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Image name</Trans>
                </InputField>
                <InputField
                  name={`${FIELD_DESCRIPTION}.${formLanguage}`}
                  type="textarea"
                  placeholder={i18n._(i18nMark('Description'))}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Description</Trans>
                </InputField>
                <InputField
                  name={`${FIELD_DESCRIPTION_LIST}.${formLanguage}`}
                  type="textarea"
                  placeholder={i18n._(i18nMark('Description list'))}
                  disabled={requestLoading}
                >
                  <Trans>Description list</Trans>
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
                {showUpload ||
                  (data && data[FIELD_PROJECT_URL] && (
                    <FieldsRow>
                      <InputField
                        name={FIELD_PROJECT_URL_HREF}
                        type="text"
                        placeholder={i18n._(i18nMark('Project url src'))}
                        validate={required}
                        disabled={requestLoading}
                      >
                        <Trans>Project url src</Trans>
                      </InputField>
                      <InputField
                        name={FIELD_PROJECT_URL_LABEL}
                        type="text"
                        placeholder={i18n._(i18nMark('Project url label'))}
                        validate={required}
                        disabled={requestLoading}
                      >
                        <Trans>Project url label</Trans>
                      </InputField>
                    </FieldsRow>
                  ))}
                {showUpload ? (
                  <FieldGroup>
                    <InputUpload
                      name={FIELD_IMAGE_SRC}
                      placeholder={i18n._(i18nMark('Image'))}
                      validate={required}
                    >
                      <Trans>Image</Trans>
                    </InputUpload>
                    <InputUpload
                      name={FIELD_THUMBNAIL_SRC}
                      placeholder={i18n._(i18nMark('Thumbnail'))}
                      validate={required}
                    >
                      <Trans>Thumbnail</Trans>
                    </InputUpload>
                  </FieldGroup>
                ) : (
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
                )}

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
