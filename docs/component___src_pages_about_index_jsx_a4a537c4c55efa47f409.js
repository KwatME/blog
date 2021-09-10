(self.webpackChunk = self.webpackChunk || []).push([
  [153],
  {
    3009: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var s = a(7294),
        l = a(5444),
        n = a(6911),
        i = a(8244);
      function r() {
        var e = (0, l.useStaticQuery)("4217227456");
        return s.createElement(
          i.Z,
          { pageTitle: "About" },
          s.createElement(
            n.Z,
            { fluid: e.file.childImageSharp.fluid },
            s.createElement(
              "section",
              { className: "hero is-fullheight-with-navbar" },
              s.createElement(
                "div",
                { className: "hero-body" },
                s.createElement(
                  "div",
                  { className: "container" },
                  s.createElement(
                    "div",
                    { className: "content" },
                    s.createElement(
                      "h1",
                      {
                        className:
                          "title has-text-white has-background-primary",
                        style: { display: "table", padding: "0px 4px" },
                      },
                      e.site.siteMetadata.author
                    ),
                    s.createElement(
                      "h3",
                      {
                        className:
                          "subtitle has-text-white has-background-primary",
                        style: { display: "table", padding: "0px 4px" },
                      },
                      e.site.siteMetadata.authorStatus
                    )
                  )
                )
              )
            )
          ),
          s.createElement(
            "section",
            { className: "section" },
            s.createElement(
              "div",
              { className: "container", style: { maxWidth: 800 } },
              s.createElement(
                "div",
                { className: "content" },
                s.createElement("div", {
                  dangerouslySetInnerHTML: { __html: e.markdownRemark.html },
                })
              )
            )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-index-jsx-a4a537c4c55efa47f409.js.map
