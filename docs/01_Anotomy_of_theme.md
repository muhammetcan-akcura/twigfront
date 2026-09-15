# Anotomy of theme

Main parts of twig themes:

*   [HTML](#theme-html)
*   [CSS](#theme-css)
*   [JS](#theme-js)

Each of these parts performs its work. In combination with each other, these elements form the entire design of your panel. You have full control to customize your themes.

#### HTML

Themes consist of `.twig` template files, each of which performs its unique function.

The `layout.twig` can be thought of as the master template; all other templates are rendered inside of `layout.twig`. Any elements that are repeated in a theme (ex: site navbar, templates, header, footer, etc.) should be placed inside `layout.twig`.

The templates directory is rendered as the Templates folder in the theme editor. It contains all other `twig` templates, including those for customer accounts:

*   [layout](#block-variables-templates-layout)
*   [signin](#block-variables-templates-signin)
*   [signup](#block-variables-templates-signup)
*   [neworder](#block-variables-templates-neworder)
*   [massorder](#block-variables-templates-massorder)
*   [drip\_feed](#block-variables-templates-drip-feed)
*   [services](#block-variables-templates-services)
*   [order](#block-variables-templates-order)
*   [subscriptions](#block-variables-templates-subscriptions)
*   [addfunds](#block-variables-templates-addfunds)
*   [refunds](#block-variables-templates-refunds)
*   [tickets](#block-variables-templates-tickets)
*   [viewticket](#block-variables-templates-viewticket)
*   [faq](#block-variables-templates-faq)
*   [api](#block-variables-templates-api)
*   [terms](#block-variables-templates-terms)
*   [affiliates](#block-variables-templates-afiiliates)
*   [account](#block-variables-templates-account)
*   [notifications](#block-variables-templates-notifications)
*   [blog](#block-variables-templates-blog)
*   [blogpost](#block-variables-templates-blogpost)
*   [newpage](#block-variables-templates-newpage)
*   [child\_panel](#block-variables-templates-child_panel)
*   [refill](#block-variables-templates-refill)

#### CSS

CSS directory contains:

*   `[name_theme].css` - Theme css file
*   `style.css` - custom CSS of Theme

Alternatively, you can change CSS styles through the Admin panel **Settings** -> **Preferences**

#### JS

JS directory contains:

*   `bootstrap.js` - standart bootstrap javascript file
*   `main.js` - custom javascript file

New scripts should be added to `main.js`. Alternatively, you can add scripts through the Admin panel: **Settings** -> **Preferences**.