// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/json/404.json"),
  "index.json": require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/json/index.json"),
  "404-html.json": require("/Users/rafarocha91/Desktop/projects/rweb-gatsby/.cache/json/404-html.json")
}