import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { t, Trans } from '@lingui/macro';
import { i18n } from '@lingui/core';
import { useStore } from 'effector-react';
import axios from 'axios';

import {
  ProjectFormModel,
  ProjectFormFields,
} from '~/models/project-form.model';
import { Props } from './types';
import { $authStore } from '~/store/auth-store';
import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { defaultLang } from '~/store/language-store';

import { CATEGORIES_DATA } from '~/constants/portfolio';
import { PROJECTS_URL, PROJECT_EDIT_URL } from '~/constants/api';
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
  values: ProjectFormModel,
  inEditState: boolean
) => {
  const { projectUrlLabel, projectUrlHref, projectUrl, ...restValues } = values;

  const submittingValues: PortfolioItemModel = {
    ...restValues,
  };

  if (projectUrl && projectUrlHref && projectUrlLabel && inEditState) {
    submittingValues[ProjectFormFields.ProjectUrl] = {
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
  const { loading: requestLoading, token } = useStore($authStore);

  const onSubmitProjectFormHandler = async (values: ProjectFormModel) => {
    const submitValues = prepareSubmitValues(values, inEditState);

    try {
      const params = { auth: token };

      await (inEditState && data?.uniqueId
        ? axios.put(`${PROJECT_EDIT_URL(data.uniqueId)}`, submitValues, {
            params,
          })
        : axios.post(`${PROJECTS_URL}`, submitValues, {
            params,
          }));
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
      <Form
        onSubmit={onSubmitProjectFormHandler}
        initialValues={data || initialValues}
        render={({ handleSubmit, submitError }) => (
          <form onSubmit={handleSubmit}>
            <InputField
              name={`${ProjectFormFields.Title}.${formLanguage}`}
              type="text"
              placeholder={i18n._(t`Title`)}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Title</Trans>
            </InputField>
            <InputField
              name={ProjectFormFields.ImageName}
              type="text"
              placeholder={i18n._(t`Image name`)}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Image name</Trans>
            </InputField>
            <InputField
              name={`${ProjectFormFields.Description}.${formLanguage}`}
              type="textarea"
              placeholder={i18n._(t`Description`)}
              validate={required}
              disabled={requestLoading}
            >
              <Trans>Description</Trans>
            </InputField>
            <InputField
              name={`${ProjectFormFields.DescriptionList}.${formLanguage}`}
              type="textarea"
              placeholder={i18n._(t`Description list`)}
              disabled={requestLoading}
            >
              <Trans>Description list</Trans>
            </InputField>
            <SelectField
              name={ProjectFormFields.Category}
              options={CATEGORIES_DATA.map(({ label, value }) => ({
                value,
                label: i18n._(label),
              }))}
            >
              <Trans>Category</Trans>
            </SelectField>
            {showUpload ||
              (data && data[ProjectFormFields.ProjectUrl] && (
                <FieldsRow>
                  <InputField
                    name={ProjectFormFields.ProjectUrlHref}
                    type="text"
                    placeholder={i18n._(t`Project url src`)}
                    validate={required}
                    disabled={requestLoading}
                  >
                    <Trans>Project url src</Trans>
                  </InputField>
                  <InputField
                    name={ProjectFormFields.ProjectUrlLabel}
                    type="text"
                    placeholder={i18n._(t`Project url label`)}
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
                  name={ProjectFormFields.ImageSource}
                  placeholder={i18n._(t`Image`)}
                  validate={required}
                >
                  <Trans>Image</Trans>
                </InputUpload>
                <InputUpload
                  name={ProjectFormFields.ThumbnailSource}
                  placeholder={i18n._(t`Thumbnail`)}
                  validate={required}
                >
                  <Trans>Thumbnail</Trans>
                </InputUpload>
              </FieldGroup>
            ) : (
              <FieldGroup>
                <InputField
                  name={ProjectFormFields.ImageSource}
                  type="text"
                  placeholder={i18n._(t`Image src`)}
                  validate={required}
                  disabled={requestLoading}
                >
                  <Trans>Image src</Trans>
                </InputField>
                <InputField
                  name={ProjectFormFields.ThumbnailSource}
                  type="text"
                  placeholder={i18n._(t`Preview src`)}
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
    </FormWrapper>
  );
};
