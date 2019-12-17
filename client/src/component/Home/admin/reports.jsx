import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Panel, PanelBlock, PanelHeading, PanelIcon, PanelTab, PanelTabs, Control, Input, Icon} from 'bloomer'

//   getAllCompanyReports,
//   getAllJobReports,
//   getAllResourceReports,
//   getAllUserReports,
//   sendMessageCompany,
//   sendMessageUser,
//   postReport,
//   deleteJob,
//   deleteResource,
//   removeAuthCompanyUsers,
//   removeAuthUser,
//   getReports,
//   resolveIssue

export default function Reports() {
  const user = useSelector(state => state.user);

  if (user.user_types_id !== 1) {
    window.location.replace("/");
  }

  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [resources, setResources] = useState([]);

  return (
    <div>
      <Panel style={{width: "250px", height: "88vh", overflowY: "scroll", overflowX: "hidden"}}>
    <PanelHeading>Reports</PanelHeading>
    {/* <PanelBlock>
        <Control hasIcons='left'>
            <Input isSize='small' placeholder='Search' />
            <Icon isSize='small' isAlign='left'>
                <span className='fa fa-search' aria-hidden='true' />
            </Icon>
        </Control>
    </PanelBlock> */}
    <PanelTabs>
        <PanelTab isActive>Unresolved</PanelTab>
        <PanelTab>Resolved</PanelTab>

    </PanelTabs>
    <PanelBlock isActive>
        <PanelIcon className="fa fa-code-fork" />
        RxJS
    </PanelBlock>
</Panel>
    </div>
  )
}
