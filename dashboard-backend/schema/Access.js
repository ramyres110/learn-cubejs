cube(`Access`, {
  sql: `SELECT * FROM trycubejs.\`Access\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    dthraccess: {
      sql: `${CUBE}.\`dtHrAccess\``,
      type: `time`
    }
  }
});
