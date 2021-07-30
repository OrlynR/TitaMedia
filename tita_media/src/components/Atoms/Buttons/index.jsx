import { Button as MuiButton} from '@material-ui/core'
import Proptypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import useStyles from './styles'

const Button = ({ menuButton, showButton,viewButton, ...props }) => {
  const classes = useStyles()

  return (
    <MuiButton
      className={clsx(
        props.className,
        {
          [classes.menuButton]: menuButton,
          [classes.showButton]: showButton,
          [classes.viewButton]: viewButton,
        },
      )}
      {...props}
    />
  )
}

Button.propTypes = {
  menuButton: Proptypes.bool,
  showButton: Proptypes.bool,
  viewButton: Proptypes.bool
}

export default Button