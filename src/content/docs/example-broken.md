---
title: Example Broken
template: splash
hero:
  image:
    file: ../../assets/houston.webp
---

Hello, World!

Visit [custom Astro component using `<StarlightPage>`](/starlight-page-component-broken/) // this will cause to throw an error!!!

Go back to [default Starlight page](/example-broken/)

This is the code of the entire MD-component:

```md
---
title: Example Broken
template: splash
hero:
  image:
    file: ../../assets/houston.webp
---

Hello, World!

Visit [custom Astro component using `<StarlightPage>`](/starlight-page-component-broken/) // this will cause to throw an error!!!

Go back to [default Starlight page](/example-broken/)

This is the code of the entire MD-component: (ending cause infinite loop)
```
