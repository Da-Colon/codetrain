import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  CardContent,
  CardFooter,
  CardFooterItem,
  Image,
  Box,
  Select,
  Input,
  Field,
  Label,
  Title,
  TextArea,
  Button
} from "bloomer";

import { CardHeaderIcon } from "bloomer/lib/components/Card/Header/CardHeaderIcon";
import { Anchor } from "../Styles/navStyles";
import { CardContainer } from "../Styles/CardContainers";

const CompanyProfile = () => {
  const company = useSelector(state => state.user);
  const [companyInfo, setCompanyInfo] = useState({
    id: "",
    email: "",
    name: "",
    company_url: "",
    company_logo_url: "",
    description: ""
  });
  const [isEditMode, setEditMode] = useState(false);

  // This plucks the id from the URL so we can use it in the getCompanyInfo and useEffect functions
  let { id } = useParams();

  const getCompanyInfo = async id => {
    const response = await axios.get(
      `http://localhost:3000/companies/id/${id}`
    );
    setCompanyInfo(response.data);
  };

  const history = useHistory();
  const postReport = () => {
    history.push(`/report/company/${companyInfo.id}`);
  };

  useEffect(() => {
    getCompanyInfo(id);
  }, []);

  const handleEditMode = e => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const updateCompany = async id => {
    const endpoint = `http://localhost:3000/companies/update/${id}`;
    const payload = {
      email: companyInfo.email,
      name: companyInfo.name,
      company_url: companyInfo.company_url,
      company_logo_url: companyInfo.company_logo_url,
      description: companyInfo.description
    };
    const response = await axios.put(endpoint, payload);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    updateCompany(id);
    setEditMode(false);
    history.push(`/company/${id}`);
  };

  return (
    <>
      {isEditMode ? (
        <Box style={{ margin: "16px" }}>
          <Title style={{ textAlign: "center" }}>Edit Your Profile</Title>
          <form onSubmit={handleEditSubmit}>
            <Field>
              <Label>
                Company Name
                <Input
                  type="text"
                  placeholder="Company name"
                  name="name"
                  value={companyInfo.name}
                  onChange={handleChange}
                ></Input>
              </Label>
            </Field>
            <Field>
              <Label>
                Link to Company Logo
                <Input
                  type="url"
                  placeholder="Link to your company logo"
                  name="company_logo_url"
                  value={companyInfo.company_logo_url}
                  onChange={handleChange}
                ></Input>
              </Label>
            </Field>
            <Field>
              <Label>
                Company Email
                <Input
                  type="email"
                  placeholder="Link to your company logo"
                  name="email"
                  value={companyInfo.email}
                  onChange={handleChange}
                ></Input>
              </Label>
            </Field>
            <Field>
              <Label>
                Company Website
                <Input
                  type="url"
                  placeholder="Company Website"
                  name="company_url"
                  value={companyInfo.company_url}
                  onChange={handleChange}
                ></Input>
              </Label>
            </Field>
            <Field>
              <Label>
                About Us
                <TextArea
                  type="text"
                  placeholder="About Us"
                  name="description"
                  value={companyInfo.description}
                  onChange={handleChange}
                ></TextArea>
              </Label>
            </Field>
            <Button isColor="primary" type="submit">
              Edit Company Profile
            </Button>
          </form>
        </Box>
      ) : (
        <CardContainer>
          <Card>
            {companyInfo.id === company.companies_id ? (
              <Button onClick={handleEditMode}>Edit Profile</Button>
            ) : (
              <></>
            )}
            <CardHeader>
              <CardHeaderTitle>
                <strong>Company Name</strong>: {companyInfo.name}
              </CardHeaderTitle>
            </CardHeader>
            {companyInfo.id !== company.companies_id && (
              <Button isColor="danger" onClick={postReport}>Report {companyInfo.name}</Button>
            )}
            <CardContent>
              <CardImage>
                <Image
                  isSize="128x128"
                  src={companyInfo.company_logo_url}
                  alt="company logo"
                />
              </CardImage>
              <h2>
                <strong>Email</strong>:{" "}
                <Anchor target="_blank" href="mailto:{companyInfo.email}">
                  {companyInfo.email}
                </Anchor>
              </h2>
              <h2>
                <strong>Website</strong>:{" "}
                <Anchor target="_blank" href={companyInfo.company_url}>
                  {companyInfo.company_url}
                </Anchor>
              </h2>

              <h2>
                <strong>About</strong>:{" "}
              </h2>
              <p>{companyInfo.description}</p>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </>
  );
};

export default CompanyProfile;
