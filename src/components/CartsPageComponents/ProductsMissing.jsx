import { Typography } from '@mui/material'

export function ProductsMissing() {

	return (
		<Typography className='productsMissing' variant='h2' textAlign='center' mt='100px' fontWeight={500} color='primary'>
			You have not added any products yet
		</Typography>
	)
}