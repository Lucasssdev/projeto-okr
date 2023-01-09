const nameMask = (string) => {
    function firstLetterUppercase(name) {
        return name.toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
   const lettersOnly = string.replace(/[^a-zA-Z\s]/g, '');
   return firstLetterUppercase(lettersOnly)
   
  }
  export default nameMask