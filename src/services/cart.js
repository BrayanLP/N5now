 

const getAll = async() => { 
  const data = localStorage.getItem('products')
  return JSON.parse(data)
}; 

const findOne = () =>{
    return true;
}
const deleteOne = (val) =>{
  let data = localStorage.getItem('products')
  let array = JSON.parse(data) || [];
  array.map( (snap, index)=>{
    if(snap.id === val.id){
      array.splice(index, 1); 
    } 
    return snap
  })
  console.log('array', array)
  localStorage.setItem('products',JSON.stringify(array))
  return JSON.parse(localStorage.getItem('products'))
}

const create = (val)=>{
  let data = localStorage.getItem('products')
  const array = JSON.parse(data) || [];
  const duplicate = array.filter((i) => i.id === val.id)
  // ya existen productos 
  if(duplicate.length > 0){
    array.map( (snap, index)=>{
      if(snap.id === val.id){
        snap.quantity += 1;
        return snap;
      } 
      return snap
    })
  }
  else{ 
    val.quantity = 1;
    array.push(val)
    console.log('NEW', val, array)
  }
  localStorage.setItem('products',JSON.stringify(array))
  return JSON.parse(localStorage.getItem('products'))
}

const countLess = (val)=>{
   
  let data = localStorage.getItem('products')
  let array = JSON.parse(data) || [];
  if(val){
    array.map( (snap, index)=>{
      if(snap.id === val.id){
        if(snap.quantity === 1){
           array.splice(index, 1); 
        }
        snap.quantity = snap.quantity  - 1;
        return snap; 
      }
      return snap;
    })
    console.log(array, 'service countless')
    localStorage.setItem('products',JSON.stringify(array))
    return JSON.parse(localStorage.getItem('products'))

  }
}
const countPlus = (val)=>{
   
  let data = localStorage.getItem('products')
  let array = JSON.parse(data) || [];
  if(val){
    array.map( (snap, index)=>{
      if(snap.id === val.id){
       
        snap.quantity = snap.quantity  + 1;
        return snap; 
      }
      return snap;
    }) 
    localStorage.setItem('products',JSON.stringify(array))
    return JSON.parse(localStorage.getItem('products'))

  }
}


const deleteAll = ()=>{
   
  localStorage.setItem('products',JSON.stringify([]))
  return JSON.parse(localStorage.getItem('products'))
 
}


const totalProduct = ()=>{
  let sumary = 0;
  let data = localStorage.getItem('products')
  let array = JSON.parse(data) || [];

  array.map( (val) =>{
    sumary += val.quantity * val.price;
    return val 
  })
  return `S/${sumary}`;
}

const CartService = {
  getAll,
  create,
  findOne,
  countLess,
  totalProduct,
  countPlus,
  deleteOne,
  deleteAll
};
export default CartService;