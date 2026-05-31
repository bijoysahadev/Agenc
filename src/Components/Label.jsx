import React from 'react'

const Label = ({className,text,tittle,type1,type2}) => {
  return (
     <label htmlFor={type2} className={`text-base text-third font-medium font-inter ${className}`}>{tittle}
                <input id={type2} type={type1}  className={`mt-2 w-full py-[19px] px-[23px] rounded-[10px] border border-[#E8E8E8] placeholder:text-[#D0D0D0] font-inter font-base text-[16px] ${className}`} placeholder={text} />
              </label>
  )
}

export default Label
