

function CategoryChip({categoryProps , isChosen , onClick}) {

    // console.log("isCHosen==>" , isChosen);
    
    

    const { name } = categoryProps
    return(
        <div
        onClick={onClick}
        className={`${isChosen ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'} 
        p-2 mx-1 my-1 px-3 cursor-pointer hover:bg-purple-100 border-purple-400 border rounded-md`}>
                <h1 className='text-sm'>{name}</h1>
            </div>
    )
}


export default CategoryChip;