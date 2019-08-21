cube(`Orders`, {
  sql: `select * from Orders`,

  measures: {
    count: {
      type: `count`
    },

    totalAmount: {
      sql: `amount`,
      type: `sum`
    }
  },

  dimensions: {
    status: {
      sql: `stat`,
      type: `string`
    },

    dthrcreate: {
      sql: `${CUBE}.\`dtHrCreate\``,
      type: `time`
    }
  }
});
