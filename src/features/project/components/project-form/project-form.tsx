import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { i18nMark, I18n, Trans } from '@lingui/react';
import { useStore } from 'effector-react';

import { Props, ProjectEditFormValues } from './types';
import { $authStore } from '~/store/auth-store';
import { defaultLang } from '~/store/language-store';

import {
  FIELD_CATEGORY,
  FIELD_DESCRIPTION,
  FIELD_DESCRIPTION_LIST,
  FIELD_IMAGE_SRC,
  FIELD_THUMBNAIL_SRC,
  FIELD_TITLE,
  FIELD_PROJECT_URL_LABEL,
  FIELD_PROJECT_URL_HREF,
  FIELD_IMAGE_NAME,
} from './constants';
import { useHttpClient } from '~/hooks/use-http-client';
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

export const ProjectForm: FC<Props> = ({
  data,
  inEditState = false,
  initialValues = {},
  onPreviewChange,
}) => {
  const [formLanguage, setFormLanguage] = useState<string>(defaultLang);
  const { loading: requestLoading, token } = useStore($authStore);
  const { sendRequest } = useHttpClient();

  const onSubmitProjectFormHandler = async (values: ProjectEditFormValues) => {
    try {
      if (inEditState) {
        await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/projects/${data?.id}`,
          'PATCH',
          JSON.stringify(values),
          {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        );
      } else {
        await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/projects`,
          'POST',
          JSON.stringify(values),
          {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

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
                <InputUpload
                  onPreviewChange={(values, loading) => {
                    if (onPreviewChange) {
                      onPreviewChange(values, loading);
                    }
                  }}
                  name={FIELD_IMAGE_SRC}
                  placeholder={i18n._(i18nMark('Image'))}
                  validate={required}
                >
                  <Trans>Image</Trans>
                </InputUpload>
                {showUpload ? (
                  <FieldGroup>
                    <InputUpload
                      onPreviewChange={(values, loading) => {
                        if (onPreviewChange) {
                          onPreviewChange(values, loading);
                        }
                      }}
                      name={FIELD_IMAGE_SRC}
                      placeholder={i18n._(i18nMark('Image'))}
                      validate={required}
                    >
                      <Trans>Image</Trans>
                    </InputUpload>
                    <InputUpload
                      onPreviewChange={(values, loading) => {
                        if (onPreviewChange) {
                          onPreviewChange(values, loading);
                        }
                      }}
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
