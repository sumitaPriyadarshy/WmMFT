<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">getPartnerList</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required Locale</value>
    <value>[o] record:0:required output</value>
    <value>[o] - record:1:required TNPartners</value>
    <value>[o] -- field:0:required partnerID</value>
    <value>[o] -- field:0:required partnerName</value>
    <value>[o] - record:1:required MFTPartners</value>
    <value>[o] -- field:0:required partnerID</value>
    <value>[o] -- field:0:required partnerName</value>
    <value>[o] -- field:0:required isEnterprise</value>
    <value>[o] - field:0:required leverageTN</value>
    <value>[o] - recref:0:optional svcResponse wm.mft.portal.rec:svcResponse</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CQkKCSAgICBJRGF0YUN1cnNvciBjdXIgPSBudWxsOwogICAgICAgIElEYXRhIG91dHB1dCA9IElE
YXRhRmFjdG9yeS5jcmVhdGUoKTsgCgkJSURhdGEgc3ZjUmVzcCA9IG51bGw7CgkJU3RyaW5nIHN2
Y05hbWUgPSAid20ubWZ0LnBvcnRhbC51c2VyOmdldFBhcnRuZXJMaXN0IjsKCQl0cnkgewoJICAg
IAljdXIgPSBwaXBlbGluZS5nZXRDdXJzb3IoKTsKCSAgICAJLy9DaGVjayBnbG9iYWwgcHJvcGVy
dHkgd2hldGhlciB0byB1c2UgVE4gcGFydG5lcnMgb3Igbm90LgoJICAgIAlib29sZWFuIHRvVXNl
VE5QYXJ0bmVycyA9IFVzZXJNYW5hZ2VyUHJveHkuaXNVc2VUTlBhcnRuZXJzKCk7CgkJCWJvb2xl
YW4gb2xkVmVyc2lvbiA9IHRydWU7CgkgICAgCWludFtdIHN1aXRlVmVyc2lvbiA9IFNlcnZlckFk
bWluUHJveHkuZ2V0U3VpdGVWZXJzaW9uKCk7CgkgICAgCWlmKHN1aXRlVmVyc2lvblswXT45KXsK
CSAgICAJCW9sZFZlcnNpb24gPSBmYWxzZTsKCSAgICAJfWVsc2UgaWYoc3VpdGVWZXJzaW9uWzBd
PT05JiZzdWl0ZVZlcnNpb25bMV0+PTEyKXsKCSAgICAJCW9sZFZlcnNpb24gPSBmYWxzZTsKCSAg
ICAJfQoJICAgIAkKCSAgICAJSGFzaE1hcDxTdHJpbmcsIFN0cmluZz4gdG5QYXJ0bmVycyA9IFVz
ZXJNYW5hZ2VyUHJveHkuZ2V0VE5QYXJ0bmVycygpOwoJCQlIYXNoTWFwPFN0cmluZywgU3RyaW5n
PiBtZnRQYXJ0bmVyID0gVXNlck1hbmFnZXJQcm94eS5nZXRNRlRQYXJ0bmVycygpOwoJICAgIAkK
CSAgICAJaWYob2xkVmVyc2lvbil7CgkgICAgCQlWYWx1ZXNFbXVsYXRvci5wdXQob3V0cHV0LCAi
VE5QYXJ0bmVycyIsIGdldElEYXRhRm9yUGFydG5lcnModG5QYXJ0bmVycykpOwoJICAgIAkJVmFs
dWVzRW11bGF0b3IucHV0KG91dHB1dCwgIk1GVFBhcnRuZXJzIiwgZ2V0SURhdGFGb3JQYXJ0bmVy
cyhtZnRQYXJ0bmVyKSk7CgkgICAgCX1lbHNlewoJICAgIAkJaWYodG9Vc2VUTlBhcnRuZXJzKXsK
CSAgICAJCQlWYWx1ZXNFbXVsYXRvci5wdXQob3V0cHV0LCAiVE5QYXJ0bmVycyIsIGdldElEYXRh
Rm9yUGFydG5lcnModG5QYXJ0bmVycykpOwoJCSAgICAJfWVsc2V7CgkJICAgIAkJVmFsdWVzRW11
bGF0b3IucHV0KG91dHB1dCwgIk1GVFBhcnRuZXJzIiwgZ2V0SURhdGFGb3JQYXJ0bmVycyhtZnRQ
YXJ0bmVyKSk7CgkJCSAgICB9CgkgICAgCX0KCQkJaWYob2xkVmVyc2lvbil7CgkJCQlWYWx1ZXNF
bXVsYXRvci5wdXQob3V0cHV0LCAibGV2ZXJhZ2VUTiIsICJmYWxzZSIpOwoJCQl9ZWxzZXsKCQkJ
IAlWYWx1ZXNFbXVsYXRvci5wdXQob3V0cHV0LCAibGV2ZXJhZ2VUTiIsIEJvb2xlYW4udG9TdHJp
bmcodG9Vc2VUTlBhcnRuZXJzKSk7CgkJCX0KCSAgIH1jYXRjaCAoVGhyb3dhYmxlIHQpewoJICAg
IAlzdmNSZXNwID0gUG9ydGFsVXRpbHMuY2F0Y2hFcnJvcih0LCBzdmNOYW1lLCBTaGFyZWRDb25z
dGFudHMuRVJST1Isc3ZjUmVzcCk7CgkgICAgfWZpbmFsbHkgewoJICAgIAlpZiAoY3VyICE9IG51
bGwpewoJICAgIAkJY3VyLmRlc3Ryb3koKTsKCSAgICAJfQoJICAgIAlWYWx1ZXNFbXVsYXRvci5w
dXQob3V0cHV0LCAic3ZjUmVzcG9uc2UiLCBzdmNSZXNwKTsKCSAgICAJVmFsdWVzRW11bGF0b3Iu
cHV0KHBpcGVsaW5lLCAib3V0cHV0Iiwgb3V0cHV0KTsJICAgICAgICAJCgkgICAgfQo=</value>
</Values>
