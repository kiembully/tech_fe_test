"use client"; // This is a client component
import { useState } from 'react'
import { Grid, IconButton } from '@mui/material';
import styles from './tablehotel.module.scss'
// import TableBody from './TableBody';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Chip, Button, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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

  const [isExpanded, setIsExpanded] = useState(false)
  const handleCollapse = () => {
    setIsExpanded(!isExpanded)
  }
  
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
                          <Image src={item.imgPath} fill alt={`hotel thumbnail-${index}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className={styles.table_details_wrapper}>
                          <Typography variant='inherit'>{item.title}</Typography>
                          <Typography variant='caption'>{item.caption}</Typography>
                        </div>
                        <div className={styles.table_details_wrapper_m}>
                          <IconButton>
                            <KeyboardArrowDownIcon />
                          </IconButton>
                          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                            <h1>sss</h1>
                          </Collapse>
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