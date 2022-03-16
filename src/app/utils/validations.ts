export function validateEmail(mail:string) 
{
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  else
  {
    return (false)
  }
    
}
export function validateFullName(fullName:string) 
{
  if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName))
    {
      return (true)
    }
    else
    {
      return (false)
    }
    
}

export function validatePassword(password:string)
{
  if (password.length<10)
    return false;
  else 
    return true;
}