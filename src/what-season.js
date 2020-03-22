module.exports = function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'autumn'];

  if(!date) {
    return 'Unable to determine the time of year!';
  }

 else if (Object.prototype.toString.apply(date) != '[object Date]')
    throw new Error;

  else {
    let month = date.getMonth();
    
    if(month === 11 || month === 0 || month === 1) return seasons[0];
    else if (month > 1 && month < 5) return seasons[1];
    else if (month > 4 && month < 8) return seasons[2];
    else if (month > 7 && month < 11) return seasons[3];

  }

};