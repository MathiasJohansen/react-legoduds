import ShoppingButton from "./ShoppingButton"

export default function Form({name, handleClick}){
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="title"
                id="cartItem"
                type="hidden"
                defaultValue={name}
            />
            <ShoppingButton handleClick={handleClick} />


        </form>
    )
}