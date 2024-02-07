import React from 'react'

type IconProps = {
  disabled?: boolean
  svgProps?: React.SVGProps<SVGSVGElement>
}

export const CheckIcon = ({ disabled, svgProps, ...restProps }: IconProps) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'inline-flex',
        fontSize: 'inherit',
        height: '18px',
        justifyContent: 'center',
        width: '18px',
      }}
      {...restProps}
    >
      <svg
        fill={'none'}
        height={'100%'}
        viewBox={'0 0 18 18'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
        {...svgProps}
      >
        <path
          d={
            'M16 0L2 0C0.890015 0 0 0.899902 0 2L0 16C0 17.1001 0.890015 18 2 18L16 18C17.11 18 18 17.1001 18 16L18 2C18 0.899902 17.11 0 16 0ZM7 14L2 9L3.40997 7.59009L7 11.1699L14.59 3.58008L16 5L7 14Z'
          }
          fill={disabled ? '#808080' : '#FFF'}
          fillOpacity={'1.000000'}
          fillRule={'nonzero'}
          id={'checkbox'}
        />
      </svg>
    </div>
  )
}
