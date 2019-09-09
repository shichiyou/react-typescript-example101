import React from 'react';
import { Paper } from '@material-ui/core';
import Table from '../components/Table/Table';

const Home: React.FC = () => {
  return (
    <Paper style={{ margin: '50px', padding: '50px' }}>
      <Table
        tableHeaderColor="warning"
        tableHead={["ID", "Name", "Salary", "Country"]}
        tableData={[
          ["1", "Dakota Rice", "$36,738", "Niger"],
          ["2", "Minerva Hooper", "$23,789", "Curaçao"],
          ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
          ["4", "Philip Chaney", "$38,735", "Korea, South"]
        ]}
      />
    </Paper>
  );
}

export default Home;