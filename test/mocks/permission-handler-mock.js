/* eslint-disable prefer-rest-params */
/* global jasmine, spyOn, describe, it, expect, beforeEach, afterEach */
'use strict'

const PermissionHandlerMock = function () {
  this.reset()
}

PermissionHandlerMock.prototype.reset = function () {
  this.nextCanPerformActionResult = true
  this.lastCanPerformActionQueryArgs = null
}

PermissionHandlerMock.prototype.canPerformAction = function (username, message, callback) {
  this.lastCanPerformActionQueryArgs = arguments
  if (typeof this.nextCanPerformActionResult === 'string') {
    callback(this.nextCanPerformActionResult)
  } else {
    callback(null, this.nextCanPerformActionResult)
  }
}

module.exports = new PermissionHandlerMock()
