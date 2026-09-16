<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">importDataOSGI</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required force {"false","true"}</value>
    <value>[i] field:0:required simulate {"false","true"}</value>
    <value>[i] field:0:optional all {"true","false"}</value>
    <value>[i] field:0:required base64EncodedZipContent</value>
    <value>[i] record:1:optional importData</value>
    <value>[i] - field:0:optional assetType {"portServer","serverInstance","serverPreference","user","template","postProcessEvent","monitorFolderAction","postProcessAction","VFS","MFTSettings","rba","actionTemplate"}</value>
    <value>[i] - field:0:optional all {"true","false"}</value>
    <value>[i] - field:1:optional ids</value>
    <value>[i] - field:1:optional names</value>
    <value>[o] record:1:optional assets</value>
    <value>[o] - field:0:required assetType</value>
    <value>[o] - record:1:required items</value>
    <value>[o] -- field:0:required id</value>
    <value>[o] -- field:0:required name</value>
    <value>[o] -- record:1:required messages</value>
    <value>[o] --- field:0:optional message</value>
    <value>[o] --- field:0:optional severity</value>
    <value>[o] --- field:0:optional status</value>
    <value>[o] record:0:optional summary</value>
    <value>[o] - field:0:required conflict</value>
    <value>[o] - field:0:required missingDependency</value>
    <value>[o] - field:0:required skipped</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CklEYXRhQ3Vyc29yIGN1ciA9IG51bGw7ClN0cmluZyBpbXBvcnRBbGwgPSBudWxsOwpJRGF0YVtd
IGltcG9ydEZpbHRlciA9IG51bGw7CmJvb2xlYW4gYWxsID0gZmFsc2U7ClN0cmluZyBmb3JjZVVw
ZGF0ZSA9IG51bGw7CmJvb2xlYW4gZm9yY2UgPSBmYWxzZTsKamF2YS51dGlsLkxpc3Q8SW1wb3J0
TWVzc2FnZT4gb3V0TGlzdCA9IG51bGw7ClN0cmluZyBlcnJvciA9IG51bGw7Cgp0cnkgewoJUkJB
UHJveHkudmFsaWRhdGVTZXNzaW9uKFJCQVVpSGFuZGxlLkFTU0VUX0lNUE9SVF9WSUVXKTsKCglj
dXIgPSBwaXBlbGluZS5nZXRDdXJzb3IoKTsKCglpZiAoY3VyLmZpcnN0KCJmb3JjZSIpKSB7CgkJ
Zm9yY2VVcGRhdGUgPSAoU3RyaW5nKSBjdXIuZ2V0VmFsdWUoKTsKCX0KCglCb29sZWFuIHNpbXVs
YXRlID0gdHJ1ZTsKCWlmIChjdXIuZmlyc3QoInNpbXVsYXRlIikpIHsKCQlzaW11bGF0ZSA9IEJv
b2xlYW4udmFsdWVPZigoU3RyaW5nKSBjdXIuZ2V0VmFsdWUoKSk7Cgl9CgoJaWYgKGN1ci5maXJz
dCgiYWxsIikpIHsKCQlpbXBvcnRBbGwgPSAoU3RyaW5nKSBjdXIuZ2V0VmFsdWUoKTsKCX0KCglT
dHJpbmcgYmFzZTY0RW5jb2RlZFppcFN0cmVhbSA9IG51bGw7CglpZiAoY3VyLmZpcnN0KCJiYXNl
NjRFbmNvZGVkWmlwQ29udGVudCIpKSB7CgkJYmFzZTY0RW5jb2RlZFppcFN0cmVhbSA9IChTdHJp
bmcpIGN1ci5nZXRWYWx1ZSgpOwoJfQoKCWlmIChjdXIuZmlyc3QoImltcG9ydERhdGEiKSkgewoJ
CWltcG9ydEZpbHRlciA9IChJRGF0YVtdKSBjdXIuZ2V0VmFsdWUoKTsKCX0KCgoJaWYgKGltcG9y
dEFsbCAhPSBudWxsICYmIGltcG9ydEFsbC50cmltKCkuZXF1YWxzSWdub3JlQ2FzZSgidHJ1ZSIp
KSB7CgkJYWxsID0gdHJ1ZTsKCX0KCglpZiAoZm9yY2VVcGRhdGUgIT0gbnVsbCAmJiBmb3JjZVVw
ZGF0ZS50cmltKCkuZXF1YWxzSWdub3JlQ2FzZSgidHJ1ZSIpKSB7CgkJZm9yY2UgPSB0cnVlOwoJ
fQoKCWphdmEudXRpbC5MaXN0PEFzc2V0RmlsdGVyPiBmaWx0ZXJMaXN0ID0gbnVsbDsKCglpZiAo
YWxsKSB7CgkJZmlsdGVyTGlzdCA9IGNyZWF0ZVJCQUZpbHRlckxpc3QoKTsKCX0gZWxzZSB7CgkJ
ZmlsdGVyTGlzdCA9IGNyZWF0ZUZpbHRlckxpc3QoaW1wb3J0RmlsdGVyKTsKCX0KCglpZiAoYmFz
ZTY0RW5jb2RlZFppcFN0cmVhbSAhPSBudWxsKSB7CgkJb3V0TGlzdCA9IEFzc2V0TWFuYWdlclBy
b3h5LmltcG9ydEFzc2V0c0Zyb21aaXBTdHJlYW0oZmFsc2UsIGJhc2U2NEVuY29kZWRaaXBTdHJl
YW0sIGZpbHRlckxpc3QsIGZvcmNlLCBzaW11bGF0ZSk7Cgl9Cgp9IGNhdGNoIChUaHJvd2FibGUg
dCkgewoJZXJyb3IgPSB0LmdldExvY2FsaXplZE1lc3NhZ2UoKTsKCW91dExpc3QgPSBjcmVhdGVF
cnJvckltcG9ydE1lc3NhZ2UodCk7Cn0gZmluYWxseSB7CglWYWx1ZXNFbXVsYXRvci5yZW1vdmUo
cGlwZWxpbmUsICJiYXNlNjRFbmNvZGVkWmlwQ29udGVudCIpOwoJcG9wdWxhdGVJbXBvcnREYXRh
UmVzcG9uc2UocGlwZWxpbmUsIG91dExpc3QpOwoJVmFsdWVzRW11bGF0b3IucHV0KHBpcGVsaW5l
LCAiZXJyb3JNZXNzYWdlcyIsIGVycm9yKTsKfQo=</value>
</Values>
