let object={Name:"marina",age:15};
function objectIterator ()
{
    let obj=-1;
    let it={
        next:()=>{
            obj++
            if(obj!=Object.keys(this).length)
            {
                value=[Object.keys(this)[obj],Object.values(this)[obj]]
                return {
                    value:value,
                    done:false
                }
            }
            return {
                value:undefined,
                done:true
            }
        }
    }
    return it;
}
let it =objectIterator();
object[Symbol.iterator]=objectIterator;
for(let element of object)
{
    console.log(element);
}