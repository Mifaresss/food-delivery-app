import { Card, Typography } from '@mui/material'
import { AddButton } from './AddButton'
import { ProductPrice } from './ProductPrice'

export function ProductCard(card) {
   return (
      <Card
         variant='outlined'
         component='li'
         sx={{
            padding: '13px',
            flex: '1 1 200px',
            display: 'flex',
            flexDirection: 'column',
            borderColor: 'rgb(0,0,0,.3)',
         }}
      >
         <Typography variant='h6' component='h3' fontWeight={400}>
            {card.title}
         </Typography>
         <Typography color='textSecondary' sx={{ flex: '1 1 auto' }}>
            {card.description}
         </Typography>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <AddButton card={card} />
            <ProductPrice price={card.price} />
         </div>
      </Card>
   )
}
