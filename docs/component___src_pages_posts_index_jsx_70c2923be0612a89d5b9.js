(self.webpackChunk = self.webpackChunk || []).push([
  [602],
  {
    6704: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = a(7294),
        s = a(8244),
        r = a(5444),
        c = a(6911),
        l = a(8859);
      var i = function (e) {
        var t,
          a = e.node,
          s = a.fields.tags;
        return (
          0 < s.length &&
            (t = s.map(function (e) {
              return n.createElement(
                r.Link,
                { className: "tag is-radiusless is-primary", to: "/tags/" + e },
                e
              );
            })),
          n.createElement(
            r.Link,
            { to: a.fields.slug },
            n.createElement(
              "div",
              { className: "card" },
              n.createElement(
                "div",
                { className: "card-image" },
                n.createElement(
                  c.Z,
                  { fluid: a.frontmatter.cover.childImageSharp.fluid },
                  n.createElement("figure", { className: "image is-3by2" })
                )
              ),
              n.createElement(
                "section",
                { className: "card-content" },
                n.createElement(
                  "h4",
                  { className: "title is-4" },
                  a.frontmatter.title
                ),
                n.createElement(
                  "section",
                  { className: "subtitle heading" },
                  n.createElement("p", null, a.frontmatter.time),
                  n.createElement(
                    "p",
                    null,
                    (0, l.Z)(a.wordCount.words, "word"),
                    " |",
                    " ",
                    (0, l.Z)(a.timeToRead, "minute")
                  )
                ),
                n.createElement("section", { className: "content" }, a.excerpt)
              ),
              n.createElement(
                "section",
                { className: "tags is-pulled-right" },
                t
              )
            )
          )
        );
      };
      var m = function (e) {
        return n.createElement(
          "section",
          { className: "column is-half" },
          n.createElement(i, { node: e })
        );
      };
      var o = function (e) {
        var t = e.pageTitle,
          a = e.nodes;
        return n.createElement(
          s.Z,
          { pageTitle: t },
          n.createElement(
            "div",
            { className: "container" },
            n.createElement(
              "section",
              { className: "section" },
              n.createElement("h1", { className: "title is-1" }, t),
              n.createElement(
                "h4",
                { className: "subtitle is-4" },
                "Everthing is work in progress. As I learn about new things or change my mind, I am going to update the posts."
              )
            ),
            n.createElement(
              "section",
              { className: "section" },
              n.createElement(
                "div",
                { className: "columns is-multiline" },
                a.map(m)
              )
            )
          )
        );
      };
    },
    8859: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        var a = e + " " + t;
        return 2 <= e && (a += "s"), a;
      };
    },
    9814: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a(7294),
        s = a(5444),
        r = a(6704);
      function c() {
        var e = (0, s.useStaticQuery)("4022424808");
        return n.createElement(r.Z, {
          pageTitle: "Posts",
          nodes: e.allMarkdownRemark.nodes,
        });
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-posts-index-jsx-70c2923be0612a89d5b9.js.map
