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
  if (password.length<6)
    return false;
  else 
    return true;
}
export function validateFile(file:string)
{
  if (file==undefined)
    return false;
  else 
    return true;
}