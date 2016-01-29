import Backbone from 'backbone'

const OtherViewClass = Backbone.View.extend()

const ExportedClass = Backbone.View.extend({

  /*
   * Putting this other class on the prototype because this is how
   * I realized the issue. When render method exists on ExportedClass
   * creating a new instance of OtherViewClass should cause a TypeError
   */
  OtherViewClass,

  /*
   * Uncomment the 'render' method below
   */

  // render() {
  //
  // }
})

export default ExportedClass
