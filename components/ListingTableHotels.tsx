import { Grid } from '@mui/material';
import styles from './tablehotel.module.scss'
// import TableBody from './TableBody';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Chip, Button } from '@mui/material';


const mockListHotel = [
  {
    imgPath: '/assets/image.png',
    title: 'The Lounge, Bar & Hotel near the Beach',
    caption: 'Hotel room in Tokyo, Japan',
    date: '24.06.2023',
    status: 'active'
  },
  {
    imgPath: '/assets/Image(5).png',
    title: 'The Lounge & Bar',
    caption: 'Hotel room in Tokyo, Japan',
    date: '24.06.2023',
    status: 'completed'
  },
  {
    imgPath: '/assets/Image(4).png',
    title: 'The Lounge, Bar & Hotel near the Beach',
    caption: 'Hotel room in Tokyo, Japan',
    date: '24.06.2023',
    status: 'completed'
  },
  {
    imgPath: '/assets/Image(3).png',
    title: 'The Lounge & Bar',
    caption: 'Hotel room in Tokyo, Japan',
    date: '24.06.2023',
    status: 'completed'
  },
  {
    imgPath: '/assets/Image(1).png',
    title: 'The Lounge',
    caption: 'Hotel room in Tokyo, Japan',
    date: '24.06.2023',
    status: 'completed'
  },
  {
    imgPath: '/assets/Image(2).png',
    title: 'The Lounge, Bar & Hotel near the Beach Resort',
    caption: 'Hotel room in Tokyo, Japan',
    date: '24.06.2023',
    status: 'cancelled'
  },
]

const ListingTableHotels = () => {
  
  return (
    <div className={styles.table_wrap}>
      <Grid container spacing={0}>

        {/* table body */}
        <Grid item xs={12}>
          
        <Table>
          <TableHead className={ styles.table_header }>
            <TableRow>
              <TableCell>Order Details</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              mockListHotel.map((item, index) => {
                return (
                  <TableRow key={`tbl-${index}`} className={ styles.table_data_row }>
                    <TableCell> 
                      <div>
                        <div className={styles.table_image_wrapper}>
                          <Image src={item.imgPath} fill alt='' />
                        </div>
                        <div className={styles.table_details_wrapper}>
                          <Typography variant='inherit'>{item.title}</Typography>
                          <Typography variant='caption'>{item.caption}</Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={styles.table_date}>
                        {item.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Chip
                        className={`${styles.table_chip} ${item.status === 'cancelled' ? styles.cancelled : (item.status === 'active') ? styles.active : null }`}
                        id={item.status}
                        label={item.status}
                        size="small" />
                    </TableCell>
                    <TableCell>
                      <Button className={styles.table_action} variant="text">View</Button>
                    </TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>
          
        </Grid>

      </Grid>
    </div>
  );
}

export default ListingTableHotels;