import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/system'
const BootstrapDialogTitle = ({ children, onClose, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
}

export default function CustomizedDialogs({
  dialogContent,
  onClose,
  open,
  dialogProps,
  ...other
}) {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }))

  return (
    <div>
      <BootstrapDialog
        onClose={() => {
          onClose()
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
        {...dialogProps}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => {
            onClose()
          }}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>{dialogContent}</DialogContent>
      </BootstrapDialog>
    </div>
  )
}
CustomizedDialogs.propTypes = {
  dialogContent: PropTypes.func,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  open: PropTypes.bool,
  dialogProps: PropTypes.object,
}
