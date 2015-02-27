# v1.0.1

* Fix KenBurnsContainer not working in some cases.
* BREAKING, KBC is now a "view", not a "modifier".  So you need to
  `var kenBurnsContainer = FView.byId("kbc").view;` etc.
