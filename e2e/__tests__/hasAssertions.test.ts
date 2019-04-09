/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import runJest from '../runJest';

test('has assertions with promises', () => {
  expect.hasAssertions();
  const result = runJest('has-assertions/fail-with-promises');
  expect(result.status).toBe(1);
});
