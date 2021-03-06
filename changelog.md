<a name="2.30.0"></a>
# [2.30.0](https://github.com/iTowns/itowns/compare/v2.29.2...v2.30.0) (2021-02-05)


### Features

* **CameraUtils:** add possibility to set camera placement from an extent ([d6b2ab4](https://github.com/iTowns/itowns/commit/d6b2ab4))
* **VectorTilesSource:** store parsed vector tile style as class property ([bb581fb](https://github.com/iTowns/itowns/commit/bb581fb))


### Bug Fixes

* **Camera:** rename intersectSphere to intersectsSphere ([f5e1004](https://github.com/iTowns/itowns/commit/f5e1004))
* **examples:** rename smartZoom param in vector_tile_raster_2d ([ca7aaeb](https://github.com/iTowns/itowns/commit/ca7aaeb))
* **examples:** update three version in view_mutli_25d ([7778a4d](https://github.com/iTowns/itowns/commit/7778a4d))
* **Terrain:** use exact method to compute min and max elevation node; ([6297c09](https://github.com/iTowns/itowns/commit/6297c09))


### Examples

* **OrthographicCamera:** set camera initial position from an extent ([6c10ba2](https://github.com/iTowns/itowns/commit/6c10ba2))


### Code Refactoring

* **Camera:** refactor Camera as an ES6 class ([596cee6](https://github.com/iTowns/itowns/commit/596cee6))
* **Camera:** remove matrixProjectionNeedsUpdate. ([a501c92](https://github.com/iTowns/itowns/commit/a501c92))
* **debug:** remove three r124 warning. ([9c2406f](https://github.com/iTowns/itowns/commit/9c2406f))
* **layer:** introduce RasterLayer. ([e7b2653](https://github.com/iTowns/itowns/commit/e7b2653))
* **Layer:** Layer constructor parameter needs Source. ([11b8645](https://github.com/iTowns/itowns/commit/11b8645))


### Workflow and chores

* release v2.30.0 ([e69e170](https://github.com/iTowns/itowns/commit/e69e170))
* update packages. ([a5d2cad](https://github.com/iTowns/itowns/commit/a5d2cad))



<a name="2.29.2"></a>
## [2.29.2](https://github.com/iTowns/itowns/compare/v2.29.1...v2.29.2) (2021-01-26)


### Bug Fixes

* **3dTile:** don't overload the b3dm material. ([d7f14b6](https://github.com/iTowns/itowns/commit/d7f14b6))
* **PlanarControls:** fix zoom movement with an orthographic camera ([999851a](https://github.com/iTowns/itowns/commit/999851a))


### Code Refactoring

* **view:** add vector target viewToNormalizedCoords. ([b83a9c8](https://github.com/iTowns/itowns/commit/b83a9c8))


### Workflow and chores

* release v2.29.2 ([62365ea](https://github.com/iTowns/itowns/commit/62365ea))



<a name="2.29.1"></a>
## [2.29.1](https://github.com/iTowns/itowns/compare/v2.29.0...v2.29.1) (2021-01-22)


### Bug Fixes

* **PlanarControls:** fix issues related to cameraOrtho feature ([475c788](https://github.com/iTowns/itowns/commit/475c788))


### Workflow and chores

* release v2.29.1 ([3c71abc](https://github.com/iTowns/itowns/commit/3c71abc))


### Documentation

* update some deprecated doc ([d16c796](https://github.com/iTowns/itowns/commit/d16c796))
* **Camera:** modify camera.adjustAltitudeToAvoidCollisionWithLayer doc ([aabe814](https://github.com/iTowns/itowns/commit/aabe814))
* **GlobeControl:** update class constructor doc ([6fb3d28](https://github.com/iTowns/itowns/commit/6fb3d28))
* **GlobeControls:** minor correction ([7230b53](https://github.com/iTowns/itowns/commit/7230b53))
* **View:** update doc of View.getMeterToPixel method ([cc2385c](https://github.com/iTowns/itowns/commit/cc2385c))



<a name="2.29.0"></a>
# [2.29.0](https://github.com/iTowns/itowns/compare/v2.28.1...v2.29.0) (2021-01-21)


### Features

* **controls:** add damping factor property. ([22d962d](https://github.com/iTowns/itowns/commit/22d962d))
* **controls:** add option enable smart travel in planarControls ([a31873d](https://github.com/iTowns/itowns/commit/a31873d))
* **orthographic camera:** add support for an orthographic camera ([de0dba6](https://github.com/iTowns/itowns/commit/de0dba6))
* **points:** apply opacity classification on others MODE. ([e411425](https://github.com/iTowns/itowns/commit/e411425))
* **webgl:** support pick position from depth buffer with ortho ([05fb79f](https://github.com/iTowns/itowns/commit/05fb79f))


### Bug Fixes

* **ColorLayer:** wrong white to opacity effect. ([9666822](https://github.com/iTowns/itowns/commit/9666822))
* **controls:** moving camera after disabling collision. ([2dd8e06](https://github.com/iTowns/itowns/commit/2dd8e06))
* **controls:** remove prevent default in mouseDown. ([c866807](https://github.com/iTowns/itowns/commit/c866807))
* **examples:** fix key events in examples ([c187616](https://github.com/iTowns/itowns/commit/c187616))
* **PlanarControls:** remove previously instantiated controls associated ([2726101](https://github.com/iTowns/itowns/commit/2726101))
* **PlanarControls:** reset focus policy default parameters ([b56aaaf](https://github.com/iTowns/itowns/commit/b56aaaf))
* **test:** update a deprecated method call ([497d55e](https://github.com/iTowns/itowns/commit/497d55e))
* **workflow:** wrong path to build docs link. ([066f54a](https://github.com/iTowns/itowns/commit/066f54a))


### Examples

* **orthographic camera:** add examples of PlanarView with an orthographic camera ([d58c1b6](https://github.com/iTowns/itowns/commit/d58c1b6))


### Code Refactoring

* **Three:** remove deprecated matrix method. ([fffef40](https://github.com/iTowns/itowns/commit/fffef40))
* **Three:** remove deprecated quaternion method. ([f435fef](https://github.com/iTowns/itowns/commit/f435fef))


### Workflow and chores

* release v2.29.0 ([8c69ef6](https://github.com/iTowns/itowns/commit/8c69ef6))
* add action github to release and npm publish. ([eef3d53](https://github.com/iTowns/itowns/commit/eef3d53))
* add bump script. ([9e0f7b6](https://github.com/iTowns/itowns/commit/9e0f7b6))
* add changelog script. ([f7f6c40](https://github.com/iTowns/itowns/commit/f7f6c40))
* add github action to continuous integration ([e8e4f01](https://github.com/iTowns/itowns/commit/e8e4f01))
* add script to unit tests coverage. ([7c128ab](https://github.com/iTowns/itowns/commit/7c128ab))
* prepare migrating to webpack 5. ([9a549d4](https://github.com/iTowns/itowns/commit/9a549d4))
* refactoring debug npm script. ([b56f8b0](https://github.com/iTowns/itowns/commit/b56f8b0))
* **example:** rename start zoom to smart travel in key bindings description ([24c7c2b](https://github.com/iTowns/itowns/commit/24c7c2b))
* remove deprecated babel-polyfill ([2e3de03](https://github.com/iTowns/itowns/commit/2e3de03))
* remove useless integration files. ([349e1b4](https://github.com/iTowns/itowns/commit/349e1b4))
* update actions/setup-node to v2. ([e3e31c0](https://github.com/iTowns/itowns/commit/e3e31c0))
* upgrade and update lock file version to 2.0. ([537345b](https://github.com/iTowns/itowns/commit/537345b))
* **deps:** bump ini from 1.3.5 to 1.3.7 ([fd46fd1](https://github.com/iTowns/itowns/commit/fd46fd1))
* update packages. ([34ee221](https://github.com/iTowns/itowns/commit/34ee221))


### Documentation

* **workflow:** bump and changelog scripts. ([01bf159](https://github.com/iTowns/itowns/commit/01bf159))


### Others

* Update LICENSE.md ([28be05c](https://github.com/iTowns/itowns/commit/28be05c))
* Change comment on workflow remove old artifact ([7fcbb3a](https://github.com/iTowns/itowns/commit/7fcbb3a))
* Update actions checkout to v2 ([9094edc](https://github.com/iTowns/itowns/commit/9094edc))
* Update remove-old-artifacts.yml ([0a9911f](https://github.com/iTowns/itowns/commit/0a9911f))
* Create remove-old-artifacts.yml ([617326c](https://github.com/iTowns/itowns/commit/617326c))



