module.exports = {
  name: 'frontend-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/frontend-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
