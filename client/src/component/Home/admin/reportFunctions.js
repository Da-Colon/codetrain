import axios from 'axios'

const ENDPOINT = `http://localhost:3000`;


export const getReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports`);
  const data = response.data;
  console.log("THIS", data)
  return data
};

export const getUsersReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/all/users`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getCompaniesReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/all/companies`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getJobsReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/all/jobs`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getResourcesReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/all/resources`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

// Resolved reports
export const getResolvedReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/resolved`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getUsersResolvedReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/all/resolved/users`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getCompaniesResolvedReports = async () => {
  const response = await axios.get(
    `${ENDPOINT}/reports/all/resolved/companies`
  );
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getJobsResolvedReports = async () => {
  const response = await axios.get(`${ENDPOINT}/reports/all/resolved/jobs`);
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

export const getResourcesResolvedReports = async () => {
  const response = await axios.get(
    `${ENDPOINT}/reports/all/resolved/resources`
  );
  const data = response.data;
  if (response.status === 200) {
    return data
  } else {
    alert("Sorry, there was an error");
  }
};

// useEffect(() => {
//   getReports().then(reports => setAllReports(reports));
// }, []);

// useEffect(() => {
//   getUsersReports().then(reports =>
//   setUsers(reports))
// }, []);

// useEffect(() => {
//   getCompaniesReports().then(reports =>
//   setCompanies(reports))
// }, []);

// useEffect(() => {
//   getJobsReports().then(reports =>
//   setJobs(reports))
// }, []);

// useEffect(() => {
//   getResourcesReports().then(reports =>
//   setResources(reports))
// }, []);

// useEffect(() => {
//   getResolvedReports().then(reports =>
//   setAllResolvedReports(reports))
// }, []);

// useEffect(() => {
//   getUsersResolvedReports().then(reports =>
//   setUsersResolved(reports))
// }, []);

// useEffect(() => {
//   getCompaniesResolvedReports().then(reports =>
//   setCompaniesResolved(reports))
// }, []);

// useEffect(() => {
//   getJobsResolvedReports().then(reports =>
//   setJobsResolved(reports))
// }, []);

// useEffect(() => {
//   getResourcesResolvedReports().then(reports =>
//   setResourcesResolved(reports))
// }, []);

