import { Grid } from '@mui/material';

const TableBody = () => {
  return (
    <Grid container spacing={2}>

      <Grid item xs={7}>Order Details</Grid>
      <Grid item xs={2}>Date</Grid>
      <Grid item xs={2}>Status</Grid>
      <Grid item xs={1}></Grid>

    </Grid>
  );
}

export default TableBody;