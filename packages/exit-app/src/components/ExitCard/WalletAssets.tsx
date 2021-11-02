import React from 'react'
import { ValueLine } from '../commons/ValueLine'
import { ReactComponent as ExternalIcon } from '../../assets/icons/external-icon.svg'
import classNames from 'classnames'
import { Button, ButtonProps, makeStyles } from '@material-ui/core'
import { useWallet } from '../OnboardButton'

interface WalletAssetsProps {
  className?: string
  loading?: boolean
}

interface ConnectWalletProps {
  className: string
  onClick?: ButtonProps['onClick']
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  connectWallet: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(217, 212, 173, 0.3)',
    backdropFilter: 'blur(4px)',
  },
}))

const ConnectWallet = ({ className, onClick }: ConnectWalletProps) => {
  return (
    <div className={className}>
      <Button size="large" variant="contained" color="secondary" onClick={onClick}>
        Connect Wallet
      </Button>
    </div>
  )
}

export const WalletAssets = ({ loading, className }: WalletAssetsProps) => {
  const classes = useStyles()

  const { startOnboard, onboard, provider } = useWallet()

  console.log({ onboard, provider })

  return (
    <div className={classNames(className, classes.root)}>
      <ConnectWallet className={classes.connectWallet} onClick={startOnboard} />
      <ValueLine label="Your Balance" loading={loading} />
      <ValueLine label="Market Value" icon={<ExternalIcon />} loading={loading} />
    </div>
  )
}
