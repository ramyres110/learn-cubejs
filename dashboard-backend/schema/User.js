cube(`User`, {
  sql: `SELECT * FROM trycubejs.\`User\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    dthrcreate: {
      sql: `${CUBE}.\`dtHrCreate\``,
      type: `time`
    }
  }
});
