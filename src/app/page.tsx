import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Grid, Button} from '@mui/material/';
import ListingCardHotels from '../../components/ListingCardHotels';
import ListingTableHotels from '../../components/ListingTableHotels';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Exam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: '954px',
          padding: '32px 60px',
          borderRadius: '24px',
          border: '1px solid var(--gray-200, #E5E7EB)',
          '@media (max-width: 768px)': {
            padding: '12px 30px',
          }
        }}
        >
        <Grid item xs={12}>
          <ListingCardHotels />
        </Grid>
        <Grid item xs={12}>
          <ListingTableHotels />
        </Grid>
        <Grid item xs={12}>
          <Button className={styles.order_button} variant="outlined">View more orders</Button>
        </Grid>
      </Grid>
    </div>
  );
}
