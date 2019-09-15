var floatAge, floatDays, intWeeks, floatMonths, intFortnights
    floatAge = parseFloat (prompt ("Enter your age"));
    floatDays = parseFloat (floatAge*365.25);
    floatMonths = parseFloat (floatAge * 12);
    intWeeks= parseInt (floatDays/7);
    intFortnights= parseInt (floatDays/14);
    alert ("Your age is " + floatAge);
    alert ("Your age in days is " + floatDays)
    alert ("Your age in months is " + floatMonths)
    alert ("Your age in weeks is " + intWeeks)
    alert ("Your age in fort nights is " + intFortnights)
    