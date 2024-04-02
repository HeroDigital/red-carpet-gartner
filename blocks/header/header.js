
/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  
  const nav = 
  `<section class="globalsite cmp-common-cookiebanner">
  </section>
  <section class="globalsite cmp-globalsite-contextualnav sticky-nav sticky-search">
  <nav class="navbar market">
  <div class="nav-container">
  <div class="utility-nav clearfix">
  <div class="grid-norm un-container">
  <div class="dropdown icon-container login-icon-container globalsite cmp-globalsite-globaluser">
  
  <input type="hidden" name="isUserAuthenticated" value="false">
  <a href="https://www.gartner.com/account/signin" class="btn logged-out" role="button">
  <span class="icon-label">Sign In</span>
  </a>
  <input id="not-logged-in" type="hidden" value="">
  <input id="marketingClientHome" type="hidden" value="https://www.gartner.com/home">
  <input id="bacPhoneNumber" type="hidden" value="1 800 213 4848">
  <input id="user" type="hidden" value="{&quot;industryName&quot;:null,&quot;type&quot;:null,&quot;companyName&quot;:null,&quot;elqGuid&quot;:&quot;1CA1F968F31E4ADE9903871BD5928C05&quot;,&quot;deviceType&quot;:&quot;Desktop&quot;,&quot;industry&quot;:null,&quot;companySize&quot;:null,&quot;title&quot;:null,&quot;client&quot;:false,&quot;associate&quot;:false,&quot;exp&quot;:false,&quot;loggedIn&quot;:false}">
  </div>
  <div class="dropdown icon-container utility-icon-container">
  <a class="icon-label hidden-sm hidden-xs" data-en-title="Conferences" href="https://www.gartner.com/en/conferences">Conferences</a>
  <span class="vert-bar hidden-sm hidden-xs"></span>
  <a class="icon-label hidden-sm hidden-xs" data-en-title="About" href="/en/about">About</a>
  <span class="vert-bar hidden-sm hidden-xs"></span>
  <a class="icon-label hidden-sm hidden-xs" data-en-title="Newsroom" href="/en/newsroom">Newsroom</a>
  <span class="vert-bar hidden-sm hidden-xs"></span>
  <a class="icon-label hidden-sm hidden-xs" data-en-title="Careers" href="https://jobs.gartner.com/?_its=JTdCJTIydmlkJTIyJTNBJTIyOTJkMzczN2ItYmQ4Yi00ZmFhLTk0MmItNzBiMTAzYzBlYTJiJTIyJTJDJTIyc3RhdGUlMjIlM0ElMjJybHR%2BMTcxMjA2OTIyNn5sYW5kfjJfMTY0NjdfZGlyZWN0XzQ0OWU4MzBmMmE0OTU0YmM2ZmVjNWMxODFlYzI4Zjk0JTIyJTJDJTIyc2l0ZUlkJTIyJTNBNDAxMzElN0Q%3D">Careers</a>
  <span class="vert-bar hidden-sm hidden-xs"></span>
  </div>
  <div class="dropdown icon-container search-icon-container">
  <a href="#" id="search-button-util-nav" class="btn dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
  <span class="nav-icon gcom-icon-search"></span>
  </a>
  <span class="vert-bar "></span>
  <div class="dropdown-menu search-container">
  <div class="cmp-globalsite-search ac_box">
  <input id="searchString" type="text" class="form-control searchString" placeholder="Search" aria-label="Search" required="">
  <input type="hidden" id="searchTargetUrl" value="/en/search">
  <a class="searchHead btn" href="#">
  <span class="nav-icon gcom-icon-search"></span>
  </a>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="navbar-sticky-bg"></div>
  <div class="grid-norm navbar-container">
  <div class="navbar-header">
  
  <div id="global-navbar" class="dropdown dropdown-accordion global-toggler" data-accordion="#globalNavAccordion">
  <a class="gcom-icon-menu" href="#" data-toggle="dropdown"></a>
  <ul class="dropdown-menu global-nav-menu" role="menu" aria-labelledby="dLabel" style="max-height: 883px;">
  <li>
  <div class="panel-group" id="globalNavAccordion">
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link js-collapse" href="#collapse-0" data-toggle="collapse" data-sublink="Insights" data-nav-category="Insights" data-parent="#globalNavAccordion">Insights</a>
  </div>
  </div>
  <div class="panel-collapse collapse" id="collapse-0">
  <div class="panel-body">
  <span class="dropdown-menu__title">Featured</span>
  <ul class="nav">
  <li>
  <a href="/en/insights" class="nav-link" data-sublink="All Insights" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights">All Insights</a>
  </li>
  <li>
  <a href="/en/insights/guides" class="nav-link" data-sublink="Guides" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/guides">Guides</a>
  </li>
  <li>
  <a href="/en/insights/new-to-role" class="nav-link" data-sublink="For Executives in a New Role" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/new-to-role">For Executives in a New Role</a>
  </li>
  <li>
  <a href="/en/insights/strategic-planning" class="nav-link" data-sublink="Strategic Planning" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/strategic-planning">Strategic Planning</a>
  </li>
  <li>
  <a href="/en/insights/generative-ai-for-business" class="nav-link" data-sublink="Generative AI Resources" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/generative-ai-for-business">Generative AI Resources</a>
  </li>
  <li>
  <a href="/en/topics/generative-ai" class="nav-link" data-sublink="Understand GenAI" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/topics/generative-ai">Understand GenAI</a>
  </li>
  <li>
  <a href="/en/insights/leadership-vision" class="nav-link" data-sublink="Leadership Vision" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/leadership-vision">Leadership Vision</a>
  </li>
  <li>
  <a href="/en/insights/future-of-work" class="nav-link" data-sublink="Future of Work Reinvented" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/future-of-work">Future of Work Reinvented</a>
  </li>
  <li>
  <a href="/en/insights/sustainable-business" class="nav-link" data-sublink="Sustainable Business Strategy" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/insights/sustainable-business">Sustainable Business Strategy</a>
  </li>
  <li>
  <a href="/en/human-resources/insights/diversity-equity-inclusion" class="nav-link" data-sublink="Diversity, Equity and Inclusion" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav-heading="Insights" data-nav="/en/human-resources/insights/diversity-equity-inclusion">Diversity, Equity and Inclusion</a>
  </li>
  </ul>
  <span class="dropdown-menu__title">By Function</span>
  <ul class="nav">
  <li>
  <a href="/en/audit-risk" class="nav-link" data-sublink="Audit &amp; Risk" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/audit-risk">Audit &amp; Risk</a>
  </li>
  <li>
  <a href="/en/customer-service-support" class="nav-link" data-sublink="Customer Service &amp; Support" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/customer-service-support">Customer Service &amp; Support</a>
  </li>
  <li>
  <a href="/en/cybersecurity" class="nav-link" data-sublink="Cybersecurity" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/cybersecurity">Cybersecurity</a>
  </li>
  <li>
  <a href="/en/data-analytics" class="nav-link" data-sublink="Data &amp; Analytics" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/data-analytics">Data &amp; Analytics</a>
  </li>
  <li>
  <a href="/en/finance" class="nav-link" data-sublink="Finance" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/finance">Finance</a>
  </li>
  <li>
  <a href="/en/human-resources" class="nav-link" data-sublink="Human Resources" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/human-resources">Human Resources</a>
  </li>
  <li>
  <a href="/en/information-technology" class="nav-link" data-sublink="Information Technology" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/information-technology">Information Technology</a>
  </li>
  <li>
  <a href="/en/infrastructure-and-it-operations-leaders" class="nav-link" data-sublink="Infrastructure &amp; Operations" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/infrastructure-and-it-operations-leaders">Infrastructure &amp; Operations</a>
  </li>
  <li>
  <a href="/en/legal-compliance" class="nav-link" data-sublink="Legal &amp; Compliance" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/legal-compliance">Legal &amp; Compliance</a>
  </li>
  <li>
  <a href="/en/marketing" class="nav-link" data-sublink="Marketing &amp; Communications" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/marketing">Marketing &amp; Communications</a>
  </li>
  <li>
  <a href="/en/product-management" class="nav-link" data-sublink="Product" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/product-management">Product</a>
  </li>
  <li>
  <a href="/en/innovation-strategy" class="nav-link" data-sublink="R&amp;D" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/innovation-strategy">R&amp;D</a>
  </li>
  <li>
  <a href="/en/sales" class="nav-link" data-sublink="Sales" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/sales">Sales</a>
  </li>
  <li>
  <a href="/en/software-engineering" class="nav-link" data-sublink="Software Engineering" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/software-engineering">Software Engineering</a>
  </li>
  <li>
  <a href="/en/supply-chain" class="nav-link" data-sublink="Supply Chain" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav-heading="Insights" data-nav="/en/supply-chain">Supply Chain</a>
  </li>
  </ul>
  <span class="dropdown-menu__title">By Industry</span>
  <ul class="nav">
  <li>
  <a href="/en/industries/education" class="nav-link" data-sublink="Education" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/education">Education</a>
  </li>
  <li>
  <a href="/en/industries/energy-utilities" class="nav-link" data-sublink="Energy &amp; Utilities" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/energy-utilities">Energy &amp; Utilities</a>
  </li>
  <li>
  <a href="/en/financial-services" class="nav-link" data-sublink="Financial Services" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/financial-services">Financial Services</a>
  </li>
  <li>
  <a href="/en/industries/government-public-sector/all" class="nav-link" data-sublink="Government &amp; Public Sector" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/government-public-sector/all">Government &amp; Public Sector</a>
  </li>
  <li>
  <a href="/en/industries/healthcare-providers-digital-transformation" class="nav-link" data-sublink="Healthcare" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/healthcare-providers-digital-transformation">Healthcare</a>
  </li>
  <li>
  <a href="/en/industries/high-tech" class="nav-link" data-sublink="High Tech &amp; Telecom" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/high-tech">High Tech &amp; Telecom</a>
  </li>
  <li>
  <a href="/en/industries/investment-services" class="nav-link" data-sublink="Investment Services" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/investment-services">Investment Services</a>
  </li>
  <li>
  <a href="/en/industries/manufacturing-digital-transformation" class="nav-link" data-sublink="Manufacturing" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/manufacturing-digital-transformation">Manufacturing</a>
  </li>
  <li>
  <a href="/en/industries/retail-digital-transformation" class="nav-link" data-sublink="Retail" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav-heading="Insights" data-nav="/en/industries/retail-digital-transformation">Retail</a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link " href="/en/experts" data-toggle="collapse" data-sublink="Expert Guidance" data-nav-category="Expert Guidance" data-parent="#globalNavAccordion">Expert Guidance</a>
  </div>
  </div>
  <div class="panel-collapse collapse" id="collapse-1">
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link js-collapse" href="#collapse-2" data-toggle="collapse" data-sublink="Tools" data-nav-category="Tools" data-parent="#globalNavAccordion">Tools</a>
  </div>
  </div>
  <div class="panel-collapse collapse" id="collapse-2">
  <div class="panel-body">
  <span class="dropdown-menu__title">Overview</span>
  <ul class="nav">
  <li>
  <a href="/en/tools" class="nav-link" data-sublink="Tools to Make Smarter, Faster Decisions" data-nav-category="Tools" data-nav-sub-category="Overview" data-nav-heading="Tools" data-nav="/en/tools">Tools to Make Smarter, Faster Decisions</a>
  </li>
  </ul>
  <span class="dropdown-menu__title">Featured Tools</span>
  <ul class="nav">
  <li>
  <a href="/en/products/buysmart" class="nav-link" data-sublink="BuySmart: Buy Technology with Confidence" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav-heading="Tools" data-nav="/en/products/buysmart">BuySmart: Buy Technology with Confidence</a>
  </li>
  <li>
  <a href="/en/research/methodologies/research-methodologies-gartner-critical-capabilities" class="nav-link" data-sublink="Critical Capabilities: Analyze Products &amp; Services" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav-heading="Tools" data-nav="/en/research/methodologies/research-methodologies-gartner-critical-capabilities">Critical Capabilities: Analyze Products &amp; Services</a>
  </li>
  <li>
  <a href="/en/marketing/research/digital-iq" class="nav-link" data-sublink="Digital IQ: Power of My Brand Positioning" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav-heading="Tools" data-nav="/en/marketing/research/digital-iq">Digital IQ: Power of My Brand Positioning</a>
  </li>
  <li>
  <a href="/en/research/methodologies/gartner-hype-cycle" class="nav-link" data-sublink="Hype Cycle: Measure Technology Lifecycle" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav-heading="Tools" data-nav="/en/research/methodologies/gartner-hype-cycle">Hype Cycle: Measure Technology Lifecycle</a>
  </li>
  <li>
  <a href="/en/research/methodologies/magic-quadrants-research" class="nav-link" data-sublink="Magic Quadrant: Market Analysis of Competitive Players" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav-heading="Tools" data-nav="/en/research/methodologies/magic-quadrants-research">Magic Quadrant: Market Analysis of Competitive Players</a>
  </li>
  <li>
  <a href="/en/product-management/research/product-decisions" class="nav-link" data-sublink="Product Decisions: Power Your Product Strategy" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav-heading="Tools" data-nav="/en/product-management/research/product-decisions">Product Decisions: Power Your Product Strategy</a>
  </li>
  </ul>
  <span class="dropdown-menu__title">Templates &amp; Frameworks</span>
  <ul class="nav">
  <li>
  <a href="/en/insights/benchmarking" class="nav-link" data-sublink="Benchmarking: Best in Class Diagnostics" data-nav-category="Tools" data-nav-sub-category="Templates &amp; Frameworks" data-nav-heading="Tools" data-nav="/en/insights/benchmarking">Benchmarking: Best in Class Diagnostics</a>
  </li>
  <li>
  <a href="/en/insights/cost-optimization" class="nav-link" data-sublink="Cost Optimization: Drive Growth and Efficiency" data-nav-category="Tools" data-nav-sub-category="Templates &amp; Frameworks" data-nav-heading="Tools" data-nav="/en/insights/cost-optimization">Cost Optimization: Drive Growth and Efficiency</a>
  </li>
  <li>
  <a href="/en/insights/strategic-planning" class="nav-link" data-sublink="Strategic Planning: Turn Strategy into Action" data-nav-category="Tools" data-nav-sub-category="Templates &amp; Frameworks" data-nav-heading="Tools" data-nav="/en/insights/strategic-planning">Strategic Planning: Turn Strategy into Action</a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link js-collapse" href="#collapse-3" data-toggle="collapse" data-sublink="Connect with Peers" data-nav-category="Connect with Peers" data-parent="#globalNavAccordion">Connect with Peers</a>
  </div>
  </div>
  <div class="panel-collapse collapse" id="collapse-3">
  <div class="panel-body">
  <span class="dropdown-menu__title">Overview</span>
  <ul class="nav">
  <li>
  <a href="/en/connect-with-peers" class="nav-link" data-sublink="Connect with Peers on Your Mission-Critical Priorities" data-nav-category="Connect with Peers" data-nav-sub-category="Overview" data-nav-heading="Connect with Peers" data-nav="/en/connect-with-peers">Connect with Peers on Your Mission-Critical Priorities</a>
  </li>
  </ul>
  <span class="dropdown-menu__title">Conferences</span>
  <ul class="nav">
  <li>
  <a href="https://www.gartner.com/en/conferences" class="nav-link" data-sublink="About Gartner Conferences" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/en/conferences">About Gartner Conferences</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar" class="nav-link" data-sublink="All Conferences" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/en/conferences/calendar">All Conferences</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar/all/apac" class="nav-link" data-sublink="Asia/Pacific and Japan" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/en/conferences/calendar/all/apac">Asia/Pacific and Japan</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar/all/emea" class="nav-link" data-sublink="Europe, Middle East and Africa" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/en/conferences/calendar/all/emea">Europe, Middle East and Africa</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar/all/na" class="nav-link" data-sublink="North America" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/en/conferences/calendar/all/na">North America</a>
  </li>
  </ul>
  <span class="dropdown-menu__title">Communities</span>
  <ul class="nav">
  <li>
  <a href="https://www.gartner.com/peer-community/home" class="nav-link" data-sublink="Peer Community: Connections, Conversations &amp; Advice" data-nav-category="Connect with Peers" data-nav-sub-category="Communities" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/peer-community/home">Peer Community: Connections, Conversations &amp; Advice</a>
  </li>
  <li>
  <a href="https://www.gartner.com/peer-insights/home" class="nav-link" data-sublink="Peer Insights: Guide Decisions with Peer-Driven Insights" data-nav-category="Connect with Peers" data-nav-sub-category="Communities" data-nav-heading="Connect with Peers" data-nav="https://www.gartner.com/peer-insights/home">Peer Insights: Guide Decisions with Peer-Driven Insights</a>
  </li>
  <li>
  <a href="https://www.evanta.com/" class="nav-link" data-sublink="Evanta: Connecting C-Level Executives" data-nav-category="Connect with Peers" data-nav-sub-category="Communities" data-nav-heading="Connect with Peers" data-nav="https://www.evanta.com/">Evanta: Connecting C-Level Executives</a>
  </li>
  </ul>
  </div>
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link" href="https://www.gartner.com/en/conferences" data-toggle="collapse" data-sublink="Conferences" data-nav-category="Conferences" data-parent="#globalNavAccordion">Conferences</a>
  </div>
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link" href="/en/about" data-toggle="collapse" data-sublink="About" data-nav-category="About" data-parent="#globalNavAccordion">About</a>
  </div>
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link" href="/en/newsroom" data-toggle="collapse" data-sublink="Newsroom" data-nav-category="Newsroom" data-parent="#globalNavAccordion">Newsroom</a>
  </div>
  </div>
  </div>
  <div class="panel">
  <div class="panel-heading">
  <div class="panel-title">
  <a class="nav-link" href="https://jobs.gartner.com/?_its=JTdCJTIydmlkJTIyJTNBJTIyOTJkMzczN2ItYmQ4Yi00ZmFhLTk0MmItNzBiMTAzYzBlYTJiJTIyJTJDJTIyc3RhdGUlMjIlM0ElMjJybHR%2BMTcxMjA2OTIyNn5sYW5kfjJfMTY0NjdfZGlyZWN0XzQ0OWU4MzBmMmE0OTU0YmM2ZmVjNWMxODFlYzI4Zjk0JTIyJTJDJTIyc2l0ZUlkJTIyJTNBNDAxMzElN0Q%3D" data-toggle="collapse" data-sublink="Careers" data-nav-category="Careers" data-parent="#globalNavAccordion">Careers</a>
  </div>
  </div>
  </div>
  </div>
  </li>
  <li class="bac-btn-container global-nav-bac ">
  <div class="globalsite cmp-globalsite-button">
  <div class="light-bg">
  <a id="bacTopNavCtaBecomeAClient" data-en-title="Become a Client" href="/en/become-a-client?bacCtaId=bacTopNavCtaBecomeAClient" role="button" target="_self" class="btn bac-btn btBtn btnNormalWidth bacWrapper btn-blue">Become a Client
  <span class="button-arrow gcom-icon-arrow-up"></span>
  </a>
  </div>
  </div>
  <p class="dial-text blue-bold-text">
  <a href="tel:+18556664774">or call </a><a href="tel:+18556664774" class="InfinityNumber tangerine">1 855 666 4774</a>
  </p>
  </li>
  </ul>
  </div>
  <div class="gartner-logo">
  <a href="/en" class="">
  <img class="logo img-responsive" width="116" height="27" alt="" src="https://emt.gartnerweb.com/ngw/commonassets/images/build-graphics/gartner-logos/gartner.svg">
  </a>
  </div>
  </div>
  
  <div id="contextual-navbar" class="clearfix central-menu">
  <div>
  <ul id="primarynav" class="nav navbar-nav nav-left js-global-nav " style="visibility: visible;">
  <li class="dropdown primary-dropdown">
  <a href="#" class="dropdown-toggle nav-link primary-link" data-toggle="" role="button" aria-haspopup="true" aria-expanded="false" data-nav-type="contextual" data-nav="#" data-sublink="Insights" data-nav-category="Insights">Insights</a>
  <div class="dropdown-menu clear">
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Featured</span>
  <ul class="nav">
  <li>
  <a href="/en/insights" class="nav-link" data-nav-type="contextual" data-sublink="All Insights" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights">All Insights</a>
  </li>
  <li>
  <a href="/en/insights/guides" class="nav-link" data-nav-type="contextual" data-sublink="Guides" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/guides">Guides</a>
  </li>
  <li>
  <a href="/en/insights/new-to-role" class="nav-link" data-nav-type="contextual" data-sublink="For Executives in a New Role" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/new-to-role">For Executives in a New Role</a>
  </li>
  <li>
  <a href="/en/insights/strategic-planning" class="nav-link" data-nav-type="contextual" data-sublink="Strategic Planning" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/strategic-planning">Strategic Planning</a>
  </li>
  <li>
  <a href="/en/insights/generative-ai-for-business" class="nav-link" data-nav-type="contextual" data-sublink="Generative AI Resources" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/generative-ai-for-business">Generative AI Resources</a>
  </li>
  <li>
  <a href="/en/topics/generative-ai" class="nav-link" data-nav-type="contextual" data-sublink="Understand GenAI" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/topics/generative-ai">Understand GenAI</a>
  </li>
  <li>
  <a href="/en/insights/leadership-vision" class="nav-link" data-nav-type="contextual" data-sublink="Leadership Vision" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/leadership-vision">Leadership Vision</a>
  </li>
  <li>
  <a href="/en/insights/future-of-work" class="nav-link" data-nav-type="contextual" data-sublink="Future of Work Reinvented" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/future-of-work">Future of Work Reinvented</a>
  </li>
  <li>
  <a href="/en/insights/sustainable-business" class="nav-link" data-nav-type="contextual" data-sublink="Sustainable Business Strategy" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/insights/sustainable-business">Sustainable Business Strategy</a>
  </li>
  <li>
  <a href="/en/human-resources/insights/diversity-equity-inclusion" class="nav-link" data-nav-type="contextual" data-sublink="Diversity, Equity and Inclusion" data-nav-category="Insights" data-nav-sub-category="Featured" data-nav="/en/human-resources/insights/diversity-equity-inclusion">Diversity, Equity and Inclusion</a>
  </li>
  </ul>
  </div>
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">By Function</span>
  <ul class="nav">
  <li>
  <a href="/en/audit-risk" class="nav-link" data-nav-type="contextual" data-sublink="Audit &amp; Risk" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/audit-risk">Audit &amp; Risk</a>
  </li>
  <li>
  <a href="/en/customer-service-support" class="nav-link" data-nav-type="contextual" data-sublink="Customer Service &amp; Support" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/customer-service-support">Customer Service &amp; Support</a>
  </li>
  <li>
  <a href="/en/cybersecurity" class="nav-link" data-nav-type="contextual" data-sublink="Cybersecurity" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/cybersecurity">Cybersecurity</a>
  </li>
  <li>
  <a href="/en/data-analytics" class="nav-link" data-nav-type="contextual" data-sublink="Data &amp; Analytics" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/data-analytics">Data &amp; Analytics</a>
  </li>
  <li>
  <a href="/en/finance" class="nav-link" data-nav-type="contextual" data-sublink="Finance" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/finance">Finance</a>
  </li>
  <li>
  <a href="/en/human-resources" class="nav-link" data-nav-type="contextual" data-sublink="Human Resources" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/human-resources">Human Resources</a>
  </li>
  <li>
  <a href="/en/information-technology" class="nav-link" data-nav-type="contextual" data-sublink="Information Technology" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/information-technology">Information Technology</a>
  </li>
  <li>
  <a href="/en/infrastructure-and-it-operations-leaders" class="nav-link" data-nav-type="contextual" data-sublink="Infrastructure &amp; Operations" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/infrastructure-and-it-operations-leaders">Infrastructure &amp; Operations</a>
  </li>
  <li>
  <a href="/en/legal-compliance" class="nav-link" data-nav-type="contextual" data-sublink="Legal &amp; Compliance" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/legal-compliance">Legal &amp; Compliance</a>
  </li>
  <li>
  <a href="/en/marketing" class="nav-link" data-nav-type="contextual" data-sublink="Marketing &amp; Communications" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/marketing">Marketing &amp; Communications</a>
  </li>
  <li>
  <a href="/en/product-management" class="nav-link" data-nav-type="contextual" data-sublink="Product" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/product-management">Product</a>
  </li>
  <li>
  <a href="/en/innovation-strategy" class="nav-link" data-nav-type="contextual" data-sublink="R&amp;D" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/innovation-strategy">R&amp;D</a>
  </li>
  <li>
  <a href="/en/sales" class="nav-link" data-nav-type="contextual" data-sublink="Sales" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/sales">Sales</a>
  </li>
  <li>
  <a href="/en/software-engineering" class="nav-link" data-nav-type="contextual" data-sublink="Software Engineering" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/software-engineering">Software Engineering</a>
  </li>
  <li>
  <a href="/en/supply-chain" class="nav-link" data-nav-type="contextual" data-sublink="Supply Chain" data-nav-category="Insights" data-nav-sub-category="By Function" data-nav="/en/supply-chain">Supply Chain</a>
  </li>
  </ul>
  </div>
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">By Industry</span>
  <ul class="nav">
  <li>
  <a href="/en/industries/education" class="nav-link" data-nav-type="contextual" data-sublink="Education" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/education">Education</a>
  </li>
  <li>
  <a href="/en/industries/energy-utilities" class="nav-link" data-nav-type="contextual" data-sublink="Energy &amp; Utilities" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/energy-utilities">Energy &amp; Utilities</a>
  </li>
  <li>
  <a href="/en/financial-services" class="nav-link" data-nav-type="contextual" data-sublink="Financial Services" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/financial-services">Financial Services</a>
  </li>
  <li>
  <a href="/en/industries/government-public-sector/all" class="nav-link" data-nav-type="contextual" data-sublink="Government &amp; Public Sector" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/government-public-sector/all">Government &amp; Public Sector</a>
  </li>
  <li>
  <a href="/en/industries/healthcare-providers-digital-transformation" class="nav-link" data-nav-type="contextual" data-sublink="Healthcare" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/healthcare-providers-digital-transformation">Healthcare</a>
  </li>
  <li>
  <a href="/en/industries/high-tech" class="nav-link" data-nav-type="contextual" data-sublink="High Tech &amp; Telecom" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/high-tech">High Tech &amp; Telecom</a>
  </li>
  <li>
  <a href="/en/industries/investment-services" class="nav-link" data-nav-type="contextual" data-sublink="Investment Services" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/investment-services">Investment Services</a>
  </li>
  <li>
  <a href="/en/industries/manufacturing-digital-transformation" class="nav-link" data-nav-type="contextual" data-sublink="Manufacturing" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/manufacturing-digital-transformation">Manufacturing</a>
  </li>
  <li>
  <a href="/en/industries/retail-digital-transformation" class="nav-link" data-nav-type="contextual" data-sublink="Retail" data-nav-category="Insights" data-nav-sub-category="By Industry" data-nav="/en/industries/retail-digital-transformation">Retail</a>
  </li>
  </ul>
  </div>
  </div>
  </li>
  <li class="dropdown primary-dropdown">
  <a href="/en/experts" class="dropdown-toggle nav-link primary-link" data-toggle="" role="button" aria-haspopup="true" aria-expanded="false" data-nav-type="contextual" data-nav="/en/experts" data-sublink="Expert Guidance" data-nav-category="Expert Guidance">Expert Guidance</a>
  </li>
  <li class="dropdown primary-dropdown">
  <a href="#" class="dropdown-toggle nav-link primary-link" data-toggle="" role="button" aria-haspopup="true" aria-expanded="false" data-nav-type="contextual" data-nav="#" data-sublink="Tools" data-nav-category="Tools">Tools</a>
  <div class="dropdown-menu clear">
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Overview</span>
  <ul class="nav">
  <li>
  <a href="/en/tools" class="nav-link" data-nav-type="contextual" data-sublink="Tools to Make Smarter, Faster Decisions" data-nav-category="Tools" data-nav-sub-category="Overview" data-nav="/en/tools">Tools to Make Smarter, Faster Decisions</a>
  </li>
  </ul>
  </div>
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Featured Tools</span>
  <ul class="nav">
  <li>
  <a href="/en/products/buysmart" class="nav-link" data-nav-type="contextual" data-sublink="BuySmart: Buy Technology with Confidence" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav="/en/products/buysmart">BuySmart: Buy Technology with Confidence</a>
  </li>
  <li>
  <a href="/en/research/methodologies/research-methodologies-gartner-critical-capabilities" class="nav-link" data-nav-type="contextual" data-sublink="Critical Capabilities: Analyze Products &amp; Services" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav="/en/research/methodologies/research-methodologies-gartner-critical-capabilities">Critical Capabilities: Analyze Products &amp; Services</a>
  </li>
  <li>
  <a href="/en/marketing/research/digital-iq" class="nav-link" data-nav-type="contextual" data-sublink="Digital IQ: Power of My Brand Positioning" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav="/en/marketing/research/digital-iq">Digital IQ: Power of My Brand Positioning</a>
  </li>
  <li>
  <a href="/en/research/methodologies/gartner-hype-cycle" class="nav-link" data-nav-type="contextual" data-sublink="Hype Cycle: Measure Technology Lifecycle" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav="/en/research/methodologies/gartner-hype-cycle">Hype Cycle: Measure Technology Lifecycle</a>
  </li>
  <li>
  <a href="/en/research/methodologies/magic-quadrants-research" class="nav-link" data-nav-type="contextual" data-sublink="Magic Quadrant: Market Analysis of Competitive Players" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav="/en/research/methodologies/magic-quadrants-research">Magic Quadrant: Market Analysis of Competitive Players</a>
  </li>
  <li>
  <a href="/en/product-management/research/product-decisions" class="nav-link" data-nav-type="contextual" data-sublink="Product Decisions: Power Your Product Strategy" data-nav-category="Tools" data-nav-sub-category="Featured Tools" data-nav="/en/product-management/research/product-decisions">Product Decisions: Power Your Product Strategy</a>
  </li>
  </ul>
  </div>
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Templates &amp; Frameworks</span>
  <ul class="nav">
  <li>
  <a href="/en/insights/benchmarking" class="nav-link" data-nav-type="contextual" data-sublink="Benchmarking: Best in Class Diagnostics" data-nav-category="Tools" data-nav-sub-category="Templates &amp; Frameworks" data-nav="/en/insights/benchmarking">Benchmarking: Best in Class Diagnostics</a>
  </li>
  <li>
  <a href="/en/insights/cost-optimization" class="nav-link" data-nav-type="contextual" data-sublink="Cost Optimization: Drive Growth and Efficiency" data-nav-category="Tools" data-nav-sub-category="Templates &amp; Frameworks" data-nav="/en/insights/cost-optimization">Cost Optimization: Drive Growth and Efficiency</a>
  </li>
  <li>
  <a href="/en/insights/strategic-planning" class="nav-link" data-nav-type="contextual" data-sublink="Strategic Planning: Turn Strategy into Action" data-nav-category="Tools" data-nav-sub-category="Templates &amp; Frameworks" data-nav="/en/insights/strategic-planning">Strategic Planning: Turn Strategy into Action</a>
  </li>
  </ul>
  </div>
  </div>
  </li>
  <li class="dropdown primary-dropdown">
  <a href="#" class="dropdown-toggle nav-link primary-link" data-toggle="" role="button" aria-haspopup="true" aria-expanded="false" data-nav-type="contextual" data-nav="#" data-sublink="Connect with Peers" data-nav-category="Connect with Peers">Connect with Peers</a>
  <div class="dropdown-menu clear">
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Overview</span>
  <ul class="nav">
  <li>
  <a href="/en/connect-with-peers" class="nav-link" data-nav-type="contextual" data-sublink="Connect with Peers on Your Mission-Critical Priorities" data-nav-category="Connect with Peers" data-nav-sub-category="Overview" data-nav="/en/connect-with-peers">Connect with Peers on Your Mission-Critical Priorities</a>
  </li>
  </ul>
  </div>
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Conferences</span>
  <ul class="nav">
  <li>
  <a href="https://www.gartner.com/en/conferences" class="nav-link" data-nav-type="contextual" data-sublink="About Gartner Conferences" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav="https://www.gartner.com/en/conferences">About Gartner Conferences</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar" class="nav-link" data-nav-type="contextual" data-sublink="All Conferences" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav="https://www.gartner.com/en/conferences/calendar">All Conferences</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar/all/apac" class="nav-link" data-nav-type="contextual" data-sublink="Asia/Pacific and Japan" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav="https://www.gartner.com/en/conferences/calendar/all/apac">Asia/Pacific and Japan</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar/all/emea" class="nav-link" data-nav-type="contextual" data-sublink="Europe, Middle East and Africa" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav="https://www.gartner.com/en/conferences/calendar/all/emea">Europe, Middle East and Africa</a>
  </li>
  <li>
  <a href="https://www.gartner.com/en/conferences/calendar/all/na" class="nav-link" data-nav-type="contextual" data-sublink="North America" data-nav-category="Connect with Peers" data-nav-sub-category="Conferences" data-nav="https://www.gartner.com/en/conferences/calendar/all/na">North America</a>
  </li>
  </ul>
  </div>
  <div class="sub-nav-col">
  <span class="dropdown-menu__title">Communities</span>
  <ul class="nav">
  <li>
  <a href="https://www.gartner.com/peer-community/home" class="nav-link" data-nav-type="contextual" data-sublink="Peer Community: Connections, Conversations &amp; Advice" data-nav-category="Connect with Peers" data-nav-sub-category="Communities" data-nav="https://www.gartner.com/peer-community/home">Peer Community: Connections, Conversations &amp; Advice</a>
  </li>
  <li>
  <a href="https://www.gartner.com/peer-insights/home" class="nav-link" data-nav-type="contextual" data-sublink="Peer Insights: Guide Decisions with Peer-Driven Insights" data-nav-category="Connect with Peers" data-nav-sub-category="Communities" data-nav="https://www.gartner.com/peer-insights/home">Peer Insights: Guide Decisions with Peer-Driven Insights</a>
  </li>
  <li>
  <a href="https://www.evanta.com/" class="nav-link" data-nav-type="contextual" data-sublink="Evanta: Connecting C-Level Executives" data-nav-category="Connect with Peers" data-nav-sub-category="Communities" data-nav="https://www.evanta.com/">Evanta: Connecting C-Level Executives</a>
  </li>
  </ul>
  </div>
  </div>
  </li>
  </ul>
  </div>
  <div>
  <ul class="nav navbar-nav nav-right" style="visibility: visible;">
  <div class="nav-right-search">
  <a href="" class="btn search-toggle " role="button">
  <span class="nav-icon gcom-icon-search"></span>
  </a>
  </div>
  <li class="bac-btn-container  ">
  <div class="globalsite cmp-globalsite-button">
  <div class="light-bg">
  <a id="bacTopNavCtaBecomeAClient" data-en-title="Become a Client" href="/en/become-a-client?bacCtaId=bacTopNavCtaBecomeAClient" role="button" target="_self" class="btn bac-btn btBtn btnNormalWidth bacWrapper btn-blue">Become a Client
  <span class="button-arrow gcom-icon-arrow-up"></span>
  </a>
  </div>
  </div>
  <p class="dial-text blue-bold-text">
  <a href="tel:+18556664774">or call </a><a href="tel:+18556664774" class="InfinityNumber tangerine">1 855 666 4774</a>
  </p>
  </li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </nav>
  
  </section>
  <ul class="hide">
  <li id="serp-search-item"><b>Gartner client? </b><a href="#">Log
  in</a> for personalized search results.</li>
  </ul>`
  const navEl = document.createElement('header')
  navEl.innerHTML = nav
  document.body.prepend(navEl)
  const original = document.querySelector('.header-wrapper')
  original.remove()

  const toggle = document.querySelector('.gcom-icon-menu')
  const dropdown = document.querySelector('#global-navbar')
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown.classList.toggle('open')
  })
  const navLinks = [...document.querySelectorAll('#globalNavAccordion .nav-link.js-collapse[data-toggle="collapse"]')]
  navLinks.forEach(navLink => {
    navLink.classList.add('collapsed')
    navLink.setAttribute('aria-expanded', 'false');
    navLink.addEventListener('click', (event) => {
      event.preventDefault();
      navLink.classList.toggle('collapsed')
      const dropExpanded = navLink.getAttribute('aria-expanded') === 'true';
      navLink.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
      document.querySelector(navLink.getAttribute('href')).classList.toggle('in')
    })
  })
}
