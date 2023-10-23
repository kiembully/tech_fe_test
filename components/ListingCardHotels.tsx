import Grid from '@mui/material/Grid';
import styles from './cardhotel.module.scss'
import Image from 'next/image';
import { Typography, Stack, Chip, IconButton } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ContentChip from './chip';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ListingCardHotels = () => {
  const mockChip = [
    {
      label: '6 Guests',
      icon: <PersonOutlineOutlinedIcon sx={{
        fontSize: '20px'
      }} />
    },
    {
      label: '3 Baths',
      icon: <BathtubOutlinedIcon sx={{
        fontSize: '20px'
      }} />
    },
    {
      label: '3 Bedrooms',
      icon: <MeetingRoomOutlinedIcon sx={{
        fontSize: '20px'
      }} />
    },
    {
      label: '3 Beds',
      icon: <BedOutlinedIcon sx={{
        fontSize: '20px'
      }} />
    },
    {
      label: 'No Smoking',
      icon: <SmokeFreeOutlinedIcon sx={{
        fontSize: '20px'
      }} />
    },
    {
      label: 'WiFi',
      icon: <WifiOutlinedIcon sx={{
        fontSize: '20px'
      }} />
    },
  ]
  
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <h1 className={styles.order_header}>Order History</h1>
      </Grid>
      <Grid item xs={12}>
        <span className={styles.horizontal_line}></span>
      </Grid>
      <Grid item md={5} xs={12} className={styles.grid_display_pic_outer_left}>
        <div className={styles.display_pic_wrapper}>
          <Chip className={styles.display_pic_discount} label="-10% discount" />
          <Image src='/assets/hotel_dispaly_pic.png' fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='hotel display picture' />
          <IconButton aria-label="delete" size="large" className={styles.display_pic_btn}>
            <FavoriteIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid item md={7} xs={12} className={styles.grid_display_pic_outer_right}>
        <Stack
          direction='column'
          spacing={1}
        >
          <Typography variant='caption'>Hotel Room in Tokyo, Japan</Typography>
          <Typography variant='h4'>The Lounge & Bar</Typography>
          <hr className={styles.horizontal_line_2}></hr>
        </Stack>
        <Stack
          direction='row'
          spacing={1}
          sx={{
            maxWidth: '300px',
            flexFlow: 'wrap'
          }}
          >
          {
            mockChip.map((item, index) => {
              return (
                <ContentChip
                  key={`chip-${index}`}
                  label={item.label}
                  icon={item.icon}
                  />
              )
            })
          }
        </Stack>
        <hr className={styles.horizontal_line_2}></hr>
        <Stack
          direction='column'
          spacing={1}
          sx={{
            flexFlow:'wrap',
            alignItems: 'center'
          }}
        >
          <span className={styles.card_rating_caption}>
            <Image src='/assets/Holidayo_rating_1.png' height={17.332} width={16.5} alt='rating icon' />
            <Typography variant='caption' sx={{ fontWeight: 500 }}>
              4.9
            </Typography>
            <Typography variant='caption' sx={{ fontWeight: 400 }}>
              (122)
            </Typography>
          </span>
          <span style={{
            flex: 'auto'
          }}></span>
          <span className={styles.card_pricing}>
            <Typography variant='inherit'>
              2 320 €
            </Typography>
          </span>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ListingCardHotels;