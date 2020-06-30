import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Description = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} noValidate autoComplete="off">
			<Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
		</div>
	)
}

export default Description;