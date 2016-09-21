/* tslint:disable:no-unused-variable */

/**
 * This file is generated for us so let's add a unit test to make sure the constructor logic works as expected
 */

import {
  addProviders,
    async,
    inject
} from '@angular/core/testing';

import {Todo} from './todo';

describe('Todo', () => {

  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

});
