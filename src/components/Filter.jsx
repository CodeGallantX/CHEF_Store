// import React from 'react'


const item = {
    total: '6',
}


const Filter = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center font-medium mt-5 px-8">
        <div className='text-lg'>{item.total} items found</div>
        <select name="filter" id="filter" className='border border-black rounded py-2 px-3 text-[#db6a18]'>
            <option value="Popularity">Sort by: Popularity</option>
            <option value="Category">Sort by: Category</option>
            <option value="Size">Sort by: Size</option>
            <option value="Cost">Sort by: Cost</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
