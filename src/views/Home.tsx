import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useConfigurationService from 'services/useConfigurationService';
import useStoresService from 'services/useStoresService';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 4000,
    },
  }),
);

function displayEffectiveDate(date: Date, today: Date): string {
  let result: string = '現在値';

  if ((date.getFullYear() !== today.getFullYear())
  || (date.getMonth() !== today.getMonth())
  || (date.getDate() !== today.getDate())) {
    result = date.toLocaleDateString();
  }

  return result;
}

const Home: React.FC = () => {
  const classes = useStyles();
  const config = useConfigurationService();
  const service = useStoresService();
  const now = new Date(Date.now());

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          {config.status === 'loading' && 
            (
              <TableRow>
                <StyledTableCell>Loading...</StyledTableCell>
              </TableRow>              
            )
          }
          {config.status === 'loaded' &&
            <TableRow>
              <StyledTableCell>店舗コード</StyledTableCell>
              <StyledTableCell>適用日</StyledTableCell>
              {config.payload.propertiyDefines!.map(define => (
                <StyledTableCell key={define.id}>{define.displayName}</StyledTableCell>
              ))}
            </TableRow>              
          }
        </TableHead>
        <TableBody>
          {service.status === 'loading' && 
            (
              <TableRow>
                <StyledTableCell>Loading...</StyledTableCell>
              </TableRow>              
            )
          }
          {config.status === 'loaded' && service.status === 'loaded' &&
            service.payload.items!.map(store => 
              store.propertyStatus!.map(row => {
                return (<StyledTableRow key={store.storeCode + '-' + row.effectiveDate}>
                  <StyledTableCell component="th" scope="row">
                    {store.storeCode}
                  </StyledTableCell>
                  <StyledTableCell>{displayEffectiveDate(row.effectiveDate!, now)}</StyledTableCell>
                  {config.payload.propertiyDefines!.map(define => {
                    const item = row.properties!.find(x => x.propertyId === define.id);
                    return (
                      <StyledTableCell key={define.id + '-' + store.storeCode + '-' + row.effectiveDate}>{item!.propertyValue}</StyledTableCell>
                    );                    
                  })}
                </StyledTableRow>)
                }
              )
            )
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Home;