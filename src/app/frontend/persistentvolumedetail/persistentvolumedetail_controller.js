// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @final
 */
export class PersistentVolumeDetailController {
  /**
   * @param {!backendApi.PersistentVolumeDetail} persistentVolumeDetail
   * @ngInject
   */
  constructor(persistentVolumeDetail) {
    /** @export {!backendApi.PersistentVolumeDetail} */
    this.persistentVolumeDetail = persistentVolumeDetail;

    /** @export */
    this.i18n = i18n;
  }
}

const i18n = {
  /** @export {string} @desc Persistent volume info details section name. */
  MSG_PERSISTENT_VOLUME_INFO_DATA_SECTION: goog.getMsg('Data'),
};