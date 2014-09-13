eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"exit/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: \'exit\', // TODO: loaded via config\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, \'exit\');\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=exit/app.js");

;eval("define(\"exit/router\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: ExitENV.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=exit/router.js");

;eval("define(\"exit/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Ember.js</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=exit/templates/application.js");

;eval("define(\"exit/tests/exit/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - exit\');\n    test(\'exit/app.js should pass jshint\', function() { \n      ok(true, \'exit/app.js should pass jshint.\'); \n    });\n  });//# sourceURL=exit/tests/exit/app.jshint.js");

;eval("define(\"exit/tests/exit/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - exit\');\n    test(\'exit/router.js should pass jshint\', function() { \n      ok(true, \'exit/router.js should pass jshint.\'); \n    });\n  });//# sourceURL=exit/tests/exit/router.jshint.js");

;eval("define(\"exit/tests/exit/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - exit/tests/helpers\');\n    test(\'exit/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'exit/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=exit/tests/exit/tests/helpers/resolver.jshint.js");

;eval("define(\"exit/tests/exit/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - exit/tests/helpers\');\n    test(\'exit/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'exit/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=exit/tests/exit/tests/helpers/start-app.jshint.js");

;eval("define(\"exit/tests/exit/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - exit/tests\');\n    test(\'exit/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'exit/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=exit/tests/exit/tests/test-helper.jshint.js");

;eval("define(\"exit/tests/helpers/resolver\", \n  [\"ember/resolver\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: \'exit\'\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=exit/tests/helpers/resolver.js");

;eval("define(\"exit/tests/helpers/start-app\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    /* global require */\n\n    var Application = require(\'exit/app\')[\'default\'];\n    var Router = require(\'exit/router\')[\'default\'];\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({\n        // useful Test defaults\n        rootElement: \'#ember-testing\',\n        LOG_ACTIVE_GENERATION:false,\n        LOG_VIEW_LOOKUPS: false\n      }, attrs); // but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function(){\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=exit/tests/helpers/start-app.js");

;eval("define(\"exit/tests/test-helper\", \n  [\"exit/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n  });//# sourceURL=exit/tests/test-helper.js");
