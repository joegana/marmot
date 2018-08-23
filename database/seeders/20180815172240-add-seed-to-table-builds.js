'use strict';

const build = require('../../test/fixtures/post-gw.json');
const data = JSON.stringify(build);

module.exports = {
  up: async queryInterface => {
    let baseId = 1000;
    const uidPrefix = '00000000-0000-0000-0000-00000000';
    const insertData = [];
    for (let i = 0; i < 5; i++) {
      insertData.push({
        jobName: 'foo',
        buildNumber: '1074395',
        gitBranch: 'master',
        data,
        uniqId: uidPrefix + baseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      baseId++;
      insertData.push({
        jobName: 'bar',
        buildNumber: '1074395',
        gitBranch: 'master',
        data,
        uniqId: uidPrefix + baseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      baseId++;
    }
    await queryInterface.bulkInsert('builds', insertData);
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('builds');
  },
};
