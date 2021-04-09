---
title: How to set up Google Analytics on a Gatsby website
time: 2021-04-08
cover: cover.jpeg
tags: []
---

Go to Google Analytics.

Go to Admin:

![](image/1.png)

(Create Account if you haven't.)

Create Property.

![](image/2.png)

Enter Property name.
(I just use the URL.)

![](image/3.png)

If you want, provide information.
(I don't.)

Create.

![](image/4.png)

To collect a website data, set up a data streatm for web.

![](image/5.png)

Enter the URL and a name.

Create stream.

![](image/6.png)

Copy the measurement ID.

![](image/7.png)

In the project, npm install gatsby-plugin-google-gtag.

![](image/8.png)

Edit project/gatsby-config.js.
Add to the plugins, using the copied measurement ID:

```
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: ["G-XXXXXXXXXX"],
  },
},
```

![](image/9.png)

Git add, commit, and push.
Update the website.

Go to the website and confirm that Google Analytics sees the traffic.
If not, try accessing the website from various sources (laptop, phone, and other devices).
