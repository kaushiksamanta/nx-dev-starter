import { getGreeting } from '../support/app.po';

describe('app-one', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to app-one!');
  });
});
