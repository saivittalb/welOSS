export default function() {
  return [
    {
      title: "Explore",
      to: "/explore",
      htmlBefore: '<i class="material-icons">explore</i>',
      htmlAfter: ""
    },
    {
      title: "Communities",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/communities",
    },
    {
      title: "Events",
      htmlBefore: '<i class="material-icons">videocam</i>',
      to: "/events",
    },
    // {
    //   title: "Programs & Opportunities",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    {
      title: "Programs & Opportunities",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/programs",
    },
    {
      title: "Learn",
      htmlBefore: '<i class="material-icons">library_books</i>',
      to: "/tables",
    },
    {
      title: "Forum",
      htmlBefore: '<i class="material-icons">forum</i>',
      to: "/forum",
    },
    {
      title: "Newsletter",
      htmlBefore: '<i class="material-icons">receipt</i>',
      to: "/newsletter",
    },
    {
      title: "Blog",
      htmlBefore: '<i class="material-icons">sticky_note_2</i>',
      to: "/blog-posts",
    },
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    }
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
