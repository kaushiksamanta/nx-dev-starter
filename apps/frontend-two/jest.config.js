module.exports = {
  name: 'frontend-two',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/frontend-two',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
