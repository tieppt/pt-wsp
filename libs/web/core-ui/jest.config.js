module.exports = {
  name: 'web-core-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/core-ui',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
