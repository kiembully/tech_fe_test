import { Typography, Chip, Stack, Avatar } from '@mui/material'

interface MenuItem {
  label: string;
  icon: React.ReactNode;
}

const ContentChip = (props: MenuItem) => {

  
  return (
    <div style={{ marginLeft: '0'}}>
      <Chip sx={{
        backgroundColor: 'transparent',
        color: 'var(--gray-500, #6B7280)',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '12px' /* 100% */
      }} avatar={<Avatar sx={{ height: '20px !important', width: '20px !important', background: 'none' }}>
        {props.icon}
      </Avatar>} label={props.label} />
    </div>
  )
}

export default ContentChip