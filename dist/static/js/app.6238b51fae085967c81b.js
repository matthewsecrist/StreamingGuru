webpackJsonp([0],[,,,function(t,s,e){"use strict";function i(t,s){return s?""+r+t+"?api_key="+l+"&sources="+s+"&limit=100":""+r+t+"?api_key="+l+"&limit=100"}function a(t,s){return""+r+t+"/"+s+"?api_key="+l}function n(t,s){return""+r+t+"/"+s+"/related?api_key="+l}function o(t,s){return""+r+t+"/"+s+"/available_content?api_key="+l}s.d=i,s.a=a,s.b=n,s.c=o;var r="https://api-public.guidebox.com/v2/",l=ENV[l]},,,,,,,,,function(t,s,e){e(48);var i=e(1)(e(36),e(67),"data-v-6a3ef0aa",null);t.exports=i.exports},,function(t,s,e){"use strict";var i=e(5),a=e(72),n=e(59),o=e.n(n),r=e(58),l=e.n(r),c=e(62),u=e.n(c),v=e(61),m=e.n(v),d=e(60),_=e.n(d),h=e(57),f=e.n(h);i.a.use(a.a),s.a=new a.a({mode:"history",linkActiveClass:"is-active",routes:[{path:"/movies/:source",name:"MoviesSource",component:o.a},{path:"/movies",name:"Movies",component:o.a},{path:"/movie/:id",name:"MovieDetail",component:l.a},{path:"/shows/:source",name:"ShowsSource",component:u.a},{path:"/shows",name:"Shows",component:u.a},{path:"/show/:id",name:"ShowDetail",component:m.a},{path:"/search/",name:"Search",component:_.a},{path:"/home",name:"Home",component:f.a},{path:"/",name:"root",component:f.a}]})},function(t,s,e){e(49);var i=e(1)(e(34),e(68),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e(15),n=e.n(a),o=e(14);i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(56),a=e.n(i);s.default={name:"app",components:{navbar:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"navbar",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"source-link",props:["name","link"],mounted:function(){},data:function(){return{}},methods:{},computed:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"home",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i),n=e(3),o=e(12),r=e.n(o);s.default={name:"movie-detail",components:{"source-link":r.a},props:[],mounted:function(){this.getMovieDetails()},data:function(){return{movieData:{},relatedMovies:[]}},methods:{getMovieDetails:function(){var t=this,s=e.i(n.a)("movies",this.$route.params.id),i=e.i(n.b)("movies",this.$route.params.id);a.a.all([a.a.get(s),a.a.get(i)]).then(a.a.spread(function(s,e){t.relatedMovies=e.data.results,t.movieData=s.data}))}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i),n=e(3);s.default={name:"movies",props:[],mounted:function(){this.getAllMovies()},data:function(){return{moviesData:[],error:null}},methods:{getAllMovies:function(){var t=this,s=e.i(n.d)("movies",this.$route.params.source);a.a.get(s).then(function(s){t.moviesData=s.data.results}).catch(function(s){t.loading=!1,t.error=s.toString()})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i);s.default={name:"search",props:[],mounted:function(){},data:function(){return{results:[],type:"movie",typeOptions:["movie","show"],searchfield:""}},methods:{onSubmit:function(){var t=this;if(this.searchfield&&""!==this.searchfield){var s="http://api-public.guidebox.com/v2/search?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&type="+this.type+"&field=title&query="+this.searchfield;a.a.get(s).then(function(s){t.results=s.data.results})}}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i),n=e(3),o=e(12),r=e.n(o);s.default={name:"show-detail",props:[],components:{"source-link":r.a},mounted:function(){this.getShowDetails()},data:function(){return{showData:{},relatedShows:[],showContent:{}}},methods:{getShowDetails:function(){var t=this,s=e.i(n.a)("shows",this.$route.params.id),i=e.i(n.b)("shows",this.$route.params.id),o=e.i(n.c)("shows",this.$route.params.id);a.a.all([a.a.get(s),a.a.get(i),a.a.get(o)]).then(a.a.spread(function(s,e,i){t.relatedShows=e.data.results,t.showContent=i.data.results,t.showData=s.data}))}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i),n=e(3);s.default={name:"shows",props:[],mounted:function(){this.getAllShows()},data:function(){return{showsData:[],error:null}},methods:{getAllShows:function(){var t=this,s=e.i(n.d)("shows",this.$route.params.source);a.a.get(s).then(function(s){t.showsData=s.data.results}).catch(function(s){t.error=s.toString()})}}}},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,function(t,s,e){e(45);var i=e(1)(e(35),e(64),"data-v-48cba674",null);t.exports=i.exports},function(t,s,e){e(46);var i=e(1)(e(37),e(65),"data-v-5559e119",null);t.exports=i.exports},function(t,s,e){e(47);var i=e(1)(e(38),e(66),"data-v-6148ce86",null);t.exports=i.exports},function(t,s,e){e(52);var i=e(1)(e(39),e(71),"data-v-d8f12a86",null);t.exports=i.exports},function(t,s,e){e(51);var i=e(1)(e(40),e(70),"data-v-7ed9a23c",null);t.exports=i.exports},function(t,s,e){e(44);var i=e(1)(e(41),e(63),"data-v-0d97bfe8",null);t.exports=i.exports},function(t,s,e){e(50);var i=e(1)(e(42),e(69),"data-v-78f434b2",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.showData.title?e("section",{staticClass:"show-detail"},[e("section",{staticClass:"hero is-primary is-medium is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds"},[e("h1",{staticClass:"title"},[t._v("\n              "+t._s(t.showData.title)+"\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.showData.overview)+"\n            ")]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column auto"},[e("p",[t._v("Where to Watch")]),t._v(" "),t._l(t.showContent.web.episodes.all_sources,function(t){return e("source-link",{key:t.id,attrs:{name:t.display_name}})})],2)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-quarter"},[e("h2",{staticClass:"subtitle"},[t._v("Starring")]),t._v(" "),e("ul",t._l(t.showData.cast.slice(0,10),function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"column is-one-quarter"},[t._m(0),t._v(" "),e("ul",t._l(t.showData.cast.slice(10,20),function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"column is-one-quarter"},[t._m(1),t._v(" "),e("ul",t._l(t.showData.cast.slice(20,30),function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))])])]),t._v(" "),e("div",{staticClass:"auto"},[e("img",{staticClass:"is-fluid",attrs:{src:t.showData.poster}})])])])])]),t._v(" "),e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-white"},[t._v("Related Shows")]),t._v(" "),e("h2",{staticClass:"subtitle is-white"},[t._v("Not what you're looking for? Find something like it.")]),t._v(" "),e("div",{staticClass:"columns is-multiline"},t._l(t.relatedShows.slice(0,24),function(t){return e("div",{staticClass:"column is-one-quarter"},[e("router-link",{attrs:{to:{name:"ShowDetail",params:{id:t.id}}}},[e("img",{staticClass:"is-fluid",attrs:{src:t.artwork_608x342}})])],1)}))])])]):t._e()},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",{staticClass:"subtitle"},[e("br")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",{staticClass:"subtitle"},[e("br")])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"nav has-shadow"},[e("div",{staticClass:"container"},[e("div",{staticClass:"nav-right"},[e("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/home"}},[t._v("\n        Home\n      ")]),t._v(" "),e("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/movies"}},[t._v("\n        Movies\n      ")]),t._v(" "),e("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/shows"}},[t._v("\n        Shows\n      ")]),t._v(" "),e("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/search"}},[t._v("\n        Search\n      ")])],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero is-primary is-fullheight is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n        What Can I Watch?\n      ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n        Spend a night in, find the perfect movie or show.\n      ")])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.movieData.title?e("section",{staticClass:"show-detail"},[e("section",{staticClass:"hero is-primary is-medium is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds"},[e("h1",{staticClass:"title"},[t._v("\n              "+t._s(t.movieData.title)+"\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.movieData.overview)+"\n            ")]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4"},[e("p",[t._v("Purchase")]),t._v(" "),t._l(t.movieData.purchase_web_sources,function(t){return e("source-link",{key:t.id,attrs:{name:t.display_name,link:t.link}})})],2),t._v(" "),e("div",{staticClass:"column is-4"},[e("p",[t._v("Watch With Subscription")]),t._v(" "),t._l(t.movieData.subscription_web_sources,function(t){return e("source-link",{key:t.id,attrs:{name:t.display_name,link:t.link}})})],2),t._v(" "),e("div",{staticClass:"column is-4"},[e("p",[t._v("Watch for Free")]),t._v(" "),t._l(t.movieData.free_web_sources,function(t){return e("source-link",{key:t.id,attrs:{name:t.display_name,link:t.link}})})],2)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-quarter"},[e("h2",{staticClass:"subtitle"},[t._v("Directed by")]),t._v(" "),e("ul",t._l(t.movieData.directors,function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"column is-one-quarter"},[e("h2",{staticClass:"subtitle"},[t._v("Written by")]),t._v(" "),e("ul",t._l(t.movieData.writers,function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"column is-one-quarter"},[e("h2",{staticClass:"subtitle"},[t._v("Starring")]),t._v(" "),e("ul",t._l(t.movieData.cast.slice(0,10),function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"column is-one-quarter"},[t._m(0),t._v(" "),e("ul",t._l(t.movieData.cast.slice(10,20),function(s){return e("li",[e("a",{attrs:{href:"http://www.imdb.com/name/",target:"_blank"}},[t._v(t._s(s.name))])])}))])])]),t._v(" "),e("div",{staticClass:"auto"},[e("img",{staticClass:"is-fluid",attrs:{src:t.movieData.poster_400x570}})])])])])]),t._v(" "),e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-white"},[t._v("Related Movies")]),t._v(" "),e("h2",{staticClass:"subtitle is-white"},[t._v("Not what you're looking for? Find something like it.")]),t._v(" "),e("div",{staticClass:"columns is-multiline"},t._l(t.relatedMovies.slice(0,8),function(t){return e("div",{staticClass:"column is-one-quarter"},[e("router-link",{attrs:{to:{name:"MovieDetail",params:{id:t.id}}}},[e("img",{staticClass:"is-fluid",attrs:{src:t.poster_400x570}})])],1)}))])])]):t._e()},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",{staticClass:"subtitle"},[e("br")])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:t.link,target:"_blank"}},[e("span",{staticClass:"tag is-white"},[t._v(t._s(t.name))])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("navbar"),t._v(" "),e("router-view",{key:t.$route.path})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium is-primary is-bold"},[t._m(0),t._v(" "),e("div",{staticClass:"hero-foot"},[e("nav",{staticClass:"tabs"},[e("div",{staticClass:"container is-fullwidth"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/shows"}},[t._v("All shows")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/amazon_prime"}},[t._v("Amazon Prime")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/starz_amazon_prime"}},[t._v("Starz")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/hbo_now"}},[t._v("HBO")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/netflix"}},[t._v("Netflix")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/hulu_plus"}},[t._v("Hulu")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/showtime"}},[t._v("Showtime")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/free"}},[t._v("All Free Sources")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shows/crackle"}},[t._v("Crackle")])],1)])])])])]),t._v(" "),e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},t._l(t.showsData,function(t){return e("div",{staticClass:"column is-one-quarter"},[e("router-link",{attrs:{to:{name:"ShowDetail",params:{id:t.id}}}},[e("img",{attrs:{src:t.artwork_608x342}})])],1)}))])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n            Shows\n          ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n            Start a series. Find a perfect one.\n          ")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",[e("form",{staticClass:"field has-addons has-addons-centered",on:{submit:function(s){s.preventDefault(),t.onSubmit(s)}}},[e("p",{staticClass:"control"},[e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.type=s.target.multiple?e:e[0]}}},t._l(t.typeOptions,function(s){return e("option",{domProps:{value:s}},[t._v("\n                "+t._s(s)+"\n              ")])}))])]),t._v(" "),e("p",{staticClass:"control is-expanded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchfield,expression:"searchfield"}],staticClass:"input",attrs:{type:"text",placeholder:"Movie or Show title"},domProps:{value:t.searchfield},on:{input:function(s){s.target.composing||(t.searchfield=s.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),e("div",{staticClass:"columns is-multiline"},t._l(t.results,function(s){return e("div",{staticClass:"column is-one-quarter"},["movie"===t.type?e("div",[e("router-link",{attrs:{to:{name:"MovieDetail",params:{id:s.id}}}},[e("img",{staticClass:"is-fluid",attrs:{src:s.poster_400x570}})])],1):t._e(),t._v(" "),"show"===t.type?e("div",[e("router-link",{attrs:{to:{name:"ShowDetail",params:{id:s.id}}}},[e("img",{attrs:{src:s.artwork_608x342}})])],1):t._e()])}))])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero is-primary is-medium is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n          Search\n        ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n          Looking for something specific? Find it here.\n        ")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n              Search\n            ")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium is-primary is-bold"},[t._m(0),t._v(" "),e("div",{staticClass:"hero-foot"},[e("nav",{staticClass:"tabs"},[e("div",{staticClass:"container is-fullwidth"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/movies"}},[t._v("All Movies")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/amazon_prime"}},[t._v("Amazon Prime")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/starz_amazon_prime"}},[t._v("Starz")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/hbo_now"}},[t._v("HBO")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/netflix"}},[t._v("Netflix")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/hulu_plus"}},[t._v("Hulu")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/showtime"}},[t._v("Showtime")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/free"}},[t._v("All Free Sources")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/crackle"}},[t._v("Crackle")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/popcornflix"}},[t._v("PopcornFlix")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/movies/vudu_free"}},[t._v("Vudu")])],1)])])])])]),t._v(" "),e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},t._l(t.moviesData,function(t){return e("div",{staticClass:"column is-one-quarter"},[e("router-link",{attrs:{to:{name:"MovieDetail",params:{id:t.id}}}},[e("img",{staticClass:"is-fluid",attrs:{src:t.poster_400x570}})])],1)}))])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n            Movies\n          ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n            We love movies. Find a perfect one.\n          ")])])])}]}}],[33]);
//# sourceMappingURL=app.6238b51fae085967c81b.js.map