type Props = {
  className?: string
}

export const AvatarDefault = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill={'currentColor'}
      height={'36px'}
      id={'Layer_1'}
      version={'1.1'}
      viewBox={'0 0 512 512'}
      width={'36px'}
      xmlSpace={'preserve'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g>
        <g>
          <circle cx={'256'} cy={'114.526'} r={'114.526'} />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M256,256c-111.619,0-202.105,90.487-202.105,202.105c0,29.765,24.13,53.895,53.895,53.895h296.421
			c29.765,0,53.895-24.13,53.895-53.895C458.105,346.487,367.619,256,256,256z"
          />
        </g>
      </g>
    </svg>
  )
}
