const formatDate = (date) => {
    // Function to format date as per requirement
    // Example: dd-mm-yyyy
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  };
  
  module.exports = {
    formatDate,
  };
  