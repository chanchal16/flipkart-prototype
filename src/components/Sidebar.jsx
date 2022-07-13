import React from 'react'

export const Sidebar = () => {
  return (
    <div className="w-48 bg-white  flex  flex-col pl-4 pr-4">
        <fieldset className="flex flex-col grid-gap-4 p-2">   
            <legend className='font-semibold'>Sort&nbsp;</legend>
           <label htmlFor='radio1'> <input type='radio' id='radio1' />low to high</label>
           <label htmlFor='radio2'> <input type='radio' id='radio2' />high to low</label>
        </fieldset> 
        <div className="flex flex-col flex-wrap grid-gap-4">
            <fieldset className="flex flex-col  grid-gap-4 p-2">
                <legend className='font-semibold'>&nbsp;Ideal for&nbsp;</legend>
                        <label htmlFor='male' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name="male"
                                id='male'
                            />
                           Men
                        </label>
                        <label htmlFor='female' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"                  
                                name="female"
                                id='female'
                            />
                           Women
                        </label>
            </fieldset>

            <fieldset className="flex flex-col  grid-gap-4 p-2">
                <legend className='font-semibold'>&nbsp;Sizes&nbsp;</legend>
                        <label htmlFor='checkbox1' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"                            
                                name='S'
                                id='checkbox1'
                            />
                            S
                        </label>
                        <label htmlFor='checkbox2' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name='M'
                                id='checkbox2'
                            />
                            M
                        </label>
                        <label htmlFor='checkbox3' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name='L'
                                id='checkbox3'
                            />
                            L
                        </label>
                        <label htmlFor='checkbox4' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name='XL'
                                id='checkbox4'
                            />
                            XL
                        </label>
            </fieldset>

            <fieldset className="flex  flex-col grid-gap-4 p-2 ">
                <legend className='font-semibold'>&nbsp;Brands&nbsp;</legend>
                        <label htmlFor='check1' className="flex items-center justify-start  grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name='Tokyo Talkies'
                                id='check1'
                            />
                            Tokyo Talkies
                        </label>
                        <label htmlFor='check2'  className="flex items-center justify-start  grid-gap-1 cursor-pointer"  >
                            <input
                                type="checkbox"
                                name= 'Harpa'
                                id='check2'
                            />
                            Harpa
                        </label>
                        <label htmlFor='check3' className="flex items-center justify-start  grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name='Raymond'
                                id='check3'
                            />
                            Raymond
                        </label>
                        <label htmlFor='check4'  className="flex items-center justify-start  grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name= 'HighLander'
                                id='check4'
                            />
                            HighLander
                        </label>
            </fieldset>

            <button className="p-4 rounded hover:text-blue-500 underline">
                Clear filters
            </button>
        </div>

        
    </div>
  )
}
