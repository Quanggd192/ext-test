import React from 'react'
import { ReactComponent as IconAddSwitch } from 'assets/icons/add-switch.svg'
import { ReactComponent as IconRemoveSwitch } from 'assets/icons/remove-switch.svg'
interface Props {
  enabled: boolean;
  text: string;
  handleAdd?: () => void
}
export default function FilterChip({ enabled, text, handleAdd }: Props) {
  const prefix = enabled ? <IconRemoveSwitch className='inline-block mb-[3px] cursor-pointer' onClick={handleAdd} /> : <IconAddSwitch className='inline-block mb-[3px] cursor-pointer' onClick={handleAdd} />
  return (
    <div className='my-[15px]'>
      <div className='inline-block h-[24px] rounded-[32px] border border-solid border-[#6e97f7] px-sm'>
        {prefix}&nbsp;
        {text}
      </div>
    </div>
  )
}
